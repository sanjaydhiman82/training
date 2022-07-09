import BBB from './BBB'
function AAA(){
    function bChildBtnClickHandler(){
        console.log("Event uplift from AA");
    }
  return (
    <>
      <div>
      <h3>Child A Component</h3>
        <BBB></BBB>
      </div>
    </>
  );
}
export default AAA;