import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlertMsg from "./components/AlertMsg";
import PrivateRoute from "./routes/PrivateRoute";
import AdminLayout from "./routes/AdminLayout";
import PublicLayout from "./routes/PublicLayout";

function App() {
  return (
    <Router>
      <AlertMsg />

      <Switch>
        <PrivateRoute path="/admin" component={AdminLayout} />
        <Route path="/" component={PublicLayout} />
      </Switch>
    </Router>
  );
}

export default App;
