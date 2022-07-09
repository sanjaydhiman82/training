import AAA from './AAA';
import DDD from './DDD';
import '../App.css';
import store from './store';
import reduxobj from './redux.gif';
import { Provider } from 'react-redux';

function ReduxDemo() {
  return (
    <>
      <div className="parentClss">
        <h3>Parent Component</h3>
      </div>
      <Provider store={store}>
        <div className="lchildClss"> <AAA></AAA></div>
        <div className="rchildClss"><DDD></DDD> </div>
      </Provider>
      <img alt="lifecycle" src={reduxobj} className="imgClass"/>
    </>
  );
}
export default ReduxDemo;