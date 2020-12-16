const fs = require("fs");
const execSync = require("child_process").execSync;
const args = process.argv.slice(2);

const projectFolder = args[0];
const redux = args[1];
const router = args[2];

function createFolderIfNotExists(folderName) {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
}
createFolderIfNotExists(projectFolder);
process.chdir(projectFolder);

function createReactApp() {
  const commands = [
    "npx create-react-app .",
    "npm install bootstrap react-bootstrap",
    "npm install react-router-dom",
  ];
  commands.forEach((command) => {
    try {
      console.log("Commands:", command);
      const result = execSync(command, { stdio: "inherit", shell: true });
      console.log(!result ? "Done" : result);
    } catch (error) {
      process.exit();
    }
  });
}

function setupProject() {
  // Remove src
  fs.rmdirSync("src", { recursive: true });
  // Create the project structure
  const projectStructure = [
    { name: "src", type: "folder" },
    {
      name: "src/App.js",
      type: "file",
      content: `import React from 'react'

const App = () => {
  return (
    <div>
      Hello NodeJs
    </div>
  )
}

export default App`,
    },
    {
      name: "src/index.js",
      type: "file",
      content: `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
`,
    },
    {
      name: "src/App.css",
      type: "file",
      content: ``,
    },
  ];
  projectStructure.forEach((item) => {
    try {
      if (item.type === "folder") {
        fs.mkdirSync(item.name);
      } else if (item.type === "file") {
        fs.writeFileSync(item.name, item.content);
      }
    } catch (error) {
      console.log(error.message);
    }
  });
}

function setupRedux() {
  // Create the project structure
  const projectStructure = [
    { name: "src/redux", type: "folder" },
    { name: "src/redux/actions", type: "folder" },
    { name: "src/redux/constants", type: "folder" },
    { name: "src/redux/reducers", type: "folder" },
  ];
  projectStructure.forEach((item) => {
    try {
      if (item.type === "folder") {
        fs.mkdirSync(item.name);
      } else if (item.type === "file") {
        fs.writeFileSync(item.name, item.content);
      }
    } catch (error) {
      console.log(error.message);
    }
  });
}

function setupRouter() {
  // Create the project structure
  const projectStructure = [{ name: "src/routes", type: "folder" }];
  projectStructure.forEach((item) => {
    try {
      if (item.type === "folder") {
        fs.mkdirSync(item.name);
      } else if (item.type === "file") {
        fs.writeFileSync(item.name, item.content);
      }
    } catch (error) {
      console.log(error.message);
    }
  });
}

function main() {
  // createReactApp();
  setupProject();
  if (redux) setupRedux();
  if (router) setupRouter();

  // execSync("npm start", { stdio: "inherit", shell: true });
}

main();
