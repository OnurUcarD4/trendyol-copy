import React, { useState } from "react";

const Variants = (props) => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="flex flex-col pr-2">
      <span className="font-semibold">Renk</span>
      <div className="flex gap-2">
        {props.data.Variants.map((x) => (
          <img
            onClick={toggleClass}
            className={`${
              isActive ? "bg-border" : null
            }   w-10 mt-2 rounded-md bg-hover cursor-pointer`}
            src={x.ImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Variants;
