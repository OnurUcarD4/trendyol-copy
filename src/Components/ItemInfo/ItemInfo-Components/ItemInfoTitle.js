import React from "react";

const ItemInfoTitle = (props) => {
  return (
    <div>
      <div className="mt-3 w-full ">
        <div className="flex flex-col">
          <span className="text-xl">
            <a
              className="hover:current text-current"
              href="https://www.trendyol.com/trendyolmilla-x-b101476"
              target="_blank"
            >
              <b className="hover:underline cursor-pointer">
                {props.data.BrandName}
              </b>
            </a>{" "}
            {props.data.ProductName}
          </span>
          <span className="text-xl">{props.data.Barcode}</span>
          <span className="text-xs text-gray-600">
            Satıcı:{" "}
            <a
              href="https://www.trendyol.com/magaza/trendyol-m-968"
              target="_blank"
              className="font-semibold"
            >
              {props.data.Seller}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemInfoTitle;
