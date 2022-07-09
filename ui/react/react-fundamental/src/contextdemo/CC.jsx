import { useContext } from "react";
import CounterContext from "./CounterContext";

function CC(){
  const [counterCtx, setCounterCtx]= useContext(CounterContext)
  function increaseFunc(){
    setCounterCtx(counterCtx+1);
  }
  
  return (
    <>
      <div>
      <h3>Child CC Component</h3>
      <button className="buttonClzz" onClick={increaseFunc}>Increase Ctx Counter</button>
      </div>
    </>
  );
}
export default CC;