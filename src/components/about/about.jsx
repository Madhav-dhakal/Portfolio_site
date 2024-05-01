import React from "react";
import "./about.css"
import Resume from './My-CV.pdf';

const About = () => {

  return (
    <>
       <div className="services" id="About">
        <div className="float-left">
          <h1 className="h11">About Me</h1>
          <p className="p11">
            <p className="wlc">
          Hello! Welcome to My Website.<br/><br/></p>
         <p className="md">
          Having honed my skills in the MERN stack (MongoDB, Express.js, React.js, Node.js), 
          I'm proficient in building robust, interactive, and scalable web applications. 
          My expertise extends across the entire development lifecycle, from conceptualization 
          to deployment, ensuring consistent user experiences and efficient functionality.<br/>
          Beyond coding, I'm passionate about staying updated with the latest industry trends 
          and technologies,pushing my continuous growth as a developer.
          </p>
          </p>
          <br/><br/>
          <h2 className="h22">My Skills:</h2>
                <div className="skillcontainer">
                <div className="skillItem"><img src={require("../../img/node1.jpg")} height={28} alt="pic"/>: <div className="skill5"></div></div>
                <div className="skillItem"><img src={require("../../img/Node.jpg")} height={28} alt="pic"/>: <div className="skill6"></div></div>
                  <p className="but">Download CV from here:</p>
                  <div className="skillItem"><img src={require("../../img/js.jpg")} height={28} alt="pic"/>: <div className="skill3"></div></div>
                  <div className="skillItem"><img src={require("../../img/react.jpg")} height={28} alt="pic"/>: <div className="skill4"></div></div>
                  <a href={Resume} download>
                      <button className="bon">Download CV</button>
                       </a>
                  <div className="skillItem"><img src={require("../../img/h.jpg")} height={28} alt="pic"/>: <div className="skill1"></div></div>
                  <div className="skillItem"><img src={require("../../img/c.jpg")} height={28} alt="pic"/>: <div className="skill2"></div></div>

                </div>
                <br/><br/><br/>
                <h3 className="h33">My Services</h3><br/><br/>
                <img src={require("../../img/design.jpg")} height={140} alt="pic" className="is"/>
                <img src={require("../../img/Node.jpg")} height={140} alt="pic"  className="is"/>
                <img src={require("../../img/ex.jpg")} height={140} alt="pic"  className="is"/>
                <img src={require("../../img/react.jpg")} height={140} alt="pic"  className="is"/>
                <img src={require("../../img/node1.jpg")} height={140} alt="pic"  className="is"/>
                <img src={require("../../img/js.jpg")} height={140} alt="pic"  className="is"/>
                <img src={require("../../img/h.jpg")} height={140} alt="pic"  className="is"/>
                  <br/><br/><br/>
                   <div className="learn">
                 <a className="ln" href="https://www.mongodb.com/mern-stack" target="_blank">Learn More</a>
                 </div>
                </div>

                </div>
       
    
      
    </>
  );
};

export default About;;


