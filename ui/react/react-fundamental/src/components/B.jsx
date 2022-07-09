import C from './C'
function B(props){
  function cChildBtnCLickHndlr(){
    console.log("Event uplift from B");
    props.onBChildBtnClick();
  }
  return (
    <>
      <div>
       
      <h3>Child B Component</h3>
        <C onCChildBtnCLick={cChildBtnCLickHndlr}></C>
      </div>
    </>
  );
}
export default B;