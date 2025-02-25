import { useState } from "react";
import CartIcon from "../assets/bag.svg";
import CartItem from "./CartItem";
import "../Styles/Components/Cart.scss";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="cart__icon__con">
        <img
          src={CartIcon}
          alt="Cart icon"
          className="cart__icon"
          onClick={toggleCart}
        />
      </div>

      <p className="cart__amount"></p>
      {isCartOpen && (
        <div className="cart__modal" onClick={toggleCart}>
          <section className="cart" onClick={(e) => e.stopPropagation()}>
            <h3 className="cart__heading">Din beställning</h3>
            <section className="cart__list">
              <CartItem />
            </section>
            <article className="cart-sum">
              <p className="cart-sum__title">Total</p>
              <div className="cart__dotted-line"></div>
              <p className="cart-sum__amount">88 kr</p>
              <p className="cart-sum__condition">inkl. moms + drönarleverans</p>
            </article>
            <button className="cart__btn">Skicka min order!</button>
          </section>
        </div>
      )}
    </>
  );
};

export default Cart;
