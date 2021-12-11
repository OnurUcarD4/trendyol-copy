import React, { useState } from "react";
import { Modal, Divider } from "antd";

const ProductDetails = (props) => {
  const { product } = props;
  const [refundModal, setrefundModal] = useState(false);
  return (
    <div>
      <Divider className="mb-2" />
      <div className="pr-2  h-72 overflow-hidden relative">
        <span className="font-semibold">Öne Çıkan Bilgiler</span>
        <ul className="list-disc list-inside text-xs">
          <li className="text-gray-300 text-lg m">
            <span className="small-desc-text text-xs">
              15 gün içinde ücretsiz iade. Detaylı bilgi için{" "}
              <span
                onClick={() => setrefundModal(true)}
                className="underline hover:text-yellow-500 cursor-pointer"
              >
                tıklayın.
              </span>
            </span>
            <Modal
              width={520}
              style={{ height: "calc(100vh - 200px)" }}
              bodyStyle={{ overflowY: "scroll" }}
              title="İade Koşulları"
              onCancel={() => setrefundModal(false)}
              visible={refundModal}
              footer={false}
            >
              <span>
                <div
                  className="px-6 py-2"
                  contentEditable="true"
                  dangerouslySetInnerHTML={{
                    __html: product.RefundRequirement,
                  }}
                ></div>
              </span>
            </Modal>
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
            <span className="small-desc-text text-xs">Omuzdan Boy: 88 cm</span>
          </li>
          <li className="text-gray-300 text-lg m">
            <span className="small-desc-text text-xs">
              Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
            </span>
          </li>
          <li className="text-gray-300 text-lg m">
            <span className="small-desc-text text-xs">
              Stüdyo çekimlerinde renkler ışık farklılığından dolayı değişiklik
              gösterebilir. Bu üründen en fazla 10 adet sipariş verilebilir.
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
  );
};

export default ProductDetails;
