import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Carouselmg.css'
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";

const Carouselmg = () => {
  return (
    <div className="carousel py-5" name="Carousel">
      <div className="container">
        <Carousel infiniteLoop autoPlay={true} showArrows={true} useKeyboardArrows showIndicators={true} >
          <div>
            <img src={BoraBora} alt="/" />
          </div>
          <div>
            <img src={BoraBora2} alt="/" />
          </div>
          <div>
            <img src={Maldives} alt="/" />
          </div>
          <div>
            <img src={Maldives2} alt="/" />
          </div>
          
          <div>
            <img src={KeyWest} alt="/" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Carouselmg;
