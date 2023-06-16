import React, { useReducer } from "react";
import "./index.css";
const reducer = (state, action) => {
    if(action.type==="Increment")
    {
        state=state+1;
    }
    if(state>0 && action.type==="Decrement")
    {
        state=state-1;
    }
    return state;
}
const UseReducer = () => {
  const[state,dispatch] = useReducer(reducer,0);

  return (
    <>
      <div className="value">
        <p> {state}</p>
      </div>

      <button className="button2" onClick={() => dispatch({type:"Increment"})}>
        INCREMENT
      </button>

      <button
        className="button2"
        onClick={() => dispatch({type:"Decrement"})}
      >
        DECREMENT
      </button>
    </>
  );
};

export default UseReducer;
