import React, { useState } from "react";
import Background from "../../assets/images/home-bg.png";
import PageEnd from "../../assets/images/page-end.svg";
import "./Swap.css";

const Swap = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="swap-main-content">
          <p className="swap-heading-text">Safe Swap</p>
          <p className="swap-description-text">
            A secure escrow contract to safely trade NFTs and ETH
          </p>
          {isWalletConnected ? (
            <p className="swap-description-text mt-md-5">
              0x16544545..........154D is{" "}
              <span style={{ color: "#4519e0" }}>connected</span>
            </p>
          ) : (
            <button
              className="main-btn"
              onClick={() => {
                setIsWalletConnected(true);
              }}
            >
              Connect Wallet
            </button>
          )}
        </div>
        <img src={PageEnd} alt="page-end" className="swap-page-end" />
        <img className="bg" src={Background} alt="background" />
      </div>
      <div style={{ background: "#1E1E1E" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center p-sm-5 p-2">
            <p className="swap-heading1-text text-center">Safe Swap / Escrow</p>
            <p className="col-lg-10 col-md-12 swap-description1-text text-center">
              {isWalletConnected
                ? "Introducing OBYC-Labs secure escrow / safe swap contract. Trade without fear of scam artists and broken promises. Access Pass holders will be able to use this for free. All others will have to pay a small fee. Creating an offer will transfer your offered assets into our secure escrow contract until someone fulfills the terms you set forth. Should anyone fulfill the offer, you will automatically receive the requested assets, and your offered assets will be released to the fulfiller. You may revoke the offer at any time as long as it has not already been fulfilled."
                : "Introducing Co-Labs secure escrow / safe swap contract. Trade without fear of scam artists and broken promises. Access Pass holders will be able to use this for free. All others will have to pay a small fee. Creating an offer will transfer your offered assets into our secure escrow contract until someone fulfills the terms you set forth. Should anyone fulfill the offer, you will automatically receive the requested assets, and your offered assets will be released to the fulfillor. You may revoke the offer at any time as long as it has not already been fulfilled."}
            </p>
            {isWalletConnected ? (
              <div></div>
            ) : (
              <p className="swap-heading1-text text-center">
                Connect Your Wallet To Get Started
              </p>
            )}
          </div>
        </div>
      </div>
      {isWalletConnected ? (
        <div style={{ background: "#1E1E1E" }} className="d-flex flex-row">
          <div className="col-6 p-sm-5 p-2">
            <p className="swap-form-heading">Create Offer</p>
            <p className="swap-form-desc">
              Enter the details below of what you are offering, and what you are
              requesting. Only ERC721 at this time. ERC1155 support coming soon.
              You will need to first approve this contract to manage the NFT(s)
              you are offering before you can create the offer. This is a one
              time gas fee for each new collection you use with this contract.
            </p>

            <p className="swap-form-heading pt-3">Offering</p>
            <p className="swap-form-text2">Offering Contract Address</p>
            <p className="swap-form-text3">
              You can find this on OpenSea under "details."
            </p>
            <input
              className="swap-form-input"
              placeholder="i.e. 0x54f4v4r4g4fvw69r48gwr984gD"
            />

            <p className="swap-form-text2">Offering Token ID's</p>
            <p className="swap-form-text3">
              If offering multiple, separate with a space and comma.
            </p>
            <input className="swap-form-input" placeholder="i.e. 420,454,466" />

            <p className="swap-form-text2">Offering ETH</p>
            <p className="swap-form-text3">If not offering any ETH, enter 0.</p>
            <input className="swap-form-input" placeholder="i.e. 0.0755" />

            <p className="swap-form-heading pt-3">Requesting</p>
            <p className="swap-form-text2">Requesting Contract Address</p>
            <p className="swap-form-text3">
              This doesn't have to be the same contract address.
            </p>
            <input
              className="swap-form-input"
              placeholder="i.e. 0x54f4v4r4g4fvw69r48gwr984gD"
            />

            <p className="swap-form-text2">Requesting Token ID's</p>
            <p className="swap-form-text3">
              If requesting multiple, separate with a space and comma.
            </p>
            <input className="swap-form-input" placeholder="i.e. 420,454,466" />

            <p className="swap-form-text2">Requesting ETH</p>
            <p className="swap-form-text3">
              If not requesting any ETH, enter 0.
            </p>
            <input className="swap-form-input" placeholder="i.e. 0.0755" />
            <br />
            <div className="d-flex align-items-start">
              <button className="swap-form-btn ps-3 pe-3 mt-sm-3 mb-3 me-lg-4">
                Approve Contract
              </button>
              <p className="col-lg-5 col-9 swap-form-text3 p-sm-3 ps-3">
                You will need to approve the swap contract first before you can
                finish creating the offer.
              </p>
            </div>
          </div>
          <div className="col-6 p-sm-5 p-2">
            <p className="swap-form-heading">
              Fulfill/Revoke/<p className="details-word">Details</p>
            </p>
            <p className="swap-form-desc">
              Enter the offer number you want to either fulfill or revoke and
              get the offer details. You will need to first approve this
              contract to manage the NFT(s) you are offering before you can
              fulfill the offer. This is a one time gas fee for each new
              collection you use with this contract.
              <br />
              <br />
              <br />
              <br />
            </p>

            <p className="swap-form-text2 pt-5">Offer Number</p>
            <input
              className="swap-form-input"
              placeholder="i.e. 0x54f4v4r4g4fvw69r48gwr984gD"
            />
            <br />
            <button className="swap-form-btn mb-4 ps-3 pe-3">Look Up</button>

            <p className="swap-form-heading pt-3">
              Lookup Offer Numbers By Address
            </p>
            <p className="swap-form-text3">
              Enter an address to see all of the Offer Numbers created by it.
            </p>
            <p className="swap-form-text3">Address</p>
            <input
              className="swap-form-input"
              placeholder="i.e. 0x54f4v4r4g4fvw69r48gwr984gD"
            />
            <br />
            <button className="swap-form-btn mb-5 ps-3 pe-3">Look Up</button>

            <p className="swap-form-text4 pt-5">
              Found a bug? Having an issue?
            </p>
            <button className="swap-form-btn ps-3 pe-3">Contact US</button>
          </div>
        </div>
      ) : (
        <div className="end-container d-flex justify-content-center align-items-center">
          <button
            className="end-container-btn"
            onClick={() => {
              setIsWalletConnected(true);
            }}
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Swap;
