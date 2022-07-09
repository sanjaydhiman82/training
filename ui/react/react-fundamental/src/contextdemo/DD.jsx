import { useContext } from "react";
import CounterContext from "./CounterContext";

function DD(){
 const [counterCtx, setCounterCtx]= useContext(CounterContext)
  return (
    <>
      <div>
      <h3>Child D Component</h3>
      <h1>Counter props ={counterCtx} </h1>
      </div>
    </>
  );
}
export default DD;