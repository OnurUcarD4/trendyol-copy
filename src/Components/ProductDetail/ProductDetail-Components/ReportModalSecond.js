import React from "react";
import { Modal } from "antd";

const ReportModalSecond = (props) => {
  const { setIsReportVisible, isReportVisible } = props;
  return (
    <div>
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
    </div>
  );
};

export default ReportModalSecond;
