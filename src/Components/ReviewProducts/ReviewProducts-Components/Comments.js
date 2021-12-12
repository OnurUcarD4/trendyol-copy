import React from "react";
import { Rate, Divider } from "antd";
import LikeComment from "../../OfferCards/OfferCards-Components/LikeComment";

const Comments = (props) => {
  const { comments } = props;

  return (
    <div>
      {comments.map((e) => {
        return (
          <div className="">
            <div className="p-4">
              <div className="">
                <Rate className="text-xs" disabled allowHalf value={5} />
                <span className="ml-2">{e.Comment}</span>
                <div className="mt-3 flex justify-between items-center">
                  <div className="">
                    <span className="buyer-color text-xs font-semibold border-r-2 pr-2">
                      {e.Name}
                    </span>
                    <span className="ml-2 buyer-color text-xs border-r-2 pr-2">
                      {e.Date}
                    </span>
                    <span className="ml-2 text-xs font-bold store-color">
                      {e.Store}{" "}
                      <span className="font-medium buyer-color">
                        satıcısından satın alındı.
                      </span>
                    </span>
                    <i class="fas fa-check-circle buy-color ml-2 text-lg"></i>
                    <span className="buy-color text-xs font-semibold ml-1">
                      Ürünü satın aldı.
                    </span>
                  </div>

                  <LikeComment comments={e} />
                </div>
              </div>
            </div>
            <Divider className="m-0" />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
