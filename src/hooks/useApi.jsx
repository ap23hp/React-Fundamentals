import { useEffect, useState } from "react";

export function useApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();

        if (!ignore) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError("Something went wrong");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}
