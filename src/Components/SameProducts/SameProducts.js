import React, { useRef } from "react";
import "./SameProducts.css";
import Slider from "react-slick";

const SameProducts = () => {
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
    <div className="">
      <div className="mt-3 mb-3">
        <span className="font-semibold text-xl">Benzer Ürünler</span>
      </div>
      <div className="">
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
        <Slider ref={sliderRef} className="" {...settings}>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty206/product/media/images/20211020/8/152641164/57507695/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                TRENDYOLMİLLA{" "}
                <span className="font-normal text-xs ">
                  Siyah Kapüşonlu Örme Sweat Elbise TWOAW20EL1554
                </span>
              </span>
              <span className="font-semibold main-color text-lg">79.99TL</span>
            </div>
          </div>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty98/product/media/images/20210404/02/1077ecf6/56213773/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                Olalook{" "}
                <span className="font-normal text-xs ">
                  Kadın Siyah Likralı Şardonlu Kaşkorse Elbise ELB-190000751
                </span>
              </span>
              <span className="font-semibold main-color text-lg">69.99TL</span>
            </div>
          </div>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty204/product/media/images/20211020/15/152902709/102236397/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                TRENDYOLMİLLA{" "}
                <span className="font-normal text-xs ">
                  Siyah Kare Yaka Bodycon Örme Elbise TWOAW21EL2241
                </span>
              </span>
              <span className="font-semibold main-color text-lg">59.99TL</span>
            </div>
          </div>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty23/product/media/images/20201119/9/28942660/102243797/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                TRENDYOLMİLLA{" "}
                <span className="font-normal text-xs ">
                  Bordo Yarım Boğazlı Örme Elbise TWOAW21EL2244
                </span>
              </span>
              <span className="font-semibold main-color text-lg">59.99TL</span>
            </div>
          </div>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty96/product/media/images/20210404/15/b62bc56f/58865002/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                Olalook{" "}
                <span className="font-normal text-xs ">
                  Kadın Siyah Balıkçı Yaka Balon Kol Salaş Triko Elbise
                  ELB-19000867
                </span>
              </span>
              <span className="font-semibold main-color text-lg">149.99TL</span>
            </div>
          </div>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty174/product/media/images/20210913/17/129542774/235373812/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                TRENDYOLMİLLA{" "}
                <span className="font-normal text-xs ">
                  Indigo Yarım Boğazlı Örme Elbise TWOAW21EL2244
                </span>
              </span>
              <span className="font-semibold main-color text-lg">59.99TL</span>
            </div>
          </div>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty87/product/media/images/20210403/04/90d08e41/17758663/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                armonika{" "}
                <span className="font-normal text-xs ">
                  Kadın Siyah Kolu Renkli Balonlu Elbise ARM-19K001215
                </span>
              </span>
              <span className="font-semibold main-color text-lg">79.95TL</span>
            </div>
          </div>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty175/product/media/images/20210916/14/131252105/93013439/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                TRENDYOLMİLLA{" "}
                <span className="font-normal text-xs ">
                  Kahverengi Kuşaklı Dantel Detaylı Gömlek Elbise...
                </span>
              </span>
              <span className="font-semibold main-color text-lg">149.99TL</span>
            </div>
          </div>
          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty176/product/media/images/20210913/17/129542774/235373807/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                TRENDYOLMİLLA{" "}
                <span className="font-normal text-xs ">
                  Antrasit Yarım Boğazlı Örme Elbise TWOAW21EL2244
                </span>
              </span>
              <span className="font-semibold main-color text-lg">59.99TL</span>
            </div>
          </div>

          <div style={{ width: 200 }}>
            <div className="relative">
              <div className="like-absolute">
                <i class="far fa-heart bg-white rounded-full heart-color px-2 py-1 shadow-sm text-xl discount-color"></i>
              </div>
            </div>
            <img
              className="rounded-md"
              src="https://cdn.dsmcdn.com/ty19/product/media/images/20201105/12/22718974/101311772/1/1_org_thumb.jpg"
            />
            <div className="flex flex-col mt-2">
              <span className="font-semibold text-xs text-black">
                tknfashion{" "}
                <span className="font-normal text-xs ">
                  Kadın Kırmızı Esnek Dalgıç Kumaş Önden Bağcık Detaylı
                  Askılı...
                </span>
              </span>
              <span className="">
                <span className="text-xs line-through discount-color">
                  199.00 TL
                </span>
                <span className="font-semibold discount-color"> 159 TL </span>
              </span>
              <div className="border-discount">
                <span>
                  <span className="text-xs font-semibold ml-2">
                    Sepette %10 İndirim{" "}
                  </span>
                  <span className="font-semibold main-color text-lg">
                    143.10TL
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SameProducts;
