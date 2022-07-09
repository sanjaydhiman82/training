import React, { useState,useEffect  } from "react";
import hookobj from '../components/hook.jpg';

function Counter(){
    const[count, setCount] = useState(0);
  
    function handleClick(){
      setCount(count+1);
    };
     
    useEffect(() => {
      console.log("useEffect: no param");
    });
    useEffect(() => {
      console.log("useEffect: param with empty value");
    },[]);
    
    useEffect(() => {
      console.log("useEffect: param with with state count");
    },[count]);

  return (
    <>
      <div>
       
        <h1>React hook</h1>  <button onClick={handleClick} className="buttonClzz" type="button">increment</button>Counter - <b>{count}</b>
      </div>
      <img alt="hooks" src={hookobj} className="imgClass"></img>
    </>
  );
}
export default Counter;