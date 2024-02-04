import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../components/Comment";
import { getAllPosts, searchPosts } from "../redux/actions/postActions";
import { addComment } from "../redux/actions/commentAction";
import { getUserDetails } from "../redux/actions/selfUser";
import {
  getAllComments,
  searchComments,
} from "../redux/actions/commentDataAction";
import CreatePost from "../components/CreatePost";
import Avatar from "@mui/material/Avatar";
import dayjs from "dayjs";
const Posts = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { posts, loading, error } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);
  const handleSearch = () => {
    setSearchError(null);
    if (searchQuery.trim() === "") {
      dispatch(getAllPosts());
    } else {
      dispatch(searchPosts(searchQuery));
    }
  };
  const handleSearchTerm = () => {
    dispatch(searchComments(searchTerm));
  };

  const handleAddComment = (postId) => {
    if (commentInput.trim() === "") {
      return;
    }
    dispatch(addComment({ postId: postId, message: commentInput }));
    setCommentInput("");
  };
  const OpenModel = () => {
    setOpen(true);
  };
  const CloseModel = () => {
    setOpen(false);
  };

  const { userDetails } = useSelector((state) => state?.user);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <div className=" ">
      <div className="mx-10  shadow-lg rounded-lg bg-white  px-3">
        <div className="flex justify-between items-center">
          <div className="flex py-5 px-3 gap-6">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-3xl px-6 py-3 bg-gray-200 outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-red-500 text-white px-4 rounded-lg"
            >
              Search
            </button>
          </div>
          <button
            onClick={OpenModel}
            className="py-2 px-3 bg-sky-500 rounded-md  font-semibold text-white"
          >
            Create Post
          </button>
        </div>
      </div>

      {searchError ? (
        <p>No results found</p>
      ) : (
        <div>
          {posts?.data?.posts?.map((item) => (
            <div className="mx-10  shadow-lg rounded-md bg-white mt-2 p-6">
              <div className="grid grid-rows-3 px-4 py-5">
                <div>
                  <div className="flex items-center gap-2">
                    {/* <img
                      src="https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4"
                      alt="profile"
                      className="w-16 rounded-full"
                    /> */}
                    <Avatar>{userDetails?.data?.firstName?.[0]}</Avatar>
                    <div>
                      <p className="font-semibold">
                        {userDetails?.data?.firstName}{" "}
                        {userDetails?.data?.lastName}
                      </p>
                      <p className="text-sm text-gray-400">
                        {dayjs(item?.createdAt).format("MMMM D, YYYY h:mm A")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border w-9/12 mx-12 my-2 rounded-md">
                  <p className="px-10 py-5">{item?.caption}</p>
                </div>
                <div className="flex  justify-between items-center">
                  <div className="flex gap-5 items-center  w-full">
                    {/* <img
                      src="https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4"
                      alt="profile image"
                      className="w-14 rounded-full border"
                    /> */}
                    <Avatar>{userDetails?.data?.firstName?.[0]}</Avatar>
                    <input
                      type="text"
                      placeholder="Write your Comment"
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      className=" w-9/12 rounded-3xl px-6 py-3 bg-gray-200 outline-none"
                    />

                    <button
                      onClick={() => handleAddComment(item.id)}
                      className="py-1 px-3 bg-red-400 text-white rounded-lg"
                    >
                      Post
                    </button>
                  </div>
                  <div className="  ">
                    <div className="flex justify-between items-center gap-5">
                      <input
                        type="text"
                        placeholder="Search comment"
                        className="rounded-3xl px-6 py-3 bg-gray-200 outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button
                        onClick={handleSearchTerm}
                        className="px-3 py-1 text-white bg-red-400 rounded-lg"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-6 ">
                  <p>9,124 Comments</p>
                  <div className="flex items-center gap-2">
                    <p>{/* <MdOutlineSort /> */}</p>
                    <p>Sort by</p>
                  </div>
                </div>

                <Comment post={item?.Comment} />
              </div>
            </div>
          ))}
        </div>
      )}

      <div>
        {open && (
          <>
            <CreatePost open={open} onClose={CloseModel} />
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
