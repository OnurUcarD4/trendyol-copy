import React from "react";
import { Divider } from "antd";

const DiscountCard = () => {
  return (
    <div className=" ">
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
          <div className="flex justify-between">
            <div className="">
              <i class="fas fa-tag text-xs mr-2 ml-2 mt-3 main-color "></i>
              <a
                href="https://www.trendyol.com/sepet"
                target="_blank"
                className="text-gray-700 mt-2 "
              >
                <span className="font-semibold text-sm tracking-tight discount  ">
                  Sepette %20 İndirim
                </span>
              </a>
            </div>
            <i class="fas fa-chevron-right mt-3 pr-2   text-xs main-color"></i>
          </div>
          <span className="px-7 text-xs text-red-600 font-medium mb-3">
            Son 2 Saat 22 Dakika !
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
