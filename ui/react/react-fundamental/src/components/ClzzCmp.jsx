import React,{Component} from 'react';
import imgObj from '../components/lifecycle.jpeg';
class ClzzCmp extends Component
{
     state = {
        count: 0
      };
    
    constructor(props){
        super(props);
        console.log("MOUNT->:constructor:method is called when the component is initiated and it’s the best place to initialize our state");
    }
    handleClick = () => {
        this.setState((prevState, { count }) => ({
          count: prevState.count + 1
        }));
      };
    
    render(props) {
        console.log("MOUNT->:render:This method is responsible to render our JSX to DOM");
        return <div>
            <div>
            
            <h2>Class life cycle</h2>
            <button onClick={this.handleClick} className="buttonClzz" type="button">increment</button>
            Counter = <b>{this.state.count}</b>
            <p>Please check browser console</p>
            </div>
            <img alt="lifecycle" src={imgObj} className="imgClass"></img>
        </div>;
    }

    static getDerivedStateFromProps(props, state) {
        console.log("MOUNT->:getDerivedStateFromProps:method is called right before rendering the element in our DOM");
        return state;
    }
    componentDidMount(){
        console.log("MOUNT->:componentDidMount:called after the component is rendered. You can also use this method to call external data from the API");
    }
    shouldComponentUpdate(){
        console.log("UPDATE->:shouldComponentUpdate:used when you want your state or props to update or not");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("UPDATE->:getSnapshotBeforeUpdate:called right before updating the DOM. It has access to props and state before the update.");
    return prevProps;
    }
    componentDidUpdate(prevState){
        console.log("UPDATE->:componentDidUpdate:is called after the component is updated in the DOM"+prevState);
    }
    componentWillUnmount(){
        console.log("UNMOUNT->:componentWillUnmount:any cleanup actions like canceling API calls or clearing any caches in storage you can perform that in the componentWillUnmount method");
    }
    static getDerivedStateFromError(error) {
        console.log(`Error log from getDerivedStateFromError: ${error}`);
        return { hasError: true };
      }
    
}

export default ClzzCmp;
