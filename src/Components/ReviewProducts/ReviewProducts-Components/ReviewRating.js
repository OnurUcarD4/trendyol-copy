import React from "react";
import { Rate, Dropdown, Progress } from "antd";

const ReviewRating = () => {
  const rating = (
    <div className="bg-white shadow-xl rounded-md border  flex items-center justify-center ">
      <div className="w-72 p-3 px-5 flex flex-col">
        <span className="font-semibold text-lg">
          4.5{" "}
          <span className="text-gray-400 text-xs font-normal">
            Ortalama Puan
          </span>
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
  return (
    <div>
      <div className="p-4 flex items-center">
        <span className="text-3xl font-semibold">4.5</span>
        <Rate className="text-2xl ml-2" disabled allowHalf value={4.5} />
        <Dropdown arrow={true} overlay={rating} placement="bottomCenter">
          <a>
            <i class="fas fa-chevron-down opacity-40 ml-1 text-black"></i>
          </a>
        </Dropdown>

        <span className="tracking-wide ml-64">
          838 Değerlendirme | 563 Yorum
        </span>
      </div>
    </div>
  );
};

export default ReviewRating;
