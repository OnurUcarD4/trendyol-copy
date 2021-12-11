import React, { useState } from "react";
import "./ItemInfo.css";
import ItemInfoTitle from "./ItemInfo-Components/ItemInfoTitle";
import Ratings from "./ItemInfo-Components/Ratings";
import Pricing from "./ItemInfo-Components/Pricing";
import Variants from "./ItemInfo-Components/Variants";
import SizeComp from "./ItemInfo-Components/SizeComp";
import CargoDetail from "./ItemInfo-Components/CargoDetail";
import ProductDetails from "./ItemInfo-Components/ProductDetails";

const ItemInfo = (props) => {
  const { product } = props;
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <ItemInfoTitle data={product} />
      <Ratings data={product} />
      <Pricing data={product} />
      <Variants data={product} />
      <SizeComp favorite={favorite} setFavorite={setFavorite} data={product} />
      <CargoDetail favorite={favorite} data={product} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ItemInfo;
