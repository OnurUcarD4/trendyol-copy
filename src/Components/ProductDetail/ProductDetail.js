import React, { useState } from "react";
import "./ProductDetail.css";
import { Divider } from "antd";
import { Modal } from "antd";
import { Radio, Input, Space } from "antd";

const ProductDetail = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isReportVisible, setIsReportVisible] = useState(false);

  const onOkHandle = () => {
    setIsModalVisible(false);
    setIsReportVisible(true);
  };

  const [state, setState] = useState(1);
  const { value } = state;
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setState({
      value: e.target.value,
    });
  };
  return (
    <div className="mt-5">
      <div className="mb-4">
        <span className="font-semibold text-xl">Ürün Bilgileri</span>
      </div>

      <div className="border p-6 rounded-md">
        <div className="container flex">
          <div className="">
            <img
              className="w-44 rounded-md mr-4"
              src="https://cdn.dsmcdn.com/ty154/product/media/images/20210805/12/115856172/55931629/1/1_org_zoom.jpg"
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
                  Stüdyo çekimlerinde renkler ışık farklılığından dolayı
                  değişiklik gösterebilir.
                </span>
              </li>
              <li className="mb-2">
                <span className="text-gray-700">
                  Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin
                  üzerindeki siparişleri Trendyol iptal etme hakkını saklı
                  tutar.
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
        <Divider />
        <div className="">
          <span className="font-semibold text-lg">Ürün Özellikleri</span>
        </div>

        <ul className="detail-attr-container">
          <li>
            <span className="p-3">Kol Boyu</span>
            <span className="font-bold mr-2">Kısa</span>
          </li>
          <li>
            <span className="p-3">Kumaş Tipi</span>
            <span className="font-bold mr-2">Örme</span>
          </li>
          <li>
            <span className="p-3">Materyal</span>
            <span className="font-bold mr-2">Polyester</span>
          </li>
          <li>
            <span className="p-3">Kol Tipi</span>
            <span className="font-bold mr-2">Truvakar Kol</span>
          </li>
          <li>
            <span className="p-3">Stil</span>
            <span className="font-bold mr-2">Casual</span>
          </li>
          <li>
            <span className="p-3">Desen</span>
            <span className="font-bold mr-2">Düz Renk</span>
          </li>
          <li>
            <span className="p-3">Kalıp</span>
            <span className="font-bold mr-2">Bodycon</span>
          </li>
          <li>
            <span className="p-3">Yaka</span>
            <span className="font-bold mr-2">Dik Yaka</span>
          </li>
          <li>
            <span className="p-3">Boy / Ölçü</span>
            <span className="font-bold  mr-2">Midi</span>
          </li>
          <li>
            <span className="p-3">Renk</span>
            <span className="font-bold  mr-2">Gri</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalVisible(true)}
          className=" w-full border mt-4 py-3 rounded-md font-semibold report-button-color  "
        >
          <i class="fas fa-exclamation-triangle mr-1"></i>{" "}
          <span className="hover:underline">Şikayet Et</span>
        </button>
        <>
          <Modal
            className="w-96"
            title="Ürün Şikayet Nedeninizi Seçiniz"
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            <Radio.Group
              defaultValue={1}
              className="ml-2 mt-2 flex justify-center"
              onChange={onChange}
              value={value}
            >
              <Space direction="vertical">
                <Radio value={1}>Haksız fiyatlandırma fiyatı hatalı</Radio>
                <Radio value={2}>Ürünün görseli hatalı</Radio>
                <Radio value={3}>
                  Ürün ismi ya da bilgileri eksik ya da hatalı
                </Radio>
              </Space>
            </Radio.Group>
            <div className="flex justify-center mt-10">
              <button
                onClick={onOkHandle}
                className="w-full mx-4 rounded-md mb-2 text-lg font-semibold text-white report-button py-3"
              >
                Şikayet Et
              </button>
            </div>
          </Modal>
          <Modal
            visible={isReportVisible}
            onCancel={() => setIsReportVisible(false)}
            footer={null}
          >
            <div className="justify-center flex flex-col items-center text-center">
              <i class="far fa-check-circle text-7xl text-green-500 mt-10"></i>
              <span className="font-semibold text-3xl mt-4 text-green-500">
                ŞİKAYETİNİZİ ALDIK
              </span>
              <span className="mt-10 text-lg mb-10">
                Geri bildiriminiz için teşekkür ederiz
              </span>
            </div>
          </Modal>
        </>
      </div>
    </div>
  );
};

export default ProductDetail;
