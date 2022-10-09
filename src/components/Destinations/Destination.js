import React from "react";
import "./Destination.css";
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";

const Destination = () => {
  return (
    <div className="Destination py-5 text-center" name="Destination">
      <div className="container">
        <h1 className="p-3">All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <img src={BoraBora} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-3">
                <img src={BoraBora2} alt="" />
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <img src={Maldives} alt="" />
              </div>
              <div className="col-md-6 col-sm-12 mb-3 ">
                <img src={Maldives2} alt="" />
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <img src={KeyWest} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
