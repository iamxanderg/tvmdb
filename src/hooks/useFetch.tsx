import { useEffect, useState } from 'react';

type FetchParams = {
  url: string;
};

export function useFetch(props: FetchParams) {
  const { url } = props;
  const [data, setData] = useState([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUrl: string = url;

    const fetchData = async () => {
      setLoading(true);

      await fetch(fetchUrl)
        .then((response) => response.json())
        .then((jsonData) => {
          setLoading(false);
          setData(jsonData);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}
