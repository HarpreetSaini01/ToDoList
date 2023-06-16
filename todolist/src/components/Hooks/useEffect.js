import React,{useState,useEffect} from 'react';


const UseEffect = () => { 
    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
     document.title = `Chats(${myNum})`;
    },[myNum])
    
    return (
      <>
        <div className="value">
          <p> {myNum}</p>
        </div>
  
        <button className="button2" onClick={() => setMyNum(myNum + 1)}>
          INCREMENT
        </button>
      </>
    );
}

export default UseEffect;