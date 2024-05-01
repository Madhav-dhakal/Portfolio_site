import React from "react";
import "./intro.css"
import {Link} from "react-scroll"
import { Nav } from "react-bootstrap";
const Intro=()=>{
     return(
          <div className="intro" id="Intro">
               <div className="i-left">
                    <div className="i-name">
                    
                         <span>Hi, I am</span>
                         <span>Madhav Dhakal</span>
                         <span>A passionate web developer from Nepal</span>

                    </div>
                    <Link spy={true} to='Contact' smooth={true} duration={600} offset={-120}>
                    <button className="button i-button " >Contact
                    </button></Link>
                    <div className="i-icons">
                    <Nav.Link href="https://github.com/Madhav-dhakal" target="_blank">
                    <img src={require("../../img/github.jpg")} alt="github" height={75}/>
                         </Nav.Link>
                         <Nav.Link href="https://www.linkedin.com/in/madhav-dhakal-3844a2293/" target="_blank">
                    <img src={require("../../img/linkedin.jpg")} alt="linkedin" height={75}/>
                    </Nav.Link>
                    <Nav.Link href="https://www.facebook.com/" target="_blank">
                    <img src={require("../../img/Facebook.jpg") } alt="facebook" height={75} />
                     </Nav.Link>
                    </div>
               </div>
               <div className="i-right">
               <img src={require("../../img/1.jpg") } alt="pic" height={400} />
               
               </div>
          </div>
     )
}
    export default Intro;