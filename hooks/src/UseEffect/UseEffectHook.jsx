import React, { useState } from "react";
import { useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  // Use effect is always called whenever we render a page i.e. on load of this component
  // The second parameter (i.e. []) triggers the useEffect on state change
  useEffect(() => {
    console.log("UseEffect is rendered");
  }, []);

  return (
    <div>
      <button onClick={() => increment()}>I clicked {count} times</button>
      {/* Conditional Rendering
      <div>
        {count > 2 ? "Hello World" : "Count is lesser than 2"}
      </div> */}
    </div>
  );
};

export default UseEffectHook;
