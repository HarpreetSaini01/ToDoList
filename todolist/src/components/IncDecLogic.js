import React, { useState } from "react";
import "./index.css";
const IncDecLogic = () => {
    const [myNum,setMyNum]=useState(10);
  return (
    <>
    {myNum}
      <div className="increment">
        <button
        onClick={()=>setMyNum(myNum+1)}
        >INCREMENT</button>
       
      </div>
      <div className="decrement">
        <button 
         onClick={()=>setMyNum(myNum-1)}>

        DECREMENT</button>
      
      </div>
    </>
  );
};

export default IncDecLogic;
