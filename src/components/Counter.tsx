import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <span>{count}</span>
    </>
  );
};
