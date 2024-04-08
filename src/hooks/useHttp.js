import { useEffect, useState } from "react";
//! Fetch API ile http istekleri için useHttp custom hooku
const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (errors) {
        setError(errors);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { isLoading, error, data };
};

export default useHttp;
