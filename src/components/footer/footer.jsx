import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
import { Container, Nav, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
                  <div className="img1">
               <a href="https://github.com/Madhav-dhakal" target="_blank">
                 <img src={require("../../img/wgithub.jpg")} height={34} /></a>
                 </div>
                 <div className="img1">
               <a href="https://www.instagram.com/" target="_blank">
                 <img src={require("../../img/instagram.jpg")} height={34} /></a>
               </div>
               <div className="img1">
               <a href="https://www.linkedin.com/in/madhav-dhakal-3844a2293/" target="_blank">
                 <img src={require("../../img/linkedin1.jpg")} height={34} /></a>
             </div>
             <div className="img1">
               <a href="https://www.facebook.com/" target="_blank">
                 <img src={require("../../img/fb.jpg")} height={40}/></a>
              </div>
          </div>
        </div>
        
        <div className="n-list">
        <ul className="uo" style={{ listStyleType: "none" }}>
              <Link
                spy={true}
                to="Intro"
                smooth={true}
                duration={600}
                offset={-120}
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="About"
                smooth={true}
                duration={600}
               offset={140}
              >
                <li>About</li>
              </Link>
              <Link
                spy={true}
                to="Experience"
                smooth={true}
                duration={600}
                offset={-100}
              >
                <li>Experience</li>
              </Link>
              <Link
                spy={true}
                to="Portfolio"
                smooth={true}
                duration={600}
                offset={-160}
              >
                <li>Portfolio</li>
              </Link>
              <Link
                spy={true}
                to="Contact"
                smooth={true}
                duration={600}
                offset={-100}
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
 
          <div className="footer">
            <p className="fp">Copyright@2024. Designed By: Madhav Dhakal</p>
          </div>
        </div>
    
    </>
  );
};

export default Footer;
