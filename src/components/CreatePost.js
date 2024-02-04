import React, { useState } from "react";

import { Dialog } from "@mui/material";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/createPostAction";
const CreatePost = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    const postData = {
      caption: title,
    };
    dispatch(createPost(postData));
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <div className="p-5 bg-white flex flex-col justify-center items-center w-full">
        <div className="w-[90%] flex flex-col gap-3">
          <h2 className="text-xl text-center font-bold"> CreatePost</h2>
          <div className=" flex flex-col gap-3">
            <input
              type="text"
              placeholder=" title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border outline-none py-2 "
            />
            <button
              onClick={handleSubmit}
              className="bg-sky-500 py-2 text-white font-bold"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CreatePost;
