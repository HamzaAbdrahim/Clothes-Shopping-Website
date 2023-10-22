import { useState, useEffect } from "react";

const useCustomFetch = <T>(url: string): [T | null, boolean, string | null] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
    };
  }, [url]);

  return [data, loading, error];
};

export default useCustomFetch;