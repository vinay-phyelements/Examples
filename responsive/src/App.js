import './App.css';
import './comp/Navigation.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav1 from './comp/Nav1';
import Resp from './comp/Resp';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Resp/>}/>
        <Route path='/nav1' element={<Nav1/>}/>
      </Routes>
      </Router>
      {/* <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main> */}
    </div>
  );
}

export default App;
