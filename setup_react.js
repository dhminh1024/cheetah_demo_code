var fs = require("fs");
var spawnSync = require("child_process").spawnSync;
var execSync = require("child_process").execSync;

const projectFolder = process.argv[2];
if (!fs.existsSync(projectFolder)) {
  fs.mkdirSync(projectFolder);
}
process.chdir(`./${projectFolder}`);

const redux = process.argv[3];
console.log(redux);

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
  `mkdir ./src/pages`,
  `touch ./src/pages/HomePage.js ./src/pages/NotFoundPage.js`,
  `mkdir ./src/images/`,
  `wget "https://drive.google.com/uc?export=download&id=1eeh0rgTIK739-usVtgExfl3wj1LBRbHV" -O ./public/favicon.png`,
  `wget "https://drive.google.com/uc?export=download&id=1Vyme0fw8Y6RFuu7tXQB5i1MxQoia0_8C" -O ./src/images/logo.svg`,
  `wget "https://drive.google.com/uc?export=download&id=1YWbA83zb3LQvQQY_V0pcqPb8nZTp1eAs" -O ./src/images/github_icon.png`,
];
commands.forEach((command) => {
  console.log(command);
  const result = execSync(command, { stdio: "inherit", shell: true });
  console.log(result);
});

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
    filePath: "",
    content: ``,
  },
];

fileContents.forEach((fileContent) => {
  const { filePath, content } = fileContent;
  if (filePath && fs.existsSync(filePath)) {
    fs.writeFile(filePath, content, function (err) {
      if (err) return console.log(`ERROR: ${filePath}`, err);
    });
  }
});
