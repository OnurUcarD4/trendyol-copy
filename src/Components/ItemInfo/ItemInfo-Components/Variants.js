import React from "react";

const Variants = (props) => {
  const toggleClass = () => {
    var header = document.getElementById("variants");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };

  return (
    <div className="flex flex-col pr-2">
      <span className="font-semibold">Renk</span>
      <div id="variants" className="flex gap-2">
        {props.data.Variants.map((x, i) => (
          <img
            onClick={toggleClass}
            alt=""
            className={` btn ${
              i === 0 ? "active" : ""
            }  w-10 mt-2 rounded-md bg-hover cursor-pointer`}
            src={x.ImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Variants;
