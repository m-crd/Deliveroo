import React from 'react';
import Cart from './Cart';
import Menu from './Menu';

const Content = props => {
  const { menu, cart, addItem, removeItem } = props;
  return (
    <div>
      <div className="Content_center">
        <Menu menu={menu} addItem={addItem} />
        <Cart cart={cart} addItem={addItem} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default Content;
