import React, { useState, useContext } from "react";
import { UserContext } from "./App";

const Toggle = () => {
  const [isToggle, setToggle] = useState(false);
  const userInfo = useContext(UserContext);

  if (!userInfo.user) {
    return false;
  }

  return (
    <div>
      <button
        onClick={() => {
          setToggle(!isToggle);
        }}
      >
        Toggle
      </button>
      {isToggle && <h2>Hello!</h2>}
    </div>
  );
};

export default Toggle;
