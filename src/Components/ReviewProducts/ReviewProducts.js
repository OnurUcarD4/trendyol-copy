import React, { useState } from "react";
import "./ReviewProducts.css";
import { Divider, Rate } from "antd";
import { Menu, Dropdown, Button, Space } from "antd";
import { Modal } from "antd";

const ReviewProducts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isReportVisible, setIsReportVisible] = useState(false);

  const onOkHandle = () => {
    setIsModalVisible(false);
    setIsReportVisible(true);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setIsModalVisible(true)}>Şikayet Et</Menu.Item>
      <Modal
        visible={isModalVisible}
        onOk={onOkHandle}
        onCancel={() => setIsModalVisible(false)}
        cancelText="İptal"
        okText="Şikayet Et"
      >
        <div className="flex flex-col items-center justify-center">
          <i class="fas fa-exclamation-triangle mt-4 text-7xl opacity-75"></i>

          <span className="text-xl font-semibold mt-3 opacity-75">
            Şikayet Et
          </span>
          <span className="px-10 mt-4 mb-4 tracking-wider">
            Farklı ürüne ait olan, reklam içeren, başka kullanıcıların haklarına
            saldırıda bulunan, müstehcen içerikli ya da yasal olmayan içerik
            taşıyan yorumları yayınlamamaya dikkat ediyoruz. Uygun olmadığını
            düşündüğünüz içerikleri "Şikayet Et" butonu ile bize
            iletebilirsiniz.
          </span>
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
    </Menu>
  );
  return (
    <div className="mt-2">
      <span className="font-semibold text-xl mb-2">Ürün Değerlendirmeleri</span>
      <div className="border rounded-md mt-2">
        <div className="p-4 flex items-center">
          <span className="text-3xl font-semibold">4.5</span>
          <Rate className="text-2xl ml-2" disabled allowHalf value={4.5} />
          <span className="tracking-wide ml-64">
            838 Değerlendirme | 563 Yorum
          </span>
        </div>
        <Divider className="m-0" />

        <div className="p-4">
          <div className="">
            <Rate className="text-xs" disabled allowHalf value={5} />
            <span className="ml-2">
              174 boy 69kiloyum L beden aldım beden tam boyu diz üstünde model
              harika çok beğendim sadece kollarıı biraz daha uzun bekledim ama
              idare eder. Kesinlikle alın kalınlığı kış için uygun
            </span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="">
              <span className="buyer-color text-xs font-semibold border-r-2 pr-2">
                a** g**
              </span>
              <span className="ml-2 buyer-color text-xs border-r-2 pr-2">
                10 Kasım 2021
              </span>
              <span className="ml-2 text-xs font-bold store-color">
                Trendyol{" "}
                <span className="font-medium buyer-color">
                  satıcısından satın alındı.
                </span>
              </span>
              <i class="fas fa-check-circle buy-color ml-2 text-lg"></i>
              <span className="buy-color text-xs font-semibold ml-1">
                Ürünü satın aldı.
              </span>
            </div>

            <div className="flex">
              <div className="like-comment">
                <i class="fas fa-thumbs-up market-color opacity-75 mr-1  "></i>
                <span className="text-xs">Yorumu Beğen (2)</span>
              </div>

              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a className="fas fa-ellipsis-v market-color text-xl ellipsis ml-2 text-current"></a>
              </Dropdown>
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        <div className="p-4">
          <div className="">
            <Rate className="text-xs" disabled allowHalf value={5} />
            <span className="ml-2">
              Aynısının siyahını da almıştım memnun kaldım ve diğer renkleri de
              neden olmasın dolabımda dedim. Giy çık bi parça. Beline şık ya da
              spor bi kemerle ger türlü kombin yapılır. Boyu diz kapağının biraz
              üzerinde. Mini değil ama uzun da değil. Ama sıcak tutacak
              mevsimlik de kışlıkta diyebileceğim bi parça
            </span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="">
              <span className="buyer-color text-xs font-semibold border-r-2 pr-2">
                R** A**
              </span>
              <span className="ml-2 buyer-color text-xs border-r-2 pr-2">
                11 Kasım 2021
              </span>
              <span className="ml-2 text-xs font-bold store-color">
                Trendyol{" "}
                <span className="font-medium buyer-color">
                  satıcısından satın alındı.
                </span>
              </span>
              <i class="fas fa-check-circle buy-color ml-2 text-lg"></i>
              <span className="buy-color text-xs font-semibold ml-1">
                Ürünü satın aldı.
              </span>
            </div>

            <div className="flex">
              <div className="like-comment">
                <i class="fas fa-thumbs-up market-color opacity-75 mr-1  "></i>
                <span className="text-xs">Yorumu Beğen (3)</span>
              </div>

              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a className="fas fa-ellipsis-v market-color text-xl ellipsis ml-2 text-current"></a>
              </Dropdown>
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        <div className="p-4">
          <div className="">
            <Rate className="text-xs" disabled allowHalf value={5} />
            <span className="ml-2">
              xl giyiyorum large siparis verdim buyuk geldi medium cok daha iyi
              olurdu ama urunun arka dikis kisminda yirtik vardi dikise hic
              girmemis iade etmek zorunda kaldım baya kalin guzel modeli de
            </span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="">
              <span className="buyer-color text-xs font-semibold border-r-2 pr-2">
                anıl cenan erdoğan
              </span>
              <span className="ml-2 buyer-color text-xs border-r-2 pr-2">
                24 Aralık 2019
              </span>
              <span className="ml-2 text-xs font-bold store-color">
                Trendyol{" "}
                <span className="font-medium buyer-color">
                  satıcısından satın alındı.
                </span>
              </span>
              <i class="fas fa-check-circle buy-color ml-2 text-lg"></i>
              <span className="buy-color text-xs font-semibold ml-1">
                Ürünü satın aldı.
              </span>
            </div>

            <div className="flex">
              <div className="like-comment">
                <i class="fas fa-thumbs-up market-color opacity-75 mr-1  "></i>
                <span className="text-xs">Yorumu Beğen (4)</span>
              </div>

              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a className="fas fa-ellipsis-v market-color text-xl ellipsis ml-2 text-current"></a>
              </Dropdown>
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        <div className="p-4">
          <div className="">
            <Rate className="text-xs" disabled allowHalf value={5} />
            <span className="ml-2">
              Aşırı güzel bir ürün rengi ve kumaşı. Kalın kışın giymek için çok
              iyi. 54 kiloyum normalde M giyiyorum ama S aldım. İyi ki S
              almışım. Kalıbı hafif geniş. Çok yapılı değilseniz kendi
              bedeninizden bir küçük beden alabilirsiniz.
            </span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="">
              <span className="buyer-color text-xs font-semibold border-r-2 pr-2">
                Ceyda Yüksel
              </span>
              <span className="ml-2 buyer-color text-xs border-r-2 pr-2">
                3 Aralık 2021
              </span>
              <span className="ml-2 text-xs font-bold store-color">
                Trendyol{" "}
                <span className="font-medium buyer-color">
                  satıcısından satın alındı.
                </span>
              </span>
              <i class="fas fa-check-circle buy-color ml-2 text-lg"></i>
              <span className="buy-color text-xs font-semibold ml-1">
                Ürünü satın aldı.
              </span>
            </div>

            <div className="flex">
              <div className="like-comment">
                <i class="fas fa-thumbs-up market-color opacity-75 mr-1  "></i>
                <span className="text-xs">Yorumu Beğen (0)</span>
              </div>

              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a className="fas fa-ellipsis-v market-color text-xl ellipsis ml-2 text-current"></a>
              </Dropdown>
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        <div className="p-4">
          <div className="">
            <Rate className="text-xs" disabled allowHalf value={5} />
            <span className="ml-2">
              60 boy 57 kg 5,5 aylık hamileyim. M beden aldım. Ama büyük geldi.
              S alsam daha iyi olurmuş. Büyük almayın, bedeninizi alın. Kumaşı
              falan gayet güzel, iade etmeyeceğim. Kemerle falan kombinlenir,
              büyüklüğü belli olmaz.
            </span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="">
              <span className="buyer-color text-xs font-semibold border-r-2 pr-2">
                D** A** -{" "}
                <span className="font-semibold text-gray-500">Elite Üye</span>
              </span>
              <span className="ml-2 buyer-color text-xs border-r-2 pr-2">
                3 Aralık 2021
              </span>
              <span className="ml-2 text-xs font-bold store-color">
                Trendyol{" "}
                <span className="font-medium buyer-color">
                  satıcısından satın alındı.
                </span>
              </span>
              <i class="fas fa-check-circle buy-color ml-2 text-lg"></i>
              <span className="buy-color text-xs font-semibold ml-1">
                Ürünü satın aldı.
              </span>
            </div>

            <div className="flex">
              <div className="like-comment">
                <i class="fas fa-thumbs-up market-color opacity-75 mr-1  "></i>
                <span className="text-xs">Yorumu Beğen (0)</span>
              </div>

              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a className="fas fa-ellipsis-v market-color text-xl ellipsis ml-2 text-current"></a>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="justify-center flex">
          <a
            className="w-full mx-6 text-current"
            href="https://www.trendyol.com/trendyolmilla/gri-selanik-orme-elbise-twoaw20el1110-p-31078804/yorumlar"
          >
            <button className="w-full rounded-md border mb-4 py-1 font-semibold more-comments-button">
              {" "}
              DAHA FAZLA YORUM GÖSTER{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewProducts;
