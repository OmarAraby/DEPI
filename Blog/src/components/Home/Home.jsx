import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Posts from "../Posts/Posts";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    let { data } = await axios.get("https://dummyjson.com/posts");
    console.log(data.posts);
    setPosts(data.posts);
  }
  useEffect(() => {
    getPosts();
  }, []);

  function isPostsEmpty() {
    return posts.length == 0;
  }
  return (
    <>
      <div className="text-center">
        {" "}
        <h1>latest Posts</h1>
      </div>
      {isPostsEmpty() ? <Loading /> : <Posts posts={posts} />}
    </>
  );
}
