import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

const UseContextHook = () => {
  const firstName = useContext(UserContext);

  return (
    <div>
      <h4>Below are the users</h4>
      {firstName.map((e, index) => {
        return <li key={index}>{e}</li>;
      })}
    </div>
  );
};

export default UseContextHook;
