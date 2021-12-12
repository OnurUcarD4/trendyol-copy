import React from "react";
import "./OfferCards.css";
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
