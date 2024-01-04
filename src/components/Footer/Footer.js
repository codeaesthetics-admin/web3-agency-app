import React from "react";
import logo from "../../assets/images/WEB3.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ background: "black" }}>
      <div className="container pb-sm-5 pb-3">
        <div className="footer-heading pt-sm-5 pt-3 mb-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="d-flex">
          <div className="col-4 d-flex-col">
            <div className="footer-text ms-5" style={{ color: "#4519e0" }}>
              contactus@web3.com
            </div>
            <div className="footer-text ms-5">
              <span style={{ color: "#3A3A3A" }}>or ring us on </span>
              +92300-1234567
            </div>
          </div>
          <div className="col-4 d-flex-col">
            <div className="footer-text ms-5">
              501<span style={{ color: "#4519e0" }}>(</span>c
              <span style={{ color: "#4519e0" }}>)</span>3 Partner
            </div>
            <div className="footer-text ms-5">Cherrybyte Technologies inc.</div>
          </div>
          <div className="col-4">
            <button className="footer-btn ps-3 pe-3 ms-5">Join Us</button>
          </div>
        </div>
        <div className="col-10 d-flex justify-content-end">
          <span style={{ color: "#303030", font: "Space Grotesk" }}>
            © 2022
          </span>
          <span className="footer-text2 ps-2"> WEB3</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
