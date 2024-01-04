import React, { useState } from "react";
import Background from "../../assets/images/services-bg.png";
import Icon1 from "../../assets/images/icon1.svg";
import Icon2 from "../../assets/images/icon2.svg";
import Icon3 from "../../assets/images/icon3.svg";
import Icon4 from "../../assets/images/icon4.svg";
import Icon5 from "../../assets/images/icon5.svg";
import Icon6 from "../../assets/images/icon6.svg";
import PageEnd from "../../assets/images/page-end.svg";
import "./Services.css";

const Services = () => {
  const [cardData, setCardData] = useState([
    {
      icon: `${Icon1}`,
      title: "Full-Stack Development",
      desc: "Can devs do something? Ours can. Beautiful and intuitive front ends, complex and optimized smart contracts, and custom bots or programs are just some of the many things our devs are capable of producing.",
    },
    {
      icon: `${Icon2}`,
      title: "Artistic Services",
      desc: "Whatever your vision, we have an artist for you. Whether it's 2D or 3D, cartoon or realism, our network of artists has somebody for everybody. We also have graphic designers and video editors ready to create visually stunning content for you and your project.",
    },
    {
      icon: `${Icon3}`,
      title: "Legal And Accounting",
      desc: "Get started on a strong foundation. We have industry expert attorneys and accountants available to help guide you through the legal landmine in this new space. Be ready when regulation comes and protect yourself from pitfalls.",
    },
    {
      icon: `${Icon4}`,
      title: "Community Managers",
      desc: "If you're looking for moderators, social media managers, or general 'hype men' look no further. Our community managers will keep your community excited, informed, and engaged.",
    },
    {
      icon: `${Icon5}`,
      title: "Customized Marketing Strategies & Licensable IP",
      desc: "In marketing, one size does NOT fit all. Work with our experienced marketing team to develop a marketing campaign that fits your brand and your budget. Want to use a Bored Ape in your marketing? Or maybe a Cool Cat? Our IP partners are ready and willing to license their IP to you for use in your project.",
    },
    {
      icon: `${Icon6}`,
      title: "Industry Experts & Analytics",
      desc: "One wrong decision can kill a project. Before you launch, consult with an expert who will guide you through the do's and dont's of launching a project. Make use of analytics software to have live data, know market sentiment, and stay ahead of the curve.",
    },
  ]);
  const RenderItems = () => {
    return cardData.map((data) => (
      <div className="col-lg-4 col-md-6 pb-md-5 pb-3" key={data.key}>
        <div className="services-card card d-flex align-items-center text-center m-2 p-md-4 p-3">
          <img src={data.icon} alt="" className="mb-4" />
          <p className="services-card-title-text">{data.title}</p>
          <p className="services-card-desc-text">{data.desc}</p>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="services-main-content">
          <p className="services-heading-text">START TO FINISH</p>
          <p className="services-description-text">
            Take a look at the services WEB3 can provide
          </p>
        </div>
        <img src={PageEnd} alt="page-end" className="services-page-end" />
        <img className="bg" src={Background} alt="background" />
      </div>
      <div></div>
      <div style={{ background: "#1E1E1E" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center p-5">
            <p className="services-heading1-text text-center">
              EVERYTHING YOU NEED
            </p>
            <p className="services-description1-text text-center">
              ALL IN ONE PLACE
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

export default Services;
