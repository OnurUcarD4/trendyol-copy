import React from "react";
import { Divider, Rate } from "antd";

const CommentsCard = () => {
  return (
    <div>
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
                174 boy 69kiloyum L beden aldım beden tam boyu diz üstünde model
                harika çok beğendim sadece kollarıı biraz daha uzun bekledim ama
                idare...
              </span>
              <div className="">
                <span className="text-xs font-semibold tracking-wider follower-color">
                  a** g** |
                </span>
                <span className="text-xs ml-2 follower-color">
                  10 Kasım 2021
                </span>
              </div>
              <div className="buyer-colors mb-2">
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
                  rel="noreferrer"
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
    </div>
  );
};

export default CommentsCard;
