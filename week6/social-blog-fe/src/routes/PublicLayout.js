import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PublicNavbar from "../components/PublicNavbar";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import AddEditBlogPage from "../pages/AddEditBlogPage";
import NotFoundPage from "../pages/NotFoundPage";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/blogs/:id" component={BlogDetailPage} />
          <PrivateRoute exact path="/blog/add" component={AddEditBlogPage} />
          <PrivateRoute
            exact
            path="/blog/edit/:id"
            component={AddEditBlogPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
