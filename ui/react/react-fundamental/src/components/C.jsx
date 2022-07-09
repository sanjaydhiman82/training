function C(props){
  
  function increaseFunc(){
    console.log("Event uplift from C");
    props.onCChildBtnCLick();
  }
  
  return (
    <>
      <div>
      <h3>Child C Component</h3>
      <button className="buttonClzz" onClick={increaseFunc}>Increase porp Counter</button>
      </div>
    </>
  );
}
export default C;