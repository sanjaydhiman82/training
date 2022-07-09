import BB from './BB'
function AA(){
    function bChildBtnClickHandler(){
        console.log("Event uplift from AA");
    }
  return (
    <>
      <div>
      <h3>Child AA Component</h3>
        <BB></BB>
      </div>
    </>
  );
}
export default AA;