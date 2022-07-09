import './App.css';
import ClzzCmp from './components/ClzzCmp';
import Counter from './components/Counter';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateDemo from './propsdemo/StateDemo';
import ContextDemo from './contextdemo/ContextDemo';
import ReduxDemo from './reduxdemo/ReduxDemo';
import Axiosdemo from './components/Axiosdemo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="lifecycle" element={<ClzzCmp></ClzzCmp>} />
          <Route path="hooks" element={<Counter/>} />
          <Route path="propstate" element={<StateDemo/>} />
          <Route path="ctxstate" element={<ContextDemo/>} />
          <Route path="reduxstate" element={<ReduxDemo/>} />
          <Route path="axiosdemo" element={<Axiosdemo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );  
 
}

export default App;
