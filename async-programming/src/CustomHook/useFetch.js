import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Using the traditional fetch method
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await fetch(url);
  //         if (!response.ok) {
  //           const text = await response.statusText;
  //           const code = await response.status;
  //           throw Error(`Error code is ${code} and message is ${text}`);
  //         }
  //         console.log("Response: " + response);
  //         const jsonResponse = await response.json();
  //         setData(jsonResponse);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, [url]);

  useEffect(() => {
    if (url === null) return;
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log(response);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { loading, data, error };
}

export default useFetch;
