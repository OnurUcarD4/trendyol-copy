import { Divider } from "antd";
import React from "react";
import "./OfferCards.css";
import { Rate } from "antd";

const OfferCards = () => {
  return (
    <div className="pt-7">
      <div className=" w-64 h-40 p-3 ">
        <div className="border card-border-color rounded-md card-bg-color">
          <div className="px-4 py-3">
            <span className="tracking-normal font-semibold text-xs">
              ÜRÜNÜN KAMPANYALARI
            </span>
          </div>
          <div className="w-50">
            <Divider className="m-0 p-0" />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <i class="fas fa-tag text-xs mr-2 ml-2 mt-3 main-color"></i>
              <a
                href="https://www.trendyol.com/sepet"
                target="_blank"
                className="text-gray-700 mt-2 "
              >
                <span className="font-semibold text-sm tracking-tight discount ">
                  Sepette %20 İndirim
                </span>
              </a>
              <i class="fas fa-chevron-right mt-3 ml-16 text-xs main-color"></i>
            </div>
            <span className="px-7 text-xs text-red-600 font-medium mb-3">
              Son 2 Saat 22 Dakika !
            </span>
          </div>
        </div>
        <div className="border card-border-color rounded-md market-card-color mt-4">
          <div className="px-4 py-3">
            <a
              href="https://www.trendyol.com/magaza/trendyol-m-968"
              target="_blank"
              className="hover:underline"
            >
              <span className="tracking-normal font-semibold text-medium">
                Trendyol
              </span>
            </a>
            <span className="ml-2 market-rating-color px-1 market-rating-border text-white font-semibold text-xs tracking-widest">
              8.9
            </span>
            <i class="fas fa-info-circle ml-1 text-xs main-color"></i>
          </div>
          <div className="w-50">
            <Divider className="m-0 p-0" />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="mt-3">
                <i class="fas fa-store-alt px-3 text-xs main-color"></i>
                <a
                  href="https://www.trendyol.com/sepet"
                  target="_blank"
                  className="text-gray-700 mt-2 "
                >
                  <span className="discount font-semibold tracking-tight">
                    Mağazayı Gör
                  </span>
                </a>
              </div>

              <i class="fas fa-chevron-right mt-4 ml-24 text-xs main-color"></i>
            </div>

            <span className="text-xs ml-10 font-semibold tracking-tight follower-color mb-3">
              29.8B Takipçi
            </span>
          </div>
        </div>
        <div className="border  rounded-md bg-white mt-4">
          <div className="px-4 py-3">
            <span className="tracking-normal font-semibold text-xs follower-color">
              ÖNE ÇIKAN YORUM
            </span>
          </div>
          <div className="w-50">
            <Divider className="m-0 p-0" />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="px-3 mt-2">
                <Rate disabled className="text-xs" value={5} />
                <span className="text-sm tracking-normal follower-color">
                  174 boy 69kiloyum L beden aldım beden tam boyu diz üstünde
                  model harika çok beğendim sadece kollarıı biraz daha uzun
                  bekledim ama idare...
                </span>
                <div className="">
                  <span className="text-xs font-semibold tracking-wider follower-color">
                    a** g** |
                  </span>
                  <span className="text-xs ml-2 follower-color">
                    10 Kasım 2021
                  </span>
                </div>
                <div className="buyer-color mb-2">
                  <i class="fas fa-check-circle text-lg"></i>
                  <span className="text-xs font-semibold ml-1">
                    Ürünü satın aldı
                  </span>
                </div>
                <div className="w-50">
                  <Divider className="m-0 p-0" />
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.trendyol.com/trendyolmilla/gri-selanik-orme-elbise-twoaw20el1110-p-31078804/yorumlar"
                    target="_blank"
                  >
                    <button className="mb-2 mt-1 w-full follower-color  text-xs tracking-wider font-semibold more-comments">
                      DAHA FAZLA YORUM
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border  rounded-md bg-white mt-4">
          <div className="px-4 py-3 justify-between flex more-comments cursor-pointer">
            <span className="tracking-wider font-semibold text-xs ">
              ÜRÜN DEĞERLENDİRMELERİ{" "}
            </span>
            <i class="fas fa-chevron-right  text-xs main-color"></i>
          </div>
          <div className="w-50">
            <Divider className="m-0 p-0" />
          </div>
          <div className="px-4 py-3 justify-between flex more-comments cursor-pointer">
            <span className="tracking-wider font-semibold text-xs ">
              BENZER ÜRÜNLER
            </span>
            <i class="fas fa-chevron-right  text-xs main-color"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
