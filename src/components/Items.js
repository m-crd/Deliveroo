import React from 'react';
import Item from './Item';

const Items = props => {
  const { name, items, addItem } = props;
  return (
    <div>
      <h2>{name}</h2>
      <div className="Items">
        {items.map(item => {
          return (
            <Item
              key={item.id}
              item={item}
              onClick={() => {
                addItem(item.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Items;
