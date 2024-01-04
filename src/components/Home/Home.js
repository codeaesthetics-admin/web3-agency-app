import React, { useState } from "react";
import Background from "../../assets/images/home-bg.png";
import Icon1 from "../../assets/images/icon1.svg";
import Icon2 from "../../assets/images/icon2.svg";
import Icon3 from "../../assets/images/icon3.svg";
import Icon4 from "../../assets/images/icon4.svg";
import Icon5 from "../../assets/images/icon5.svg";
import Icon6 from "../../assets/images/icon6.svg";
import PageEnd from "../../assets/images/page-end.svg";
import "./Home.css";

const Home = () => {
  const [cardData, setCardData] = useState([
    {
      icon: `${Icon1}`,
      title: "Full-Stack Development",
      desc: "From CSS to Solidity. Find a dev right for the job.",
    },
    {
      icon: `${Icon2}`,
      title: "Artistic Services",
      desc: "A wide variety of art styles and experience to choose from.",
    },
    {
      icon: `${Icon3}`,
      title: "Legal And Accounting",
      desc: "Consult with our Accountants and Attorneys. Start off on the right foot.",
    },
    {
      icon: `${Icon4}`,
      title: "Community Managers",
      desc: "Keep your community informed and excited.",
    },
    {
      icon: `${Icon5}`,
      title: "Customized Marketing Strategies & Licensable IP",
      desc: "Experienced marketers at your fingertips. Licensable IP available for use in your project.",
    },
    {
      icon: `${Icon6}`,
      title: "Industry Experts & Analytics",
      desc: "Consultation with those who have their finger on the pulse. Analytics software to give you an edge against the competition.",
    },
  ]);

  const RenderItems = () => {
    return cardData.map((data) => (
      <div className="col-lg-4 col-md-6 pb-md-5 pb-3" key={data.key}>
        <div className="home-card card d-flex align-items-center text-center m-2 p-md-4 p-3">
          <img src={data.icon} alt="" className="mb-4" />
          <p className="card-title-text">{data.title}</p>
          <p className="card-desc-text">{data.desc}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="home-main-content">
          <p className="heading-text">WEB3</p>
          <p className="description-text mb-md-5 mb-3">
            A full suite web3 production company
          </p>
          <button className="main-btn">Lets Talk</button>
        </div>
        <img src={PageEnd} alt="page-end" className="home-page-end" />
        <img className="bg" src={Background} alt="background" />
      </div>
      <div></div>
      <div style={{ background: "#1E1E1E" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center p-md-5 p-3">
            <p className="heading1-text text-center mb-5">
              PUSHING INNOVATION FORWARD
            </p>
            <p className="col-xl-6 col-lg-7 col-12 description1-text text-center">
              <span
                className="ps-4 pb-lg-1 me-2"
                style={{ background: "#4519e0", fontSize: "50px" }}
              >
                WEB3
              </span>
              <span style={{ fontFamily: "Space Grotesk" }}>
                pairs determination with talent, vision with function, and
                builders with brands.
              </span>
            </p>
          </div>
          <div className="row">{RenderItems()}</div>
        </div>
      </div>
      <div className="end-container d-flex justify-content-center align-items-center">
        <button className="end-container-btn">Lets Talk</button>
      </div>
    </div>
  );
};

export default Home;
