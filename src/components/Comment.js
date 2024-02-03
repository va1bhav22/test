import React from "react";
import { MdOutlineSort } from "react-icons/md";

const Comment = () => {
  return (
    <>
      <div className="mx-5 my-3 ">
        <div className="flex items-center gap-6 ">
          <p>9,124 Comments</p>
          <div className="flex items-center gap-2">
            <p>
              <MdOutlineSort />
            </p>
            <p>Sort by</p>
          </div>
        </div>
        <div className="my-3">
          <div className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
              alt="profile"
              className="w-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">Anand Kushwaha</p>
              <p className="text-sm">I am Good Bro</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
