import React from "react";

const ProductDetailList = (props) => {
  const { productdetail } = props;
  return (
    <div>
      <ul className="detail-attr-container">
        {productdetail.map((w) => {
          return (
            <li>
              <span className="p-3">{w.Title}</span>
              <span className="font-bold mr-2">{w.Detail}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductDetailList;
