import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropDrillingExercise from "./pages/PropDrillingExercise";
import NotFoundPage from "./pages/NotFoundPage";
import AlertMsg from "./components/AlertMsg";
import ReduxExercise from "./pages/ReduxExercise";
import PropDrillingFinal from "./pages/PropDrillingFinal";
import ReduxFinal from "./pages/ReduxFinal";

function App() {
  return (
    <Router>
      <PublicNavbar />
      <AlertMsg />
      <Switch>
        <Route exact path="/" component={PropDrillingExercise} />
        <Route exact path="/prop-final" component={PropDrillingFinal} />
        <Route exact path="/redux-exercise" component={ReduxExercise} />
        <Route exact path="/redux-final" component={ReduxFinal} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
