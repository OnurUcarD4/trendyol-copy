import React, { useState } from "react";
import ReportButton from "./Button";
import ReportModalFirst from "./ReportModalFirst";
import ReportModalSecond from "./ReportModalSecond";

const ReportButtonComp = () => {
  const [isReportVisible, setIsReportVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="flex justify-center">
      <ReportButton setIsModalVisible={setIsModalVisible} />
      <>
        <ReportModalFirst
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
          setIsReportVisible={setIsReportVisible}
        />
        <ReportModalSecond
          isReportVisible={isReportVisible}
          setIsReportVisible={setIsReportVisible}
        />
      </>
    </div>
  );
};

export default ReportButtonComp;
