import React, { useState } from "react";
import { Modal, Divider, Dropdown } from "antd";

const ProductDetails = (props) => {
  const { product } = props;
  const [refundModal, setrefundModal] = useState(false);
  const trendyol = (
    <div className=" bg-white shadow-xl rounded-sm border  flex items-center justify-center ">
      <div className="trendyol-hover  flex flex-col">
        <div className="flex p-2">
          <div className="">
            <img
              className="w-20 p-2"
              src="https://cdn.dsmcdn.com/web/production/trendyol-marketplace.svg"
              alt=""
            />
          </div>

          <Divider type="vertical" style={{ height: 70 }} />
          <div className="flex flex-col ml-2">
            <span className=" font-semibold">TRENDYOL PAZARYERİ</span>
            <span>
              Tüm satıcılarımız Trendyol hizmet standartlarını garanti eder.
            </span>
            <span className="text-xs">
              <span className="mr-2">
                <i class="fas fa-sync mt-3 mr-2"></i> Ücretsiz iade
              </span>
              <span className="mr-2">
                <i class="fas fa-shipping-fast mr-2"></i>
                Hızlı Teslimat
              </span>
              <span>
                <i class="fas fa-phone-volume mr-2"></i>
                Trendyol Müşteri Desteği
              </span>
            </span>
          </div>
        </div>

        <div className="">
          <div className=" flex flex-col trendyol-hover-background mt-2 ">
            <Divider
              className="p-0 m-0"
              style={{ width: 500, backgroundColor: "lightgray", height: 0 }}
            />
            <div className="flex flex-col px-4">
              <span className="text-xs mt-2">
                Satıcı: <span className="font-semibold">Trendyol</span>
              </span>
              <span className="text-xs mt-2">
                Satıcı Ünvanı:{" "}
                <span className="font-semibold">
                  DSM GRUP DANIŞMANLIKİLETİŞ.VE SATIŞ TİC.A.Ş.
                </span>
              </span>
              <span className="text-xs mt-2">
                İletişim:{" "}
                <span className="font-semibold">
                  Satıcının Trendyol tarafından teyit edilmiş e-posta ve
                  iletişim adresi kayıt altındadır.
                </span>
              </span>
              <span className="text-xs mt-2">
                Şehir: <span className="font-semibold">İstanbul</span>
              </span>
              <span className="text-xs mt-2 mb-4">
                Vergi Kimlik Numarası:{" "}
                <span className="font-semibold">3130557669</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
              Bu ürün{" "}
              <b className="underline">
                <Dropdown
                  arrow={true}
                  overlay={trendyol}
                  placement="bottomCenter"
                >
                  <span className="text-current">Trendyol</span>
                </Dropdown>
              </b>{" "}
              tarafından gönderilecektir.
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
            <a
              href="#product-details"
              className="text-current"
              rel="noreferrer"
            >
              <button className=" w-full text-center rounded-md text-xs font-semibold text-gray-600 bg-white border tracking-wide py-2 product-button">
                ÜRÜNÜN TÜM ÖZELLİKLERİ
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
