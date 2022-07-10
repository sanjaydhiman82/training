import { useState } from 'react';
import A from './A';
import D from './D';
import '../App.css';
import propsobj from './props.jpg';
function StateDemo() {
  const [counter, setCounter] = useState(0);
  function incParentFun() {
    console.log("Parent state change by child");
    setCounter(counter + 1);
  }
  return (
    <>
      <h2>React state management by props</h2>
      <div className="parentClss">
        <h3>Parent Component</h3>
      </div>
      <div className="lchildClss"><img alt="lifecycle" src={propsobj} className="imgClass" /> <A onParentButnClick={incParentFun} counter={counter}></A></div>
      <div className="rchildClss">
        <D counter={counter}></D>
      </div>
    </>
  );
}
export default StateDemo;