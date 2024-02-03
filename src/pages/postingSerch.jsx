// components/Posts.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, searchPosts } from "../redux/actions/postActions";

const SearchPosts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handleSearch = (query) => {
    dispatch(searchPosts(query));
  };
  console.log(posts);
  return (
    <div>
      <h2>Posts</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul>
        {posts?.data?.posts?.map((post) => (
          <li key={post.id} className="text-red-800">
            {post.caption}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPosts;
