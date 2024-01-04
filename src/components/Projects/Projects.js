import React, { useState } from "react";
import Background from "../../assets/images/projects-bg.png";
import Icon1 from "../../assets/images/project1.png";
import Icon2 from "../../assets/images/project2.png";
import Icon3 from "../../assets/images/project3.png";
import PageEnd from "../../assets/images/page-end.svg";
import "./Projects.css";

const Projects = () => {
  const [cardData, setCardData] = useState([
    {
      icon: `${Icon1}`,
      title: "BigBang",
      desc: "Abandoned by the original founders, Kami Reborn is the community founded rebirth of the original Kami collection.",
      tags: ["NFT", "Tools"],
    },
    {
      icon: `${Icon2}`,
      title: "BigBang",
      desc: "Abandoned by the original founders, Kami Reborn is the community founded rebirth of the original Kami collection.",
      tags: ["Tools"],
    },
    {
      icon: `${Icon3}`,
      title: "BigBang",
      desc: "Abandoned by the original founders, Kami Reborn is the community founded rebirth of the original Kami collection.",
      tags: ["Web"],
    },
  ]);

  const RenderItems = () => {
    return cardData.map((data) => (
      <div className="col-lg-6 pb-5" key={data.key}>
        <div className="projects-card card d-flex justify-content-start m-2 p-5">
          <p className="projects-card-title-text">{data.title}</p>
          <p className="projects-card-desc-text">{data.desc}</p>
          <img src={data.icon} alt="" className="mb-4" />
          <div className="row p-1">
            {data.tags.map((tag) => (
              <div
                className="col-sm-2 col-3 p-1 me-2 projects-tag"
                key={tag.data}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <div style={{ position: "relative", backgroundColor: "black" }}>
        <div className="projects-main-content">
          <p className="projects-heading-text">WEB3 MADE</p>
          <p className="projects-description-text">
            Take a look at the creations made possible through web3
          </p>
        </div>
        <img src={PageEnd} alt="page-end" className="projects-page-end" />
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#000" }}
        >
          <img className="projects-bg" src={Background} alt="background" />
        </div>
      </div>
      <div></div>
      <div style={{ background: "#1E1E1E" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center p-5">
            <p className="projects-heading1-text text-center">OUR PROJECTS</p>
            <p className="col-8 projects-description1-text text-center">
              Design & ENGENEERING
            </p>
          </div>
          <div className="mb-3">
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  NFT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  Web
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  Tools
                </a>
              </li>
            </ul>
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

export default Projects;
