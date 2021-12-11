import React from "react";
import { Divider } from "antd";
import { Dropdown } from "antd";

const menu = (
  <div className="bg-white shadow-xl rounded-md border  flex items-center justify-center ">
    <div className="w-56 p-3 flex flex-col">
      <span className="font-semibold ">
        Satıcı Puanı{" "}
        <span className="ml-1 market-rating-color px-1 market-rating-border text-white font-semibold text-xs tracking-widest">
          8.9
        </span>
      </span>
      <span className="text-xs">
        Satıcı puanı, müşteri geri bildirimleri ve satıcının sipariş sürecindeki
        performansı dikkate alınarak hesaplanmaktadır.
      </span>
    </div>
  </div>
);

const StoreCard = () => {
  return (
    <div>
      <div className="border card-border-color rounded-md market-card-color mt-4">
        <div className="px-4 py-3 flex">
          <a
            href="https://www.trendyol.com/magaza/trendyol-m-968"
            target="_blank"
            className="hover:underline"
          >
            <span className="tracking-normal font-semibold text-medium">
              Trendyol
            </span>
          </a>
          <span className="ml-2 flex  items-center market-rating-color px-1 market-rating-border text-white font-semibold text-xs  tracking-widest mr-1">
            8.9
          </span>

          <Dropdown
            overlayClassName=" "
            arrow={true}
            overlay={menu}
            placement="bottomRight"
          >
            <div className=" w-7 ">
              <i class="fas fa-info-circle text-xs main-color "></i>
            </div>
          </Dropdown>
        </div>
        <div className="w-50">
          <Divider className="m-0 p-0" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between pr-2">
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

            <i class="fas fa-chevron-right mt-4 text-xs main-color"></i>
          </div>
          <span className="text-xs ml-10 font-semibold tracking-tight follower-color mb-3">
            29.8B Takipçi
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
