import React from "react";
import { Divider } from "antd";

const Pricing = (props) => {
  return (
    <div>
      <div className="mt-3 ">
        <div className=" flex items-center">
          <div className="">
            <span style={{ color: "#999" }} className="p-2">
              {props.data.OldPrice} TL
            </span>
          </div>
          <Divider
            style={{ background: "#e2e2e2" }}
            className="h-10 ml-0"
            type="vertical"
          />
          <div className="flex flex-col">
            <span className="text-xs  text-gray-600 font-semibold">
              Sepette %{props.data.Discount} İndirim
            </span>
            <span
              style={{
                fontFamily: "'Oxygen', sans-serif",
                fontWeight: "700",
              }}
              className="text-2xl main-color"
            >
              {props.data.Price} TL
            </span>
          </div>
        </div>
        <div className="h-px mr-2 mt-4 mb-2 bg-gray-100" />
      </div>
    </div>
  );
};

export default Pricing;
