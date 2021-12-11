import React from "react";

const GalleryButton = (props) => {
  const { sliderRef } = props;
  return (
    <div className="">
      <button
        className=" absolute-arrow-left  text-4xl   p-4 text-white  z-10 "
        onClick={() => {
          sliderRef.current.slickPrev();
        }}
      >
        <img src="https://cdn.dsmcdn.com/web/production/slick-arrow.svg" />
      </button>
      <button
        className=" absolute-arrow-right  text-4xl   p-4 text-white  z-10 "
        onClick={() => {
          sliderRef.current.slickNext();
        }}
      >
        <img src="https://cdn.dsmcdn.com/web/production/slick-arrow.svg" />
      </button>
    </div>
  );
};

export default GalleryButton;
