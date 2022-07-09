import { connect } from 'react-redux';
import { increment } from './counterAction';
function DDD(props){
  return (
    <>
      <div>
      <h3>Child D Component</h3>
      <h1>Counter ={props.counter} </h1>
      </div>
    </>
  );

}

const mapStateToProps = (state) => {
  return {
     counter: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
     increment: () => dispatch(increment())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DDD);

