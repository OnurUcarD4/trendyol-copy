import React, { useState } from "react";
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const SizeComp = (props) => {
  const { favorite, setFavorite } = props;
  const [beden, setBeden] = useState({ InStock: true });
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <div className="flex justify-between mt-2">
        <span className="font-semibold ">Beden: {beden.Name}</span>
        <span
          onClick={() => setIsModalVisible(true)}
          style={{ color: "#999" }}
          className=" text-xs cursor-pointer"
        >
          <i class="fas fa-ruler text-xs mr-2"></i>{" "}
          <span className="mr-2">Beden Tablosu</span>
        </span>
        <Modal
          onCancel={() => setIsModalVisible(false)}
          visible={isModalVisible}
          footer={false}
        >
          <img src="https://cdn.dsmcdn.com/ty165/product/charts/categories/1182/brands/40/4950615d.JPG" />
        </Modal>
      </div>

      <div className="flex mt-2">
        {props.data.Size.map((x) => {
          if (x.InStock) {
            return (
              <button
                onClick={() => setBeden(x)}
                className="border-2 rounded-md px-3 py-1 mr-1 text-sm size-hover"
              >
                {x.Name}
              </button>
            );
          } else {
            return (
              <button
                onClick={() => setBeden(x)}
                className="relative border-2  rounded-md disabled-size  px-3 mr-1 py-1 text-sm size-hover"
              >
                <Badge
                  className="absolute -mr-1 -mt-px right-0 top-0"
                  count={
                    <BellOutlined style={{ color: "#e6e6e6" }} className="" />
                  }
                ></Badge>
                {x.Name}
              </button>
            );
          }
        })}
      </div>
      <div className="flex mt-4 gap-3">
        <div className=" flex-1 flex">
          {beden.InStock ? (
            <button className="text-white flex-1 w-full py-3 bg-main-color rounded-md  text-xl font-semibold buy-button">
              Sepete Ekle
            </button>
          ) : (
            <div className="flex flex-1 gap-5">
              <button className=" flex-1 w-full  rounded-md sold-out-color  text-base font-semibold sold-out ">
                Tükendi!
              </button>
              <button className="text-white flex-1 w-full  bg-main-color rounded-md  text-base py-3 px-5 font-semibold buy-button">
                <a className="text-current" href="#sameproducts">
                  {" "}
                  Benzer Ürünleri Gör
                </a>
              </button>
            </div>
          )}
        </div>
        <div className="mr-2">
          <button
            onClick={() => setFavorite(!favorite)}
            className=" px-4 h-full rounded-md bg-white border text-gray-400  text-xl font-bold "
          >
            <i
              class={`far fa-heart text-2xl ${favorite ? "fav-item" : ""}`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeComp;
