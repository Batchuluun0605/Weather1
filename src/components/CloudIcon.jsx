import React from "react";
import image from "@/components/img/cloud.jpg";

const CloudIcon = () => {
  return (
    <div>
      <img
        className=" w-40 h-40 rounded-3xl bg-indigo-800"
        src={image.src}
        alt=""
      />
    </div>
  );
};

export default CloudIcon;
