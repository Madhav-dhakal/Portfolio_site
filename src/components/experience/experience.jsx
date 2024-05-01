import React from "react";
import "./experience.css";
import { NavLink } from "react-bootstrap";
const Experience = () => {
  return (
    <>
      <div className="experience" id="Experience">
        <h1 className="h1">Experience</h1>
        <div className="achievement">
          <p className="p1">
            Entry level MERN developer for building the responive web design. I
            actively contributed to the development and maintenance of web
            applications utilizing this stack.
            <br />
            Additionally, I continually enhanced my skills by staying updated
            with the latest trends and technologies in the MERN stack, ensuring
            efficient and modern solutions were delivered.
          </p>
          <div className="project">
            <h3 className="h3">Projects</h3>
            <p className="h">
              I have completed more than 10 projects.
              <br />
              Some are:
              <p className="pr">
               
                <li> Portfolio__site.</li>
                <li> Shopping_Cart</li>
                <li> Food_Delivery</li>
                <li> Books__Store.</li>
                
              </p>
            </p>

            <h4 className="h4">Technologies Used:</h4>
            <p className="p2">
              <p className="para1">
              <img
                src={require("../../img/Node.jpg")}
                alt="MongoDb"
                height={25}
              /> 
              =MongoDB(stores and manages the data)</p>
          
              <p className="para1">
              <img
                src={require("../../img/ex.jpg")}
                alt="expressJs"
                height={25}
              />
              =Express.JS (for creating the RESTful APi i.e. work as a server)</p>
              
              <p className="para1">
              <img
                src={require("../../img/react.jpg")}
                alt="react"
                height={25}
              />
              = React.js (used for building the responsive and interactive UI)</p>
              
              <p className="para1">
              <img
                src={require("../../img/node1.jpg")}
                alt="github"
                height={25}
              />
              = (Node.js is a run time environment for Javascripts)</p>
              <br />
            </p>
          </div>
          <div className="github">
            <h1>Github Projects Link:</h1>

            <NavLink className="li" href="https://github.com/Madhav-dhakal?tab=repositories" target="_blank">
              <img
                src={require("../../img/github.jpg")}
                alt="github"
                height={25}
              />
              clickme
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
