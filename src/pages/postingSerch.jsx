// components/Posts.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, searchPosts } from "../redux/actions/postActions";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(searchPosts(searchQuery));
  };

  return (
    <div>
      <h2>Posts</h2>
      {loading && <p>Loading...</p>}

      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {posts?.data?.posts?.map((post) => (
          <li key={post.id}>{post.caption}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
