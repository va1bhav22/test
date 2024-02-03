import React from "react";
import Comment from "../components/Comment";
import PostCreate from "../components/PostCreate";

const Posts = () => {
  return (
    <div className=" bg-gray-100">
      <div className="mx-10  shadow-lg rounded-lg bg-white">
        <PostCreate />
      </div>

      <div className="mx-10  shadow-lg rounded-md bg-white mt-2">
        <div className="grid grid-rows-3 px-4 py-5">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4"
                alt="profile"
                className="w-16 rounded-full"
              />
              <div>
                <p className="font-semibold">Anand Kushwaha</p>
                <p className="text-sm text-gray-400">12 minutes ago</p>
              </div>
            </div>
          </div>
          <div className="border w-9/12 mx-12 my-2 rounded-md">
            <p className="px-10 py-5">Hey ! How you doing ?</p>
          </div>
          <div className="flex  justify-between items-center">
            <div className="flex gap-5 items-center  w-full">
              <img
                src="https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4"
                alt="profile image"
                className="w-14 rounded-full border"
              />
              <input
                type="text"
                placeholder="Write your Comment"
                className=" w-9/12 rounded-3xl px-6 py-3 bg-gray-200 outline-none"
              />
              <button className="py-1 px-3 bg-red-400 text-white rounded-lg">
                Post
              </button>
            </div>
            <div className="  ">
              <div className="flex justify-between items-center gap-5">
                <input
                  type="text"
                  placeholder="Search Comments"
                  className="rounded-3xl px-6 py-3 bg-gray-200 outline-none"
                />
                <button className="px-3 py-1 text-white bg-red-400 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Posts;
