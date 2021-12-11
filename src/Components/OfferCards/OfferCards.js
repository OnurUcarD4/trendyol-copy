import { Divider } from "antd";
import React from "react";
import "./OfferCards.css";
import { Rate } from "antd";
import DiscountCard from "./OfferCards-Components/DiscountCard";
import StoreCard from "./OfferCards-Components/StoreCard";
import CommentsCard from "./OfferCards-Components/CommentsCard";
import CardButtons from "./OfferCards-Components/CardButtons";

const OfferCards = () => {
  return (
    <div>
      <DiscountCard />
      <StoreCard />
      <CommentsCard />
      <CardButtons />
    </div>
  );
};

export default OfferCards;
