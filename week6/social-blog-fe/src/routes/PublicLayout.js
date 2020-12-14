import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AlertMsg from "../components/AlertMsg";
import NotFoundPage from "../components/NotFoundPage";
import AddEditBlogPage from "../pages/AddEditBlogPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PublicNavbar from "../components/PublicNavbar";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container>
        <AlertMsg />
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
