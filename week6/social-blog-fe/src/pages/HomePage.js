import BlogCard from "../components/BlogCard";
import PaginationBar from "../components/PaginationBar";
import React, { useEffect, useState } from "react";
import { Button, CardColumns, Container, Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import blogActions from "../redux/actions/blog.actions";

const HomePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.blog.loading);
  const blogs = useSelector((state) => state.blog.blogs);
  const totalPageNum = useSelector((state) => state.blog.totalPageNum);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(blogActions.blogsRequest(pageNum));
  }, [dispatch, pageNum]);

  const handleClickOnBlog = (id) => {
    history.push(`/blogs/${id}`);
  };

  return (
    <Container>
      <Jumbotron className="text-center">
        <h1>Social Blog</h1>
        <p>Write about your amazing experiences.</p>
        {isAuthenticated && (
          <Link to="/blog/add">
            <Button variant="primary">Write now</Button>
          </Link>
        )}
      </Jumbotron>
      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPageNum}
        loading={loading}
      />
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          {blogs?.length ? (
            <>
              <CardColumns>
                {blogs.map((blog) => (
                  <BlogCard
                    blog={blog}
                    key={blog._id}
                    handleClick={handleClickOnBlog}
                  />
                ))}
              </CardColumns>
            </>
          ) : (
            <p>There are no blogs</p>
          )}
        </>
      )}
    </Container>
  );
};

export default HomePage;
