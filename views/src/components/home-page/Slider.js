import React from "react";
import img1 from "./../../assets/pictures/1 (1).jpg";
import img2 from "./../../assets/pictures/1 (2).jpg";
import img3 from "./../../assets/pictures/1 (3).jpg";
import img4 from "./../../assets/pictures/1 (4).jpg";
import img5 from "./../../assets/pictures/1 (5).jpg";
import img6 from "./../../assets/pictures/1 (6).jpg";
import img7 from "./../../assets/pictures/1 (7).jpg";
import img8 from "./../../assets/pictures/1 (8).jpg";
import Coverflow from "react-coverflow";

/* will change the slider styling soon */
const Slider = () => {
  return (
    <div className='main-slider'>
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        infiniteScroll={true}
        enableScroll={false}
        enableHeading={false}>
        <img
          src={img1}
          alt='title or description'
          style={{ display: "block", width: "100%" }}
          data-action='category/5fc75967e36b4658fe807b67'
        />
        <img
          src={img2}
          alt='title or description'
          data-action='category/5fc75955e36b4658fe807b66'
        />
        <img
          src={img3}
          alt='title or description'
          data-action='category/5fc7592ae36b4658fe807b64'
        />
        <img
          src={img4}
          alt='title or description'
          style={{ display: "block", width: "100%" }}
          data-action='category/5fc75902e36b4658fe807b62'
        />
        <img
          src={img5}
          alt='title or description'
          data-action='category/5fc75988e36b4658fe807b68'        />
        <img
          src={img6}
          alt='title or description'
          data-action='category/5fc7591be36b4658fe807b63'        />
         <img
          src={img7}
          alt='title or description'
          data-action='category/5fc758e2e36b4658fe807b61'        />
        <img
          src={img8}
          alt='title or description'
          data-action='category/5fc75938e36b4658fe807b65'        />
      </Coverflow>
    </div>
  );
};

export default Slider;
