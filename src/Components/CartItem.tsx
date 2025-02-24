import "../Styles/Components/Cart.scss";
import addIcom from "../assets/circle-plus.svg";
import removeIcom from "../assets/circle-minus.svg";

const CartItem = () => {
  return (
    <article className="cart__item">
      <p className="item__title">Bryggkaffe</p>
      <div className="cart__dotted-line"></div>
      <div className="change-cart__con">
        <img src={addIcom} alt="add" className="change-cart__icon" />
        <p className="item__amount">1</p>
        <img src={removeIcom} alt="remove" />
      </div>
      <p className="item__price">49 kr</p>
    </article>
  );
};

export default CartItem;
