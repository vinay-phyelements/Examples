import React from "react";
import "../Item/Item.css";
function Item(props) {
  return (
    <div>
      <div className="item">
        <img src={props.image} alt="" />
        <p>{props.nane}</p>
        <div className="item-prices">
          <div className="item-prices-new">
            {props.new_price}
          </div>
          <div className="item-prices-old">
            {props.old_price}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Item;
