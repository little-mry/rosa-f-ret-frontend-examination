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
        <section className="cart__popup">
          <h3 className="heading__cart">Din beställning</h3>
          <section className="cart__list">
            <CartItem />
          </section>
          <article className="sum__con">
            <p className="cart-sum sum__title">Total</p>
            <div className="cart__dotted-line"></div>
            <p className="cart-sum sum__amount">88 kr</p>
            <p className="sum-condition">inkl. moms + drönarleverans</p>
          </article>
          <button className="cart__btn">Skicka min order!</button>
        </section>
      )}
    </>
  );
};

export default Cart;
