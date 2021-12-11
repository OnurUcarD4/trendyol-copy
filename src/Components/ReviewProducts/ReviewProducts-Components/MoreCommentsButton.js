import React from "react";

const MoreCommentsButton = (props) => {
  return (
    <div>
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
  );
};

export default MoreCommentsButton;
