import axios from "axios";

import React, { createContext, useState, useEffect } from "react";
import { api } from "../Utils/axios";

export const Context = createContext();

export function ContextProvioder({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCounts, setTotalCounts] = useState(0);
  const [orderBy, setOrderBy] = useState("asc");
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const fetchData = async ({ querySearch }) => {
    try {
      const res = await axios.get(`https://dummyjson.com/posts`);
      setPosts(res.data.posts);

      setTotalCounts(res.data.total);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  //   const fetchDataSearch = async () => {
  //     try {
  //       const res = await axios.get(`https://dummyjson.com/posts/search`, {
  //         params: { q: search },
  //       });
  //       setPosts(res.data.posts);
  //       console.log(res.data.posts);
  //       console.log(search);
  //       setTotalCounts(res.data.total);
  //       console.log(res.data.total);
  //     } catch (e) {
  //       console.log(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  const fetchDataTag = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/posts/tag/${tag}`);
      setPosts(res.data.posts);
      console.log(res.data.posts);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  const postsPaginationClick = async (page) => {
    try {
      let limit = 20;

      let skip = (page - 1) * limit;

      const res = await api.get(`?limit=${limit}&skip=${skip}`);

      setPosts(res.data.posts);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  //   const handlingOdring = async (orderByValue) => {
  //     try {
  //       const res = await axios.get(
  //         `https://dummyjson.com/posts?sortBy=title&order=${orderByValue}`
  //       );
  //       setPosts(res.data.posts);
  //     } catch (e) {
  //       console.log(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  //   useEffect(() => {
  //     fetchDataSearch();
  //   }, [search]);
  //   useEffect(() => {
  //     fetchDataTag();
  //   }, [tag]);


  return (
    <Context.Provider
      value={{
        data: posts,
        loading,
        setTag,
        totalCounts,
        postsPaginationClick,
        // handlingOdring,
        orderBy,
        // setOrderBy,
        search,
        // setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
}
