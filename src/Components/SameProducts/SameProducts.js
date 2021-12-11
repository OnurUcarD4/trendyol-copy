import React, { useEffect, useRef, useState } from "react";
import "./SameProducts.css";
import Slider from "react-slick";
import axios from "axios";
import GalleryButton from "./SameProducts-Components/GalleryButton";

const SameProducts = () => {
  const [favorite, setFavorite] = useState(false);
  const [sameProduct, setsameProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("http://localhost:3000/SameProducts");
      setsameProduct(resp.data);
    })();
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    variableWidth: true,
  };
  const sliderRef = useRef();
  return (
    <div id="sameproducts" className="">
      <div className="mt-3 mb-3">
        <span className="font-semibold text-xl">Benzer Ürünler</span>
      </div>
      <div className="">
        <GalleryButton sliderRef={sliderRef} />
        <Slider ref={sliderRef} className="product-slider" {...settings}>
          {sameProduct.map((x) => {
            if (x.Discount === null) {
              return (
                <div key={x.Id} style={{ width: 200 }}>
                  <div className="relative">
                    <div className="like-absolute">
                      <i
                        onClick={() => setFavorite(!favorite)}
                        class={`${
                          favorite ? "fav-item" : ""
                        } far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color`}
                      ></i>
                    </div>
                  </div>
                  <img className="rounded-md" src={x.ImageUrl} />
                  <div className="flex flex-col mt-2">
                    <span className="font-semibold text-xs text-black">
                      {x.BrandName}
                      {""}
                      <span className="font-normal text-xs ">
                        {x.ProductName}
                      </span>
                    </span>
                    <span className="font-semibold main-color text-lg">
                      {x.Price}
                    </span>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={x.Id} style={{ width: 200 }}>
                  <div className="relative">
                    <div className="like-absolute">
                      <i
                        onClick={() => setFavorite(!favorite)}
                        class={`${
                          favorite ? "fav-item" : ""
                        } far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color`}
                      ></i>
                    </div>
                  </div>
                  <img className="rounded-md" src={x.ImageUrl} />
                  <div className="flex flex-col mt-2">
                    <span className="font-semibold text-xs text-black">
                      {x.BrandName}
                      {""}
                      <span className="font-normal text-xs ">
                        {x.ProductName}
                      </span>
                    </span>
                    <span className="">
                      <span className="text-xs line-through discount-color">
                        {x.OldPrice} TL
                      </span>
                      <span className="font-semibold discount-color">
                        {" "}
                        {x.DiscountPrice}{" "}
                      </span>
                    </span>
                    <div className="border-discount">
                      <span>
                        <span className="text-xs font-semibold ml-2">
                          Sepette {x.Discount} İndirim{" "}
                        </span>
                        <span className="font-semibold main-color text-lg">
                          {x.Price}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SameProducts;
