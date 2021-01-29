import React from "react";
import StarIcon from "../Icons/StarIcon";

const Item = props => {
  const { item, onClick } = props;
  return (
    <div className="Item">
      <div className="Item_card" onClick={onClick}>
        <div className="Item_texts">
          <h3>{item.title}</h3>
          {item.description && item.description.length > 0 && (
            <p>{item.description}</p>
          )}
          <div className="Item_infos">
            <span className="Item_price">
              {Number(item.price)
                .toFixed(2)
                .replace(".", ",")}{""}
              €
            </span>
            {item.popular && (
              <span className="Item_popular">
                <StarIcon size={20} style={{ marginRight: 5 }} /> Populaire
              </span>
            )}
          </div>
        </div>
        {item.picture && (
          <div className="Item_picture">
            <img src={item.picture} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
