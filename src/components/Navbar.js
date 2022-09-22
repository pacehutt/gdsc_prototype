import React,{useState} from 'react'
import './styles/navbar.css'
import logo from './gdscLogo.png'


function Navbar() {
  
  const [showNav, setShowNav] = useState(false);
  const navDisplay=()=>
  {
    if(showNav)
    {
      document.querySelector('.nav-items').classList.remove('showNav')
      setShowNav(false)

    }
    else
    {
      document.querySelector('.nav-items').classList.add('showNav')
      setShowNav(true)
    }
  }
 
  return (
    <div className='nav'>
        
       
            <div className="logo">
              <img src={logo} alt="gdsc_logo" />
            </div>
        
        <div className="nav-items">
            <ul>
                <li id='home'>Home</li>   
                <li  id='events'>Events</li>
                <li id='team'>Team</li>
                <li id='about'>About</li>
                <li id='blog'>Blog</li>
               
            </ul>
        </div>

        <div className="ham">
        <input type="checkbox" id="checkbox2" className="checkbox2 visuallyHidden"/>
        <label htmlFor="checkbox2">
            <div className="hamburger hamburger2" onClick={navDisplay}>
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
            </div>
        </label>
        </div>
    </div>
  )
}

export default Navbar