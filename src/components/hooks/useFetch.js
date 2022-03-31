import { useEffect, useState } from "react";

const fetchingState = Object.seal({
  data: null,
  loading: false,
  error: null,
});

export default function useFetch(url) {
  const [initState, setState] = useState(fetchingState);

  const setData = (val) => setState(initState.data[val]);
  const setLoading = (val) => setState(initState.loading[val]);
  const setError = (val) => setState(initState.error[val]);

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(async () => {
    setLoading(true);
    await fetch(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    await fetch(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };

  return { data, loading, error, refetch };
}
