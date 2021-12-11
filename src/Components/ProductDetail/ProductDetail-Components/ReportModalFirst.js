import { Modal, Radio, Space } from "antd";
import React, { useState } from "react";
const ReportModalFirst = (props) => {
  const { setIsModalVisible, isModalVisible, setIsReportVisible } = props;

  const [state, setState] = useState(1);
  const { value } = state;
  const onChange = (e) => {
    setState({
      value: e.target.value,
    });
  };
  const onOkHandle = () => {
    setIsModalVisible(false);
    setIsReportVisible(true);
  };
  return (
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
          <Radio value={3}>Ürün ismi ya da bilgileri eksik ya da hatalı</Radio>
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
  );
};

export default ReportModalFirst;
