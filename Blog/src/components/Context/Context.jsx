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

  async function getPosts() {
    let { data } = await axios.get("https://dummyjson.com/posts");
    console.log(data.posts);
    setPosts(data.posts);
    setTotalCounts(data.total);
  }
  useEffect(() => {
    getPosts();
  }, []);

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
  useEffect(() => {
    fetchDataTag();
  }, [tag]);
  const postsPaginationClick = async (page) => {
    try {
      let limit = 20;

      let skip = (page - 1) * limit;

      const response = await api.get(`?limit=${limit}&skip=${skip}`);

      setPosts(response.data.posts);
      setTotalCounts(response.data.total);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handlingOdring = async (orderByValue) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/posts?sortBy=title&order=${orderByValue}`
      );
      setPosts(res.data.posts);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        posts,
        loading,
        setTag,
        totalCounts,
        postsPaginationClick,
        handlingOdring,
        orderBy,
        setOrderBy,
      }}
    >
      {children}
    </Context.Provider>
  );
}
