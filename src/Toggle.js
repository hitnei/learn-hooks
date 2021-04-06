import React, { useState, useContext } from "react";
import { UserContext } from "./App";
import DishForm from './DishForm'

const Toggle = () => {
  const [isToggle, setToggle] = useState(false);
  const userInfo = useContext(UserContext);

  if (!userInfo.user) {
    return false;
  }

  return (
    <div>
      {isToggle ? (<DishForm setToggle={setToggle} />) : (<button onClick={() => { setToggle(!isToggle); }}>Open</button>)}
    </div>
  );
};

export default Toggle;
