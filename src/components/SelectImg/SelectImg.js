import React from "react";
import "./SelectImg.css";

const SelectImg = ({ bg, text }) => {
  return (
    <div className="SelectImg">
      <img src={bg} alt="/" />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SelectImg;
