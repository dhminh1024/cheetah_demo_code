import React from "react";
import CustomHookExample from "./components/CustomHookExample";
import UseMemoExample from "./components/UseMemoExample";
import UseRefExample from "./components/UseRefExample";

const App = () => {
  return (
    <div>
      <h1>Advanced Hooks</h1>
      {/* <CustomHookExample /> */}
      {/* <UseRefExample /> */}
      <UseMemoExample />
    </div>
  );
};

export default App;
