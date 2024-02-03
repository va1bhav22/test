import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../redux/actions/commentDataAction";
const Comment = () => {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector(
    (state) => state.commentData
  );
  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  console.log("comment==>", comments);
  return (
    <>
      {comments?.data?.getAllComments?.map((comment) => (
        <div className="mx-5 my-3 ">
          <div className="my-3">
            <div className="flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
                alt="profile"
                className="w-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">Anand Kushwaha</p>
                <p className="text-sm">{comment?.message}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
