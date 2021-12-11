import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import DiscountImg from "./GallerySlider-Components/DiscountImg";
import GallerySliderButtons from "./GallerySlider-Components/GallerySliderButtons";
import "./GallerySlider.css";

const Galleryslider = (props) => {
  const [sliderItem, setSliderItem] = useState([]);
  useEffect(() => {
    (async () => {
      const resp = await axios.get("http://localhost:3000/Slider");
      setSliderItem(resp.data);
    })();
  }, []);
  const sliderRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "flex gap-2 paging-photo",
    arrows: false,
    customPaging: function (i) {
      return (
        <img
          className="rounded-md  hover:border-red-500"
          src={sliderItem.length > 0 ? sliderItem[i].ImageUrl : ""}
        />
      );
    },
  };

  return (
    <div className="p-4">
      <div className="">
        <div>
          <DiscountImg />
          <div className="buttons">
            <GallerySliderButtons sliderRef={sliderRef} />
          </div>

          <Slider ref={sliderRef} className="w-96 " {...settings}>
            {sliderItem.map((x) => {
              return (
                <div key={x.Id}>
                  <img
                    className="border rounded-md"
                    style={{ width: 430, height: 610 }}
                    src={x.ImageUrl}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Galleryslider;
