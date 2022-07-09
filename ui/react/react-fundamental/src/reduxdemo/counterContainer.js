import { connect } from 'react-redux'
import { increment } from './counterAction';
import ReduxDemo from './ReduxDemo';

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
export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);