import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback
} from 'react';

const GrievanceContext = createContext();

/* ================= INITIAL STATE ================= */

const initialState = {
  grievances: [],
  loading: true
};

/* ================= REDUCER ================= */

const grievanceReducer = (state, action) => {

  switch (action.type) {

    case 'SET_GRIEVANCES':
      return {
        ...state,
        grievances: action.payload,
        loading: false
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

  const contentType =
    res.headers.get('content-type');

  if (
    !contentType ||
    !contentType.includes('application/json')
  ) {

    const text = await res.text();

    console.error(
      'Non-JSON response:',
      text.slice(0, 200)
    );

    throw new Error(
      'Server returned non-JSON response'
    );
  }

  return res.json();
};

/* ================= PROVIDER ================= */

export const GrievanceProvider = ({
  children
}) => {

  const [state, dispatch] = useReducer(
    grievanceReducer,
    initialState
  );

  /* ================= FETCH ================= */

  const fetchGrievances = useCallback(
    async () => {

      try {

        dispatch({
          type: 'SET_LOADING',
          payload: true
        });

        const res = await fetch(
          `${API_BASE}/api/grievance`,
          {
            credentials: 'omit'
          }
        );

        if (!res.ok) {

          const errorText =
            await res.text();

          console.error(
            'Grievances fetch failed:',
            res.status,
            errorText.slice(0, 200)
          );

          throw new Error(
            `HTTP ${res.status}`
          );
        }

        const json = await safeJson(res);

        dispatch({
          type: 'SET_GRIEVANCES',
          payload: json.data || []
        });

      } catch (err) {

        console.error(
          'Grievances fetch error:',
          err
        );

        dispatch({
          type: 'SET_LOADING',
          payload: false
        });
      }

    },
    []
  );

  /* ================= AUTO REFRESH ================= */

  useEffect(() => {
  fetchGrievances();
}, [fetchGrievances]);

  return (
    <GrievanceContext.Provider
      value={{
        grievances: state.grievances,
        loading: state.loading,
        fetchGrievances
      }}
    >
      {children}
    </GrievanceContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useGrievances = () =>
  useContext(GrievanceContext);