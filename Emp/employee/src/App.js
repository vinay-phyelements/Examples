import './App.css';
import EmpCreate from './components/EmpCreate';
import EmpDelete from './components/EmpDelete';
import EmpRead from './components/EmpRead';
import EmpUpdate from './components/EmpUpdate';

function App() {
  return (
    <div className="App">
      <b><h1 style={{color:'red'}}>CRUD Operation</h1></b>
      <EmpCreate/>
      <EmpRead/>
      <EmpUpdate/>
      <EmpDelete/>
    </div>
  );
}

export default App;
