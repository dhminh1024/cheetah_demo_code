var fs = require("fs");
var spawnSync = require("child_process").spawnSync;
var execSync = require("child_process").execSync;

const projectFolder = process.argv[2];
if (!fs.existsSync(projectFolder)) {
  fs.mkdirSync(projectFolder);
}
process.chdir(`./${projectFolder}`);

const redux = process.argv[3];

let commands = [
  `npx create-react-app .`,
  `npm i react-bootstrap bootstrap react-router-dom`,
  `npm i axios react-toastify react-spinner`,
  `rm -Rf ././src/`,
  `mkdir ./src`,
  `touch ./src/App.js ./src/App.css ./src/index.js`,
  `mkdir ./src/components`,
  `touch ./src/components/PublicNavbar.js`,
  `touch ./src/components/AlertMsg.js`,
  `touch ./src/apiService.js`,
  `mkdir ./src/pages`,
  `touch ./src/pages/HomePage.js ./src/pages/NotFoundPage.js`,
  `mkdir ./src/images/`,
  `wget "https://drive.google.com/uc?export=download&id=1eeh0rgTIK739-usVtgExfl3wj1LBRbHV" -O ./public/favicon.png`,
  `wget "https://drive.google.com/uc?export=download&id=1Vyme0fw8Y6RFuu7tXQB5i1MxQoia0_8C" -O ./src/images/logo.svg`,
  `wget "https://drive.google.com/uc?export=download&id=1YWbA83zb3LQvQQY_V0pcqPb8nZTp1eAs" -O ./src/images/github_icon.png`,
];

function executeCommands(commands) {
  commands.forEach((command) => {
    console.log("Executing:", command);
    const result = execSync(command, { stdio: "inherit", shell: true });
    console.log(!result ? "Done" : result);
  });
}

let fileContents = [
  {
    filePath: "./src/index.js",
    content: `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
`,
  },
  {
    filePath: "./src/App.js",
    content: `import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AlertMsg from "./components/AlertMsg";

function App() {
  return (
    <Router>
      <PublicNavbar />
      <AlertMsg />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;`,
  },
  {
    filePath: "./src/pages/HomePage.js",
    content: `import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {

  return (
    <Container>
      <h1>HomePage</h1>
    </Container>
  );
};

export default HomePage;
    `,
  },
  {
    filePath: "./src/pages/NotFoundPage.js",
    content: `import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>404</h1>
          <p>The page you are looking for does not exist.</p>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFoundPage;
    `,
  },
  {
    filePath: "./src/components/PublicNavbar.js",
    content: `import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import githubIco from "../images/github_icon.png";
import { NavLink } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="CoderSchool" width="200px" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} exact={true} to="/">
          Home
        </Nav.Link>
      </Nav>
      <Nav>
        <a href="#your_github_repo_link" target="_blank" rel="noopener noreferrer">
          <img src={githubIco} alt="Github" width="32px" />
        </a>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
    `,
  },
  {
    filePath: "./src/components/AlertMsg.js",
    content: `import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertMsg = () => {
  return (
    <ToastContainer
      position="top-right"
      hideProgressBar={false}
      newestOnTop={true}
      pauseOnHover
    />
  );
};

export default AlertMsg;
    `,
  },
  {
    filePath: "./public/index.html",
    content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the "public" folder during the build.
      Only files inside the "public" folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running "npm run build".
    -->
    <title>${projectFolder}</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run "npm start" or "yarn start".
      To create a production bundle, use "npm run build" or "yarn build".
    -->
  </body>
</html>
    `,
  },
  {
    filePath: "./src/apiService.js",
    content: `import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default api;
    `,
  },
];

function createFileContents(fileContents) {
  fileContents.forEach((fileContent) => {
    const { filePath, content } = fileContent;
    if (filePath && fs.existsSync(filePath)) {
      console.log("Creating file", filePath);
      fs.writeFile(filePath, content, function (err) {
        if (err) return console.log(`ERROR: ${filePath}`, err);
      });
    }
  });
}

executeCommands(commands);
createFileContents(fileContents);

if (redux) {
  commands = [
    `npm i redux react-redux redux-thunk redux-devtools-extension`,
    `mkdir ./src/redux`,
    `mkdir ./src/redux/actions`,
    `mkdir ./src/redux/constants`,
    `mkdir ./src/redux/reducers`,
    `touch ./src/redux/store.js`,
    `touch ./src/redux/reducers/index.js ./src/redux/reducers/auth.reducer.js `,
    `touch ./src/redux/constants/auth.constants.js ./src/redux/actions/auth.actions.js `,
  ];

  fileContents = [
    {
      filePath: "./src/redux/store.js",
      content: `import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;`,
    },
    {
      filePath: "./src/index.js",
      content: `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);`,
    },
    {
      filePath: "./src/redux/reducers/auth.reducer.js",
      content: `import * as types from "../constants/auth.constants";
const initialState = {
  user: {},
  isAuthenticated: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        accessToken: payload.accessToken,
        loading: false,
        isAuthenticated: true,
      };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };

    default:
      return state;
  }
};

export default authReducer;`,
    },
    {
      filePath: "./src/redux/reducers/index.js",
      content: `import { combineReducers } from "redux";
import authReducer from "./auth.reducer";

export default combineReducers({
  auth: authReducer,
});`,
    },
    {
      filePath: "./src/redux/constants/auth.constants.js",
      content: `export const LOGIN_REQUEST = "AUTH.LOGIN_REQUEST";
export const LOGIN_SUCCESS = "AUTH.LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH.LOGIN_FAILURE";`,
    },
    {
      filePath: "src/redux/actions/auth.actions.js",
      content: `import * as types from "redux/constants/blog.constants";
import api from "../../apiService";

const loginRequest = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const authActions = {
  loginRequest,
};
export default authActions;`,
    },
    {
      filePath: "",
      content: ``,
    },
  ];
  executeCommands(commands);
  createFileContents(fileContents);
}
