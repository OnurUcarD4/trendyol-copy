import "./App.css";
import { Breadcrumb } from "antd";
import Galleryslider from "./Components/GallerySlider/Galleryslider";
import ItemInfo from "./Components/ItemInfo/ItemInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OfferCards from "./Components/OfferCards/OfferCards";
import SameProducts from "./Components/SameProducts/SameProducts";
import ReviewProducts from "./Components/ReviewProducts/ReviewProducts";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  const [product, setProduct] = useState({ Variants: [] });
  useEffect(() => {
    (async () => {
      const resp = await axios.get("http://localhost:3000/Product");
      console.log(resp);
      setProduct(resp.data);
    })();
  }, []);

  return (
    <div className=" w-full h-full ">
      <div className="px-96 py-10  h-full w-full">
        <div className="mb-2">
          <Breadcrumb separator=">">
            <Breadcrumb.Item className="hover:underline cursor-pointer text-gray-600">
              <a
                href="https://www.trendyol.com/"
                target="_blank"
                className="text-current hover:text-current"
              >
                Anasayfa
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="hover:underline  text-gray-600 cursor-pointer">
              <a
                href="https://www.trendyol.com/kadin-x-g1"
                className="text-current hover:current"
                target="_blank"
              >
                Kadın
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="hover:underline text-gray-600 cursor-pointer">
              <a
                href="https://www.trendyol.com/kadin-giyim-x-g1-c82"
                className="text-current hover:current"
                target="_blank"
              >
                Giyim
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="hover:underline text-gray-600 cursor-pointer">
              <a
                href="https://www.trendyol.com/kadin-elbise-x-g1-c56"
                className="text-current hover:current"
                target="_blank"
              >
                Elbise
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="hover:underline text-black font-semibold cursor-pointer">
              <a
                href="https://www.trendyol.com/trendyolmilla-kadin-elbise-x-b101476-g1-c56"
                className="text-current hover:current"
                target="_blank"
              >
                TRENDYOLMİLLA Elbise
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="flex gap-4  ">
          <div className="flex-1   ">
            {" "}
            <div className="rounded-md  border   flex  ">
              <Galleryslider />
              {product.Variants.length > 0 ? (
                <ItemInfo product={product} />
              ) : null}
            </div>
          </div>
          <div style={{ flex: 0.25 }}>
            <OfferCards />
          </div>
        </div>
        <SameProducts />
        <ReviewProducts />
        <ProductDetail />
      </div>
    </div>
  );
}

export default App;
