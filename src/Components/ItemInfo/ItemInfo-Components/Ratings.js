import React from "react";
import { Modal, Dropdown } from "antd";
import { Rate } from "antd";
import { Progress } from "antd";

const rating = (
  <div className="bg-white shadow-xl rounded-md border  flex items-center justify-center ">
    <div className="w-72 p-3 px-5 flex flex-col">
      <span className="font-semibold text-lg">
        4.5{" "}
        <span className="text-gray-400 text-xs font-normal">Ortalama Puan</span>
      </span>

      <span className="text-xs text-gray-400">
        5 <Rate className="text-sm" allowHalf disabled value={5} />
        <Progress
          className="progress-style"
          strokeColor="#ffc000"
          trailColor="#e6e6e6"
          size="small"
          percent={70}
          showInfo={false}
        />{" "}
        <span className="text-gray-400">580</span>
      </span>
      <span className="text-xs text-gray-400">
        4 <Rate className="text-sm" allowHalf disabled value={4} />
        <Progress
          className="progress-style"
          strokeColor="#ffc000"
          trailColor="#e6e6e6"
          size="small"
          percent={20}
          showInfo={false}
        />{" "}
        <span className="text-gray-400">145</span>
      </span>
      <span className="text-xs text-gray-400">
        3 <Rate className="text-sm" allowHalf disabled value={3} />
        <Progress
          className="progress-style"
          strokeColor="#ffc000"
          trailColor="#e6e6e6"
          size="small"
          percent={13}
          showInfo={false}
        />{" "}
        <span className="text-gray-400">66</span>
      </span>
      <span className="text-xs text-gray-400">
        2 <Rate className="text-sm" allowHalf disabled value={2} />
        <Progress
          className="progress-style"
          strokeColor="#ffc000"
          trailColor="#e6e6e6"
          size="small"
          percent={8}
          showInfo={false}
        />{" "}
        <span className="text-gray-400">28</span>
      </span>
      <span className="text-xs text-gray-400">
        1 <Rate className="text-sm" allowHalf disabled value={1} />
        <Progress
          className="progress-style"
          strokeColor="#ffc000"
          trailColor="#e6e6e6"
          size="small"
          percent={6}
          showInfo={false}
        />{" "}
        <span className="text-gray-400">24</span>
      </span>
    </div>
  </div>
);

const Ratings = (props) => {
  return (
    <div>
      <div className="">
        <Dropdown arrow={true} overlay={rating} placement="bottomCenter">
          <a>
            <Rate
              className="text-sm"
              allowHalf
              disabled
              value={props.data.Rating}
            />
          </a>
        </Dropdown>

        <span className="text-xs hover:text-yellow-500 hover:underline cursor-pointer">
          <a
            className="text-current hover:current"
            href="https://www.trendyol.com/trendyolmilla/siyah-selanik-orme-elbise-twoaw20el1110-p-31078803/yorumlar?boutiqueId=592132&merchantId=968&v=xs"
            target="_blank"
          >
            {props.data.ReviewCount} Değerlendirme{" "}
          </a>
        </span>
        <img
          className="w-5 h-4 inline ml-1 mb-1"
          src="https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png"
        />
      </div>
    </div>
  );
};

export default Ratings;
