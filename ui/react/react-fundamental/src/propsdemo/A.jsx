import B from './B'
function A(props){
    function bChildBtnClickHandler(){
        console.log("Event uplift from A");
        props.onParentButnClick();
    }
  return (
    <>
      <div>
      <h3>Child A Component</h3>
        <B onBChildBtnClick={bChildBtnClickHandler}></B>
      </div>
    </>
  );
}
export default A;