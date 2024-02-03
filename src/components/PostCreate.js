import React from "react";

const PostCreate = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex py-5 px-3 gap-6">
        <input
          type="text"
          placeholder="Search Posts..."
          className="rounded-3xl px-6 py-3 bg-gray-200 outline-none"
        />
        <button className="bg-red-500 text-white px-4 rounded-lg">
          Search
        </button>
      </div>
      <button>Create Post</button>
    </div>
  );
};

export default PostCreate;
