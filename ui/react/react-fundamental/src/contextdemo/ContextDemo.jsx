import AA from './AA';
import DD from './DD';
import { useState } from "react";
import contextobj from './context.jpg';
import CounterContext from './CounterContext';
import '../App.css';
function ContextDemo() {
  const [counterCtx, setCounterCtx] = useState(0);
  return (
    <>
      <h1>React state management by Context</h1>
      <div className="parentClss">

        <h3>Parent Component</h3>
      </div>
      <CounterContext.Provider value={[counterCtx, setCounterCtx]}>
        <div className="lchildClss">
          <img alt="lifecycle" src={contextobj} className="imgClass"></img><AA></AA></div>
        <div className="rchildClss"><DD></DD> </div>
      </CounterContext.Provider>

    </>
  );
}
export default ContextDemo;