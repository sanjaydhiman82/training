import { useState } from 'react';
import A from './A';
import D from './D';
import '../App.css';
function StateDemo(){
    const [counter, setCounter] = useState(0);
    function incParentFun(){
        console.log("Parent state change by child");
        setCounter(counter+1);
    }
    return (
      <>
        <div className="parentClss">
          <h3>Parent Component</h3>
          </div>
          <div className="lchildClss"> <A onParentButnClick={incParentFun} counter={counter}></A></div>
         <div className="rchildClss">
         <D counter={counter}></D>
        </div>
      </>
    );
  }
  export default StateDemo;