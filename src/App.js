import './App.css';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar></Navbar>
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/about' element={<Home />}></Route>
          <Route path='/blog' element={<Home />}></Route>
        </Routes>
        <Sidebar></Sidebar>
      </Router>
    </div>
  );
}

export default App;
