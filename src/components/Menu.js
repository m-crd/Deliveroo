import React from "react";
import Items from "./Items";

const Menu = props => {
  const { menu, addItem } = props;

  let nonEmptyCategories = menu.filter(elem => elem.meals.length > 0);

  return (
    <div className="Menu">
      {nonEmptyCategories.map((elem, index) => {
        return (
          <Items
            key={index}
            name={elem.name}
            items={elem.meals}
            addItem={addItem}
          />
        );
      })}
    </div>
  );
};

export default Menu;
