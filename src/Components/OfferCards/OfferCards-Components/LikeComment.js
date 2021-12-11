import React, { useState } from "react";
import { Dropdown, Modal, Menu } from "antd";

const LikeComment = (props) => {
  const { comments } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const likeComment = (
    <div className="bg-white shadow-xl rounded-md border  flex items-center justify-center ">
      <div className="w-72 p-3 px-5 flex flex-col">
        <span className="text-sm">
          Yorumu beğenmek için lütfen{" "}
          <span className="font-semibold text-yellow-500 underline">
            <a
              className="text-current"
              href="https://www.trendyol.com/giris?cb=https%3A%2F%2Fwww.trendyol.com%2Ftrendyolmilla%2Fgri-selanik-orme-elbise-twoaw20el1110-p-31078804"
            >
              Giriş Yap
            </a>
          </span>
        </span>
      </div>
    </div>
  );
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
    <div>
      <div className="flex">
        <div className="like-comment">
          <Dropdown arrow={true} overlay={likeComment} placement="bottomCenter">
            <a className="text-current">
              <i class="fas fa-thumbs-up market-color opacity-75 mr-1  "></i>
              <span className="text-xs">
                {console.log(comments)}
                Yorumu Beğen ({comments.CommentLike})
              </span>
            </a>
          </Dropdown>
        </div>

        <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
          <a className="fas fa-ellipsis-v market-color text-xl ellipsis ml-2 text-current"></a>
        </Dropdown>
      </div>
    </div>
  );
};

export default LikeComment;
