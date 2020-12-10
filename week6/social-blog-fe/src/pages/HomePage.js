import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import blogActions from "../redux/actions/blog.actions";

import { ClipLoader } from "react-spinners";

const HomePage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const totalPageNum = useSelector((state) => state.blog.totalPageNum);
  const loading = useSelector((state) => state.blog.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogActions.blogsRequest());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="red" size={150} loading={true} />
        </div>
      ) : (
        <>
          {blogs.length > 0 ? (
            <ul>
              {blogs.map((blog) => (
                <li key={blog._id}>{blog.title}</li>
              ))}
            </ul>
          ) : (
            <p>There are no blogs</p>
          )}
        </>
      )}
    </Container>
  );
};

export default HomePage;
