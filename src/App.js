import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const addItem = (itemId) => {
    const exist = cart.find((cartItem) => cartItem.id === itemId);
    if (exist) {
      const index = cart.indexOf(exist);
      const nextCart = [...cart];
      nextCart[index] = {
        ...nextCart[index],
        amount: nextCart[index].amount + 1,
      };
      setCart(nextCart);
    } else {
      // add
      // find item in data
      let item = null;
      data.categories.forEach((category) => {
        category.meals.forEach((menu) => {
          if (menu.id === itemId) {
            item = menu;
          }
        });
      });
      if (item === null) {
        console.error(`Cannot find item ${itemId}`);
        return;
      }
      const nextCart = [...cart];
      nextCart.push({
        id: itemId,
        title: item.title,
        price: item.price,
        amount: 1,
      });
      setCart(nextCart);
    }
  };

  const removeItem = (itemId) => {
    const exist = cart.find((cartItem) => cartItem.id === itemId);
    if (!exist) {
      console.error(`Cannot remove item not in cart !`);
      return;
    }
    const index = cart.indexOf(exist);
    const nextCart = [...cart];
    nextCart[index] = {
      ...nextCart[index],
      amount: nextCart[index].amount - 1,
    };
    const cartNotZero = nextCart.filter((cartItem) => cartItem.amount > 0);
    setCart(cartNotZero);
  };

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get("http://localhost:3001/");
      const response = await axios.get("https://deliveroo-m-crd.herokuapp.com");
      // console.log(response.data);
      setData(response.data);
      setisLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <Loader
    className="Loader"
    type="Oval"
    color="#00cdbd"
    height={80}
    width={80}
  />

  
) : (
    <div>
      <Header restaurant={data ? data.restaurant : null} />
      <Content
        menu={data ? data.categories : null}
        cart={cart}
        addItem={addItem}
        removeItem={removeItem}
      />
      <Footer
      />
    </div>
  );
};

export default App;
