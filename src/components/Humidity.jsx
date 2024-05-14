import React from "react";
import image from "./img/humidity.png";

const Humidity = () => {
  return (
    <div>
      <img className="w-10 h-10" src={image.src} alt="" />
    </div>
  );
};

export default Humidity;
