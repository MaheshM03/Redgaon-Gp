import {
  createContext,
  useContext,
  useState,
  useCallback
} from 'react';

const CertificateContext = createContext();

/* ================= HOOK ================= */

export const useCertificates = () => {

  const context = useContext(
    CertificateContext
  );

  if (!context) {
    throw new Error(
      'useCertificates must be used within CertificateProvider'
    );
  }

  return context;
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

export const CertificateProvider = ({
  children
}) => {

  const [certs, setCerts] = useState({
    birth: [],
    death: [],
    residence: []
  });

  const [documents, setDocuments] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  /* ================= FETCH CERTIFICATES ================= */

  const fetchCertificates = useCallback(
    async (type) => {

      if (
        !['birth', 'death', 'residence']
          .includes(type)
      ) {
        return;
      }

      setLoading(true);

      try {

        const res = await fetch(
          `${API_BASE}/api/${type}-certificates`
        );

        if (!res.ok) {

          const errorText =
            await res.text();

          console.error(
            `Fetch ${type} certificates failed:`,
            res.status,
            errorText.slice(0, 200)
          );

          return;
        }

        const data = await safeJson(res);

        setCerts((prev) => ({
          ...prev,
          [type]: data.data || []
        }));

      } catch (err) {

        console.error(
          `Fetch ${type} certificates error:`,
          err
        );

      } finally {

        setLoading(false);
      }

    },
    []
  );

  /* ================= FETCH ALL ================= */

  const fetchAllCertificates =
    useCallback(async () => {

      await Promise.all(
        ['birth', 'death', 'residence']
          .map(fetchCertificates)
      );

    }, [fetchCertificates]);

  /* ================= FETCH DOCUMENTS ================= */

  const fetchDocuments = useCallback(
    async () => {

      try {

        const token =
          localStorage.getItem(
            'adminToken'
          );

        if (!token) {
          throw new Error(
            'No admin token'
          );
        }

        const res = await fetch(
          `${API_BASE}/api/admin/certificates`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
              'Content-Type':
                'application/json'
            }
          }
        );

        if (!res.ok) {

          const errorText =
            await res.text();

          console.error(
            'Fetch documents failed:',
            res.status,
            errorText.slice(0, 200)
          );

          return;
        }

        const data = await safeJson(res);

        setDocuments(data.data || []);

      } catch (err) {

        console.error(
          'Fetch documents error:',
          err
        );
      }

    },
    []
  );

  /* ================= UPDATE STATUS ================= */

  const updateCertStatus = useCallback(
    async (type, id, status) => {

      if (
        !['birth', 'death', 'residence']
          .includes(type)
      ) {
        return false;
      }

      try {

        const token =
          localStorage.getItem(
            'adminToken'
          );

        if (!token) {
          throw new Error(
            'Admin token missing'
          );
        }

        const res = await fetch(
          `${API_BASE}/api/${type}-certificates/${id}/status`,
          {
            method: 'PUT',

            headers: {
              'Content-Type':
                'application/json',

              Authorization:
                `Bearer ${token}`
            },

            body: JSON.stringify({
              status,
              approvedBy:
                localStorage.getItem(
                  'adminName'
                ) || 'Admin'
            })
          }
        );

        if (!res.ok) {

          const errorText =
            await res.text();

          console.error(
            'Update status failed:',
            res.status,
            errorText.slice(0, 200)
          );

          return false;
        }

        await fetchCertificates(type);

        return true;

      } catch (err) {

        console.error(
          'Update status error:',
          err
        );

        return false;
      }

    },
    [fetchCertificates]
  );

  return (
    <CertificateContext.Provider
      value={{
        certs,
        documents,
        loading,
        fetchCertificates,
        fetchAllCertificates,
        fetchDocuments,
        updateCertStatus
      }}
    >
      {children}
    </CertificateContext.Provider>
  );
};