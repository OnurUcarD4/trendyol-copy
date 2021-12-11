import React from "react";

const Button = (props) => {
  const { setIsModalVisible } = props;
  return (
    <button
      onClick={() => setIsModalVisible(true)}
      className=" w-full border mt-4 py-3 rounded-md font-semibold report-button-color  "
    >
      <i class="fas fa-exclamation-triangle mr-1"></i>{" "}
      <span className="hover:underline">Şikayet Et</span>
    </button>
  );
};

export default Button;
