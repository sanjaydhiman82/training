import AA from './AA';
import DD from './DD';
import { useState } from "react";
import CounterContext from './CounterContext';
import '../App.css';
function ContextDemo(){
  const [counterCtx, setCounterCtx] = useState(0);
    return (
      <>
        <div className="parentClss">
          <h3>Parent Component</h3>
          </div>
          <CounterContext.Provider value={[counterCtx, setCounterCtx]}>
          <div className="lchildClss"> <AA></AA></div>
          <div className="rchildClss"><DD></DD> </div>         
          </CounterContext.Provider> 
      </>
    );
}
export default ContextDemo;