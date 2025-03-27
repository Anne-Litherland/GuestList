import { useState, useEffect } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2412-GUESTS";
const API = BASE_URL + COHORT;

function useQuery(resource) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API + resource);
        if (!response.ok) throw Error(":(");
        const result = await response.json();
        setData(result.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    query();
  }, [resource]);
  return { data, loading, error };
}

export default useQuery;
