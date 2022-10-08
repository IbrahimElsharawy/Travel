import React from "react";
import "./Select.css";
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import Maldives3 from "../../assets/maldives3.jpg";
import KeyWest from "../../assets/keywest.jpg";
import SelectImg from "../SelectImg/SelectImg";

const Select = () => {
  return (
    <div className="Select py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-2">
            <SelectImg bg={BoraBora} text="Bora Bora" />
          </div>
          <div className="col-lg-4 col-md-6 mb-2">
            <SelectImg bg={BoraBora2} text="Emerald Bay" />
          </div>
          <div className="col-lg-4 col-md-6 mb-2">
            <SelectImg bg={Maldives} text="Maldives" />
          </div>
          <div className="col-lg-4 col-md-6 mb-2">
            <SelectImg bg={Maldives2} text="Grenada" />
          </div>

          <div className="col-lg-4 col-md-6 mb-2">
            <SelectImg bg={Maldives3} text="Barbados" />
          </div>
          <div className="col-lg-4 col-md-6 mb-2">
            <SelectImg bg={KeyWest} text="Key West" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
