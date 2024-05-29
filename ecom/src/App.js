import {React,Suspense,lazy, useRef} from "react";
import MaterialUi from "./Components/MaterialUi";
import MuiBtn from "./Components/MuiBtn";
import MuiGrid from "./MuiGrid";
import MuiStack from "./MuiStack";
import Usereducer from "./Components/UseCallback";
import { Route,Routes } from "react-router-dom";
import User from "./Components/User";
import Counter from "./Components/Reducer";
// import Lazy from "./Components/Lazy";
// const Lazy = lazy(() => import('./Components/Lazy')); 

function App() {
let inputval=useRef(null);

function updateInput(){
inputval.current.value="1000";
}
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Usereducer/>}/>
        <Route path="/muigrid" element={<MuiGrid/>}/>
        <Route path="/muibtn" element={<MuiBtn/>}/>
      </Routes> */}
      {/* <Suspense fallback={<h1> Data is Loading</h1>}>
      <Lazy/>
      </Suspense> */}
      <h2>Forward ref</h2>
      <User ref={inputval}/>
      <button onClick={updateInput}>Update InputBox</button>
      <br></br>
      <Counter/>
      <br></br>
      <Usereducer/>
    </div>
  );
}

export default App;
