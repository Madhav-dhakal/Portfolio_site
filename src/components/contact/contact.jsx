import { React, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const forms = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9wezbct", "template_x5j2db3", forms.current, {
        publicKey: "bdMf2fJuRRPbu0FfC",
      })
      .then(
        () => {
          console.log("successfull!");
          setDone(true);
         
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="container" id="Contact">
        <div className="heading">
          Contact Me</div>
          <div className="row">
            <form ref={forms} onSubmit={sendEmail} method="post" className="frm">
              <input
                type="text"
                name="User_Name"
                className="user"
                placeholder="Username" required
              
              ></input>
              <br />
              <br />
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Email" required
              ></input>
              <br />
              <br />
              <textarea
                name="message"
                className="user1"
                placeholder="Message"
                
              ></textarea>
              <br />
              <br />
              <div className="sub">
              <input type="submit" value="submit" className="button"></input></div>
            
            </form>
          </div>
          <div className="row">
            <span className="thanks">{done && "Thanks for Contacting me. If you need further assistance, feel free to ask!! "}</span>
            
            </div>
            <div className="row">
            
            </div>
          </div>
    </>
  );
};
export default Contact;
