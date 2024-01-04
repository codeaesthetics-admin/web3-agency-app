import React from "react";
import Background from "../../assets/images/home-bg.png";
import PageEnd from "../../assets/images/page-end.svg";
import Facebook from "../../assets/images/facebook-icon.svg";
import Instagram from "../../assets/images/insta-icon.svg";
import LinkedIn from "../../assets/images/linkedin-icon.svg";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="contact-main-content">
          <p className="col-sm-8 col-12 contact-heading-text p-md-3 p-5">
            LET'S TALK ABOUT YOUR PROJECT
          </p>
        </div>
        <img src={PageEnd} alt="page-end" className="contact-page-end" />
        <img className="bg" src={Background} alt="background" />
      </div>

      <div style={{ background: "#1E1E1E" }}>
        <div className="container">
          <div className="row">
            <div className="col-6 pt-5">
              <input
                className="contact-form-input m-sm-5 m-3 pt-5"
                placeholder="Name"
              />
              <input
                className="contact-form-input m-sm-5 m-3"
                placeholder="Project Name"
              />
              <input
                className="contact-form-input m-sm-5 m-3"
                placeholder="E-mail*"
              />
              <input
                className="contact-form-input m-sm-5 m-3"
                placeholder="Phone Number"
              />
              <textarea
                placeholder="Feel free to describe about your project...."
                className="contact-textbox m-sm-5 m-3"
              />
              <div className="m-sm-5 m-3 d-inline-flex">
                <img src={Facebook} alt="icon" className="me-sm-3 me-1 icon" />
                <img src={Instagram} alt="icon" className="me-sm-3 me-1 icon" />
                <img src={LinkedIn} alt="icon" className="me-sm-5 me-4 icon" />
                <button className=" col-md-6 col-7 contact-btn pt-1 pb-1 ms-sm-5">
                  Send Message
                </button>
              </div>
            </div>
            <div className="col-6 pt-sm-5">
              <p className="display-text text-center pt-5">G </p>
              <br />
              <p className="display-text text-center">E </p>
              <br />
              <p className="display-text text-center">T </p>
              <br />
              <p className="display-text text-center"> </p>
              <br />
              <p className="display-text text-center"> </p>
              <br />
              <p className="display-text text-center">I </p>
              <br />
              <p className="display-text text-center">N </p>
              <br />
              <p className="display-text text-center"> </p>
              <br />
              <p className="display-text text-center"> </p>
              <br />
              <p className="display-text text-center">T </p>
              <br />
              <p className="display-text text-center">O</p>
              <br />
              <p className="display-text text-center">U</p>
              <br />
              <p className="display-text text-center">C</p>
              <br />
              <p className="display-text text-center"> H</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
