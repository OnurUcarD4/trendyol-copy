import { Divider } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./ProductDetail-Components/Product";
import ProductDetailList from "./ProductDetail-Components/ProductDetailList";
import ReportButton from "./ProductDetail-Components/ReportButtonComp";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [productDetail, setproductDetail] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("http://localhost:3000/ProductDetail");
      setproductDetail(resp.data);
    })();
  }, []);

  return (
    <div className="mt-5">
      <div className="mb-4">
        <span className="font-semibold text-xl">Ürün Bilgileri</span>
      </div>

      <div className="border p-6 rounded-md">
        <Product />

        <Divider />
        <div className="">
          <span className="font-semibold text-lg">Ürün Özellikleri</span>
        </div>

        <ProductDetailList productdetail={productDetail} />
      </div>
      <ReportButton />
    </div>
  );
};

export default ProductDetail;
