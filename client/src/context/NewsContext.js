import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback
} from 'react';

const NewsContext = createContext();

const initialState = {
  news: [],
  loading: true
};

const newsReducer = (state, action) => {

  switch (action.type) {

    case 'SET_NEWS':
      return {
        ...state,
        news: action.payload,
        loading: false
      };

    case 'ADD_NEWS':
      return {
        ...state,
        news: [action.payload, ...state.news]
      };

    case 'UPDATE_NEWS':
      return {
        ...state,
        news: state.news.map((n) =>
          n._id === action.payload._id
            ? action.payload
            : n
        )
      };

    case 'DELETE_NEWS':
      return {
        ...state,
        news: state.news.filter(
          (n) => n._id !== action.payload
        )
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};

/* ================= API BASE ================= */

const normalizeApiBase = (baseUrl) => {

  if (!baseUrl) return '';

  return baseUrl.replace(/\/+$|\/api$/i, '');
};

const API_BASE = normalizeApiBase(
  process.env.REACT_APP_API_URL ||
  (
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000'
      : 'https://redgaon-backend.onrender.com'
  )
);

/* ================= SAFE JSON ================= */

const safeJson = async (res) => {

  const contentType = res.headers.get('content-type');

  if (
    !contentType ||
    !contentType.includes('application/json')
  ) {

    const text = await res.text();

    console.error(
      'Non-JSON response received:',
      text.slice(0, 200)
    );

    throw new Error(
      'Server returned non-JSON response'
    );
  }

  return res.json();
};

/* ================= PROVIDER ================= */

export const NewsProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    newsReducer,
    initialState
  );

  /* ================= FETCH NEWS ================= */

  const fetchNews = useCallback(async () => {

    try {

      dispatch({
        type: 'SET_LOADING',
        payload: true
      });

      const res = await fetch(
        `${API_BASE}/api/news`
      );

      if (!res.ok) {

        const errorText = await res.text();

        console.error(
          'News fetch failed:',
          res.status,
          errorText.slice(0, 200)
        );

        throw new Error(`HTTP ${res.status}`);
      }

      const json = await safeJson(res);

      dispatch({
        type: 'SET_NEWS',
        payload: json.data || []
      });

    } catch (err) {

      console.error(
        'News fetch error:',
        err
      );

      dispatch({
        type: 'SET_LOADING',
        payload: false
      });
    }

  }, []);

  /* ================= ADD NEWS ================= */

  const addNews = useCallback(async (newsData) => {

    try {

      const token =
        localStorage.getItem('adminToken');

      const headers = {
        'Content-Type': 'application/json'
      };

      if (token) {
        headers['Authorization'] =
          `Bearer ${token}`;
      }

      const res = await fetch(
        `${API_BASE}/api/news`,
        {
          method: 'POST',
          headers,
          credentials: 'include',
          body: JSON.stringify(newsData)
        }
      );

      if (!res.ok) {

        const errorText = await res.text();

        console.error(
          'Add news failed:',
          res.status,
          errorText.slice(0, 200)
        );

        if (res.status === 401) {
          throw new Error(
            'Unauthorized. Please login again.'
          );
        }

        throw new Error(`HTTP ${res.status}`);
      }

      const data = await safeJson(res);

      dispatch({
        type: 'ADD_NEWS',
        payload: data.data
      });

      return data;

    } catch (err) {

      console.error(
        'Add news error:',
        err
      );

      return null;
    }

  }, []);

  /* ================= UPDATE NEWS ================= */

  const updateNews = useCallback(
    async (id, newsData) => {

      try {

        const token =
          localStorage.getItem('adminToken');

        const headers = {
          'Content-Type': 'application/json'
        };

        if (token) {
          headers['Authorization'] =
            `Bearer ${token}`;
        }

        const res = await fetch(
          `${API_BASE}/api/news/${id}`,
          {
            method: 'PUT',
            headers,
            credentials: 'include',
            body: JSON.stringify(newsData)
          }
        );

        if (!res.ok) {

          const errorText = await res.text();

          console.error(
            'Update news failed:',
            res.status,
            errorText.slice(0, 200)
          );

          if (res.status === 401) {
            throw new Error(
              'Unauthorized. Please login again.'
            );
          }

          throw new Error(`HTTP ${res.status}`);
        }

        const data = await safeJson(res);

        dispatch({
          type: 'UPDATE_NEWS',
          payload: data.data
        });

        return data;

      } catch (err) {

        console.error(
          'Update news error:',
          err
        );

        return null;
      }

    },
    []
  );

  /* ================= DELETE NEWS ================= */

  const deleteNews = useCallback(async (id) => {

    try {

      const token =
        localStorage.getItem('adminToken');

      const headers = {};

      if (token) {
        headers['Authorization'] =
          `Bearer ${token}`;
      }

      const res = await fetch(
        `${API_BASE}/api/news/${id}`,
        {
          method: 'DELETE',
          headers,
          credentials: 'include'
        }
      );

      if (!res.ok) {

        console.error(
          'Delete news failed:',
          res.status
        );

        return;
      }

      dispatch({
        type: 'DELETE_NEWS',
        payload: id
      });

    } catch (err) {

      console.error(
        'Delete news error:',
        err
      );
    }

  }, []);

  /* ================= AUTO FETCH ================= */

  useEffect(() => {

    fetchNews();

    const interval = setInterval(
      fetchNews,
      30000
    );

    return () => clearInterval(interval);

  }, [fetchNews]);

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        loading: state.loading,
        fetchNews,
        addNews,
        updateNews,
        deleteNews
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};



export const useNews = () =>
  useContext(NewsContext);