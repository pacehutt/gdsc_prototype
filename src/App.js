
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
   <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
       <Router>
       <Routes>

      <Route path='/' element={<Home/>}></Route>
       
       </Routes>
       </Router>
   </div>
  );
}

export default App;
