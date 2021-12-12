import React from "react";

const Product = () => {
  return (
    <div className="container flex">
      <div className="">
        <img
          className="w-44 rounded-md mr-4"
          src="https://cdn.dsmcdn.com/ty154/product/media/images/20210805/12/115856172/55931629/1/1_org_zoom.jpg"
          alt=""
        />
      </div>
      <div className="">
        <span className="font-semibold text-lg">
          TRENDYOLMİLLA Gri Selanik Örme Elbise TWOAW20EL1110
        </span>
        <ul className="list-disc ml-6 text-gray-300 mt-2">
          <li className="mb-2">
            <span className="text-gray-700">
              Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88
            </span>
          </li>
          <li className="mb-2">
            <span className="text-gray-700">
              Mankenin üzerindeki ürün S/36 bedendir.
            </span>
          </li>
          <li className="mb-2">
            <span className="text-gray-700">
              %50 Pamuk %50 Polyester, Örme Kumaş
            </span>
          </li>
          <li className="mb-2">
            <span className="text-gray-700">Omuzdan Boy: 88 cm</span>
          </li>
          <li className="mb-2">
            <span className="text-gray-700">
              Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
            </span>
          </li>
          <li className="mb-2">
            <span className="text-gray-700">
              Stüdyo çekimlerinde renkler ışık farklılığından dolayı değişiklik
              gösterebilir.
            </span>
          </li>
          <li className="mb-2">
            <span className="text-gray-700">
              Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin
              üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
            </span>
          </li>
          <li className="mb-2">
            <span className="text-gray-700">
              Kampanya fiyatından satılmak üzere 5 adetten az stok
              bulunmaktadır.
            </span>
          </li>
          <li className="mb-2">
            <span className="text-gray-700">
              Bu ürün indirim kampanyasına dahil değildir.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
