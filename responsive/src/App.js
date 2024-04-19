import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav1 from './components/Nav1';
import Resp from './components/Resp';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Resp/>}/>
        <Route path='/nav1' element={<Nav1/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
