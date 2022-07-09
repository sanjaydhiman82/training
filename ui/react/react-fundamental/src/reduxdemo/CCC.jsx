import { increment,decrease } from './counterAction';
import { connect } from 'react-redux';
function CCC(props){
   return (
    <>
      <div>
      <h3>Child C Component</h3>
      <button className="buttonClzz" onClick={props.incrementFunc}>Increase Ctx Counter</button>
      <button className="buttonClzz" onClick={props.decreaseFunc}>Decrease Ctx Counter</button>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    incrementFunc: () => dispatch(increment()),
    decreaseFunc: () => dispatch(decrease())
  };
};
export default connect(null, mapDispatchToProps)(CCC);