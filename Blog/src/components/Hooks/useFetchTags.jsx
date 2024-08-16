import { useEffect, useState } from "react";
import { api } from "../Utils/axios";

function useFetchTags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTags = async () => {
    try {
      const res = await api.get("/tags");
      console.log(res.data);
      setTags(res.data);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTags();
  }, []);
  return [tags, loading];
}

export default useFetchTags;
