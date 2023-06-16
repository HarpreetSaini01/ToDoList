import React from "react";
import UseState from "./components/Hooks/useState";
import UseEffect from "./components/Hooks/useEffect";
import UseReducer from "./components/Hooks/useReducer";

function App() {
  return (
    <>
    <div className = 'useState'>
      <UseState/>
      <p>-----------------------------------------------------------------------------------------------------------</p>
    </div>
    
    <div className = 'useEffect'>
      <UseEffect/>
      <p>-------------------------------------------------------------------------------------------------------</p>
    </div>
    
    <div className = 'useReducer'>
     <UseReducer/>
    <p>---------------------------------------------------------------------------------------------------------</p>
    </div>
    </>
  );
}

export default App;
