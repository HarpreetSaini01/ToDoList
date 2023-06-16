import React, { useState } from "react";
import "./index.css";
const UseState = () => {
  const [myNum, setMyNum] = useState(0);
  return (
    <>
      <div className="value">
        <p> {myNum}</p>
      </div>

      <button className="button2" onClick={() => setMyNum(myNum + 1)}>
        INCREMENT
      </button>

      <button
        className="button2"
        onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
      >
        DECREMENT
      </button>
    </>
  );
};

export default UseState;
