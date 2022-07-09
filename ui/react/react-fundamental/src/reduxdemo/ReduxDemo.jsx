import AAA from './AAA';
import DDD from './DDD';
import '../App.css';
// import counterReducer from './counterReducer';
// import { Provider } from 'react-redux';
function ReduxDemo() {

  // const store = createStore(counterReducer);

  return (
    <>
      <div className="parentClss">
        <h3>Parent Component</h3>
      </div>
      {/* <Provider store={store}>
        <div className="lchildClss"> <AAA></AAA></div>
        <div className="rchildClss"><DDD></DDD> </div>
      </Provider> */}
    </>
  );
}
export default ReduxDemo;