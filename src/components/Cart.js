import React from "react";
import PlusIcon from "../Icons/PlusIcon";
import MinusIcon from "../Icons/MinusIcon";

const Cart = props => {
  const { cart, addItem, removeItem } = props;
  const empty = cart.length === 0;

  const deliveryFees = 2.5;
  let subTotal = 0;
  cart.forEach(cartItem => {
    subTotal += cartItem.price * cartItem.amount;
  });

  const total = subTotal + deliveryFees;

  return (
    <div className="Cart">
      <div className="Cart_card">
        <button className={"Cart_validate" + (empty ? " Cart_disabled" : "")}>
          Valider mon panier
        </button>
        {empty ? (
          <div className="Cart_empty">Votre panier est vide</div>
        ) : (
          <div>
            <div className="Cart_items">
              {cart.map(cartItem => {
                return (
                  <div key={cartItem.id} className="Cart_line">
                    <div className="Cart_counter">
                      <span onClick={() => removeItem(cartItem.id)}>
                        <MinusIcon
                          size={20}
                          style={{ cursor: "pointer", color: "#00CEBD" }}
                        />
                      </span>
                      <span>{cartItem.amount}</span>
                      <span onClick={() => addItem(cartItem.id)}>
                        <PlusIcon
                          size={20}
                          style={{ cursor: "pointer", color: "#00CEBD" }}
                        />
                      </span>
                    </div>
                    <span className="Cart_item_name">{cartItem.title}</span>
                    <span className="Cart_amount">
                      {Number(cartItem.price)
                        .toFixed(2)
                        .replace(".", ",") + " €"}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="Cart_results">
              <div className="Cart_result_line">
                <span className="Cart_result_name">Sous-total</span>
                <span className="Cart_amount">
                  {subTotal.toFixed(2).replace(".", ",")} €
                </span>
              </div>
              <div className="Cart_result_line">
                <span className="Cart_result_name">Frais de livraison</span>
                <span>{deliveryFees.toFixed(2).replace(".", ",")} €</span>
              </div>
            </div>
            <div className="Cart_total">
              <span className="Cart_result_name">Total</span>
              <span className="Cart_amount">
                {total.toFixed(2).replace(".", ",")} €
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
