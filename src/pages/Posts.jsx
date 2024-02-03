import React from "react";

const Posts = () => {
  return (
    <div className=" bg-gray-100">
      <div className="mx-10  shadow-lg rounded-md bg-white ">
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
          <div className="flex items-center mx-12 mt-5 gap-4">
            <img
              src="https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4"
              alt="profile image"
              className="w-14 rounded-full border"
            />
            <input
              type="text"
              placeholder="comment..."
              className="border border-black w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
