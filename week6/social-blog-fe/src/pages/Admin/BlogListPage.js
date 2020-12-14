import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import PaginationBar from "../../components/PaginationBar";
import { useSelector, useDispatch } from "react-redux";
import blogActions from "../../redux/actions/blog.actions";
import { Button, Row, Col, Container, Table, FormCheck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const BlogListPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [myBlogOnly, setMyBlogOnly] = useState(false);
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.blog.loading);
  const blogs = useSelector((state) => state.blog.blogs);
  const currentUser = useSelector((state) => state.auth.user);
  const totalPageNum = useSelector((state) => state.blog.totalPageNum);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setQuery(searchInput);
    // dispatch(blogActions.blogsRequest(1));
  };

  const handleSort = (key) => {
    if (!loading) {
      setSortBy((sortBy) => ({
        key,
        ascending: -sortBy.ascending,
      }));
    }
  };

  const handleCheckMyBlogOnly = () => {
    if (myBlogOnly) {
      setMyBlogOnly(false);
    } else {
      setMyBlogOnly(currentUser._id);
    }
  };

  useEffect(() => {
    dispatch(blogActions.blogsRequest(pageNum, 10, query, myBlogOnly, sortBy));
  }, [dispatch, pageNum, query, sortBy, myBlogOnly]);

  return (
    <Container fluid>
      <h4 className="mt-3">Blog Manage</h4>
      <Row>
        <Col md={4}>
          <SearchForm
            searchInput={searchInput}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmitSearch}
            loading={loading}
          />
        </Col>
        <Col md={4} className="d-flex justify-content-end align-items-start">
          <FormCheck
            type="checkbox"
            label="My Blogs only"
            checked={myBlogOnly}
            onChange={handleCheckMyBlogOnly}
          />
        </Col>
        <Col md={4} className="d-flex justify-content-end align-items-start">
          <Link className="btn btn-primary" to="/admin/blog/add">
            <FontAwesomeIcon icon="plus" size="1x" /> Add
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="mouse-hover" onClick={() => handleSort("title")}>
                  Title <FontAwesomeIcon icon="sort" size="sm" />
                </th>
                <th>Author</th>
                <th
                  className="mouse-hover"
                  onClick={() => handleSort("reviewCount")}
                >
                  Review Count <FontAwesomeIcon icon="sort" size="sm" />
                </th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <Link to={`/admin/blogs/${blog._id}`}>{blog.title}</Link>
                  </td>
                  <td>{blog.author.name}</td>
                  <td>{blog.reviewCount}</td>
                  <td>
                    <Moment fromNow>{blog.createdAt}</Moment>
                  </td>
                  <td>
                    {currentUser?._id === blog?.author?._id ? (
                      <Link to={`/admin/blog/edit/${blog._id}`}>
                        <Button variant="primary">
                          <FontAwesomeIcon icon="edit" size="1x" /> Edit
                        </Button>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPageNum}
            loading={loading}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogListPage;
