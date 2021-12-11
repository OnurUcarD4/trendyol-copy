import React from "react";
import { Divider } from "antd";

const CardButtons = () => {
  return (
    <div>
      <div className="border  rounded-md bg-white mt-4">
        <div className="px-4 py-3 justify-between flex more-comments cursor-pointer">
          <span className="tracking-wider font-semibold text-xs ">
            <a className="text-current" href="#productreviews">
              ÜRÜN DEĞERLENDİRMELERİ{" "}
            </a>
          </span>
          <i class="fas fa-chevron-right  text-xs main-color"></i>
        </div>
        <div className="w-50">
          <Divider className="m-0 p-0" />
        </div>
        <div className="px-4 py-3 justify-between flex more-comments cursor-pointer">
          <span className="tracking-wider font-semibold text-xs ">
            <a className="text-current" href="#sameproducts">
              {" "}
              BENZER ÜRÜNLER
            </a>
          </span>
          <i class="fas fa-chevron-right  text-xs main-color"></i>
        </div>
      </div>
    </div>
  );
};

export default CardButtons;
