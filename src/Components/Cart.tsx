import CartItem from "./CartItem";
import "../Styles/Components/Cart.scss";

const Cart = () => {
  return (
    <section className="cart__popup">
      <h3 className="heading__cart">Din beställing</h3>
      <section className="cart__list">
        <CartItem />
        <CartItem />
        <CartItem />
      </section>
      <article className="sum__con">
        <p className="sum sum__title">Total</p>
        <div className="cart__dotted-line"></div>
        <p className="sum sum_amount">88 kr</p>
        <p className="sum-condition">inkl. moms + drönarleverans</p>
      </article>
      <button className="cart__btn">Skicka min order!</button>
    </section>
  );
};

export default Cart;
