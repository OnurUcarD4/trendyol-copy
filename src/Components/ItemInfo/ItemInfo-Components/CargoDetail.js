import React from "react";
import { Divider } from "antd";

const CargoDetail = (props) => {
  const { favorite, data } = props;
  return (
    <div className="mt-2 justify-between flex">
      <span className="text-xs small-desc-text">
        <span className="font-semibold">Tahmini Kargoya Teslim:</span>
        {data.ShipTime} gün içinde
      </span>
      <span className="text-xs small-opacity-text mr-2">
        <i class="far fa-heart   mr-1"></i>
        {favorite ? parseInt(data.Favorite) + 1 : parseInt(data.Favorite)}{" "}
        favori
      </span>
    </div>
  );
};

export default CargoDetail;
