import CC from './CC'
function BB(){
  function cChildBtnCLickHndlr(){
    console.log("Event uplift from B");
  }
  return (
    <>
      <div>
       
      <h3>Child BB Component</h3>
        <CC></CC>
      </div>
    </>
  );
}
export default BB;