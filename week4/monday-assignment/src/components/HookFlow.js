import React, { useState, useEffect } from "react";

function Child() {
  console.log("%c    Child: render start", "color: MediumSpringGreen");

  const [count, setCount] = useState(() => {
    console.log("%c    Child: useState(() => 0)", "color: tomato");
    return 0;
  });

  useEffect(() => {
    console.log("%c    Child: useEffect(() => {})", "color: LightCoral");
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}) cleanup 🧹",
        "color: LightCoral"
      );
    };
  });

  useEffect(() => {
    console.log(
      "%c    Child: useEffect(() => {}, [])",
      "color: MediumTurquoise"
    );
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  useEffect(() => {
    console.log("%c    Child: useEffect(() => {}, [count])", "color: HotPink");
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}, [count]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [count]);

  const element = (
    <button onClick={() => setCount((previousCount) => previousCount + 1)}>
      {count}
    </button>
  );

  console.log("%c    Child: render end", "color: MediumSpringGreen");

  return element;
}

function HookFlow() {
  console.log("%cApp: render start", "color: MediumSpringGreen");

  const [showChild, setShowChild] = useState(() => {
    console.log("%cApp: useState(() => false)", "color: tomato");
    return false;
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const obj = {};

  useEffect(() => {
    console.log("%cApp: useEffect(() => {})", "color: LightCoral");
    return () => {
      console.log("%cApp: useEffect(() => {}) cleanup 🧹", "color: LightCoral");
    };
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("CHEETAH-------------------");
    console.log("%cApp: useEffect(() => {}, [])", "color: MediumTurquoise");
    // window.addEventListener("resize", updateWindowWidth);
    return () => {
      console.log(
        "%cApp: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
      // window.removeEventListener("resize", updateWindowWidth);
    };
  }, [obj]);

  useEffect(() => {
    console.log("%cApp: useEffect(() => {}, [showChild])", "color: HotPink");
    return () => {
      console.log(
        "%cApp: useEffect(() => {}, [showChild]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [showChild]);

  const element = (
    <>
      {/* <h2>{windowWidth}</h2> */}
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{" "}
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: "solid",
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </>
  );

  console.log("%cApp: render end", "color: MediumSpringGreen");

  return element;
}

export default HookFlow;
