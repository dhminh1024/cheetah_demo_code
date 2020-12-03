import React from "react";
import CustomHookExample from "./components/CustomHookExample";
import UseMemoExample from "./components/UseMemoExample";
import UseRefExample from "./components/UseRefExample";

const App = () => {
  return (
    <div>
      <CustomHookExample />
      <UseRefExample />
      <UseMemoExample />
    </div>
  );
};

export default App;
