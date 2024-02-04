import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../redux/actions/commentDataAction";
import { getUserDetails } from "../redux/actions/selfUser";
import Avatar from "@mui/material/Avatar";
const Comment = ({ post }) => {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector(
    (state) => state.commentData
  );

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  const { userDetails } = useSelector((state) => state?.user);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);
  return (
    <>
      {post?.map((comment) => (
        <div className="mx-5 my-3 ">
          <div className="my-3">
            <div className="flex items-center gap-2">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
                alt="profile"
                className="w-10 rounded-full"
              /> */}
              <Avatar>{userDetails?.data?.firstName?.[0]}</Avatar>
              <div>
                <p className="font-semibold text-sm">
                  {" "}
                  {userDetails?.data?.firstName} {userDetails?.data?.lastName}
                </p>
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
