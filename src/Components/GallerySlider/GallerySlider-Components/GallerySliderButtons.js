import React from "react";

const GallerySliderButtons = (props) => {
  const { sliderRef } = props;
  return (
    <div>
      <button
        className="textshadow absolute text-4xl top-80  p-4 text-white  z-10 "
        onClick={() => {
          sliderRef.current.slickPrev();
        }}
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        className="textshadow absolute text-4xl top-80 ml-80  p-4 text-white    z-10 "
        onClick={() => {
          sliderRef.current.slickNext();
        }}
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default GallerySliderButtons;
