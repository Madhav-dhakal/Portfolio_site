import React, { useState } from "react"
import "./navbar.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import {Link} from "react-scroll"
const Navbar=()=>{ 
     const [theme, setTheme] = useState('light'); 

     const toggleTheme = () => {
          setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        };
          
             return(
             
 <div className= {`n-wrapper ${theme}`} id="Navbar" style={{ position: "fixed", top: 0, left: 80, right: 0, zIndex: 100}}>
               <div className="n-left">
               <Link spy={true} to='Intro' smooth={true} duration={600} offset={-100}>
                    <div className="n-name"><img className="n-img" src={require("../../img/rk.jpg") } alt="facebook" height={40} /></div></Link>
                    <button onClick={toggleTheme} style={{ color: theme === 'light' ? '#000' : '#ffffff' }} className="bu">
          {theme === 'light' ? <Moon/> : <Sun/>}
        </button>
               </div>
               <div className="n1-right">
                    <div className="n1-list">
                         <ul style={{listStyleType:"none"}} className="uli">
                              
                              <Link spy={true} to='Intro' smooth={true} duration={600} offset={-140}>
                              <li className="li1">Home</li></Link>
                              <Link spy={true} to='About' smooth={true} duration={600} offset={180}>
                              <li className="li1">About</li></Link>
                              <Link spy={true} to='Experience' smooth={true} duration={600} offset={-100}>
                              <li className="li1">Experience</li></Link>
                              <Link spy={true} to='Portfolio' smooth={true} duration={600} offset={-170}>
                              <li className="li1">Portfolio</li></Link>
                              <Link spy={true} to='Contact' smooth={true} duration={600} offset={-100}>
                              <li className="li1">Contact</li></Link>
                         </ul>
                    </div>
                    
               </div>
          
          </div>
     )
}
  export default Navbar; 