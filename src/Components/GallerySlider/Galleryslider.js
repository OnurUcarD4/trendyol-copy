import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./GallerySlider.css";

const Galleryslider = () => {
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
          <div className="firsat-img">
            <img
              className="absolute w-32 top-32 p-4 z-10"
              src="https://cdn.dsmcdn.com/stamp/firsat.png"
            />
          </div>
          <div className="buttons">
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

          <Slider ref={sliderRef} className="w-96" {...settings}>
            <div>
              <img
                className="border rounded-md"
                style={{ width: 430, height: 610 }}
                src="https://cdn.dsmcdn.com/ty154/product/media/images/20210805/12/115856172/55931629/1/1_org_zoom.jpg"
              />
            </div>
            <div>
              <img
                className="border rounded-md"
                style={{ width: 430, height: 610 }}
                src="https://cdn.dsmcdn.com/ty155/product/media/images/20210805/12/115856172/55931629/2/2_org_zoom.jpg"
              />
            </div>
            <div>
              <img
                className="border rounded-md"
                style={{ width: 430, height: 610 }}
                src="https://cdn.dsmcdn.com/ty155/product/media/images/20210805/12/115856172/55931629/3/3_org_zoom.jpg"
              />
            </div>
            <div>
              <img
                className="border rounded-md"
                style={{ width: 430, height: 610 }}
                src="https://cdn.dsmcdn.com/ty155/product/media/images/20210805/12/115856172/55931629/4/4_org_zoom.jpg"
              />
            </div>
            <div>
              <img
                className="border rounded-md"
                style={{ width: 430, height: 610 }}
                src="https://cdn.dsmcdn.com/ty153/product/media/images/20210805/12/115856172/55931629/5/5_org_zoom.jpg"
              />
            </div>
            <div>
              <img
                className="border rounded-md"
                style={{ width: 430, height: 610 }}
                src="https://cdn.dsmcdn.com/ty14/product/media/images/20200929/13/12463201/55931629/1/1_org_zoom.jpg"
              />
            </div>
            <div>
              <img
                className="border rounded-md"
                style={{ width: 430, height: 610 }}
                src="https://cdn.dsmcdn.com/ty14/product/media/images/20200929/13/12463201/55931629/2/2_org_zoom.jpg"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Galleryslider;
