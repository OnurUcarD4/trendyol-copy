import React, { useEffect, useState } from "react";
import "./ReviewProducts.css";
import { Divider } from "antd";
import axios from "axios";
import ReviewRating from "./ReviewProducts-Components/ReviewRating";
import Comments from "./ReviewProducts-Components/Comments";
import MoreCommentsButton from "./ReviewProducts-Components/MoreCommentsButton";

const ReviewProducts = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("http://localhost:3000/ReviewProducts");
      setComments(resp.data);
    })();
  }, []);

  return (
    <div id="productreviews" className="mt-2">
      <span className="font-semibold text-xl ">Ürün Değerlendirmeleri</span>

      <div className="border rounded-md mt-4">
        <ReviewRating />
        <Divider className="m-0" />
        <Comments comments={comments} />
        <MoreCommentsButton />
      </div>
    </div>
  );
};

export default ReviewProducts;
