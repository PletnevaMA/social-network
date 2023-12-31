import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <button className={classes.btn} onClick={handleClick}>
        Click
      </button>
      <span>{count}</span>
    </>
  );
};
