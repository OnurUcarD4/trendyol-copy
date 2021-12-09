import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import { Divider } from "antd";
import "./ItemInfo.css";
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const ItemInfo = (props) => {
  const { product } = props;
  const [beden, setBeden] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

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
                {product.BrandName}
              </b>
            </a>{" "}
            {product.ProductName}
          </span>
          <span className="text-xl">{product.Barcode}</span>
          <span className="text-xs text-gray-600">
            Satıcı:{" "}
            <a
              href="https://www.trendyol.com/magaza/trendyol-m-968"
              target="_blank"
              className="font-semibold"
            >
              {product.Seller}
            </a>
          </span>
        </div>

        <div className="">
          <Rate className="text-sm" allowHalf disabled value={product.Rating} />

          <span className="text-xs hover:text-yellow-500 hover:underline cursor-pointer">
            <a
              className="text-current hover:current"
              href="https://www.trendyol.com/trendyolmilla/siyah-selanik-orme-elbise-twoaw20el1110-p-31078803/yorumlar?boutiqueId=592132&merchantId=968&v=xs"
              target="_blank"
            >
              {product.ReviewCount} Değerlendirme{" "}
            </a>
          </span>
          <img
            className="w-5 h-4 inline ml-1 mb-1"
            src="https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png"
          />
        </div>
        <div className="mt-3 ">
          <div className=" flex items-center">
            <div className="">
              <span style={{ color: "#999" }} className="p-2">
                {product.OldPrice} TL
              </span>
            </div>
            <Divider
              style={{ background: "#e2e2e2" }}
              className="h-10 ml-0"
              type="vertical"
            />
            <div className="flex flex-col">
              <span className="text-xs  text-gray-600 font-semibold">
                Sepette %{product.Discount} İndirim
              </span>
              <span
                style={{
                  fontFamily: "'Oxygen', sans-serif",
                  fontWeight: "700",
                }}
                className="text-2xl main-color"
              >
                {product.Price} TL
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px mr-2 mt-4 mb-2 bg-gray-100" />

      <div className="flex flex-col pr-2">
        <span className="font-semibold">Renk</span>
        <div className="flex gap-2">
          {product.Variants.map((x) => (
            <img
              className="w-10 mt-2 rounded-md bg-hover  cursor-pointer"
              src={x.ImageUrl}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-semibold ">Beden: {beden}</span>
          <span
            onClick={() => setIsModalVisible(true)}
            style={{ color: "#999" }}
            className=" text-xs cursor-pointer"
          >
            <i class="fas fa-ruler text-xs mr-2"></i>Beden Tablosu
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
          <button
            onClick={() => setBeden("XS")}
            className="border-2 rounded-md px-3 py-1 text-sm size-hover"
          >
            XS
          </button>
          <button className="border-2 rounded-md px-3 ml-2 py-1 text-sm size-hover">
            S
          </button>

          <Badge
            className="group"
            count={
              <BellOutlined
                style={{ color: "#e6e6e6" }}
                className="group-hover:text-yellow-600"
              />
            }
          >
            <button className="group border-2  rounded-md disabled-size  px-3 ml-2 py-1 text-sm size-hover">
              M
            </button>
          </Badge>

          <Badge
            className="group"
            count={
              <BellOutlined
                style={{ color: "#e6e6e6" }}
                className="group-hover:text-yellow-600"
              />
            }
          >
            <button className="group border-2  rounded-md disabled-size  px-3 ml-2 py-1 text-sm size-hover">
              L
            </button>
          </Badge>
          <button className="border-2 rounded-md ml-2 px-3 py-1 text-sm size-hover">
            XL
          </button>
        </div>
        <div className="flex mt-4 gap-3">
          <div className=" flex-1">
            <button className="text-white w-full py-3 bg-main-color rounded-md  text-xl font-semibold buy-button">
              Sepete Ekle
            </button>
          </div>
          <div className="">
            <button className=" px-4 h-full rounded-md bg-white border text-gray-400  text-xl font-bold ">
              <i class="far fa-heart text-2xl"></i>
            </button>
          </div>
        </div>
        <div className="mt-2 justify-between flex">
          <span className="text-xs small-desc-text">
            <span className="font-semibold">Tahmini Kargoya Teslim:</span> 1 gün
            içinde
          </span>
          <span className="text-xs small-opacity-text">
            <i class="far fa-heart  mr-1"></i>48488 favori
          </span>
        </div>

        <Divider className="mb-2" />
        <div className="pr-2  h-72 overflow-hidden relative">
          <span className="font-semibold">Öne Çıkan Bilgiler</span>
          <ul className="list-disc list-inside text-xs">
            <li className="text-gray-300 text-lg m">
              <span className="small-desc-text text-xs">
                15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayın.
              </span>
            </li>
            <li className="text-gray-300 text-lg m">
              <span className="small-desc-text text-xs">
                Bu ürün <b className="underline">Trendyol</b> tarafından
                gönderilecektir.
              </span>
            </li>
            <li className="text-gray-300 text-lg m">
              <span className="small-desc-text text-xs">
                Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
              </span>
            </li>
            <li className="text-gray-300 text-lg m">
              <span className="small-desc-text text-xs">
                Mankenin üzerindeki ürün S/36 bedendir.
              </span>
            </li>
            <li className="text-gray-300 text-lg m">
              <span className="small-desc-text text-xs">
                %50 Pamuk %50 Polyester, Örme Kumaş
              </span>
            </li>
            <li className="text-gray-300 text-lg m">
              <span className="small-desc-text text-xs">
                Omuzdan Boy: 88 cm
              </span>
            </li>
            <li className="text-gray-300 text-lg m">
              <span className="small-desc-text text-xs">
                Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
              </span>
            </li>
            <li className="text-gray-300 text-lg m">
              <span className="small-desc-text text-xs">
                Stüdyo çekimlerinde renkler ışık farklılığından dolayı
                değişiklik gösterebilir. Bu üründen en fazla 10 adet sipariş
                verilebilir.
              </span>
            </li>
          </ul>
          <div className="absolute bottom-2 w-full">
            <div className="relative w-full">
              <div className="opacity-layout "></div>
              <button className=" w-full text-center rounded-md text-xs font-semibold text-gray-600 bg-white border tracking-wide py-2 product-button">
                ÜRÜNÜN TÜM ÖZELLİKLERİ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
