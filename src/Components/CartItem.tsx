import "../Styles/Components/Cart.scss";
import addIcon from "../assets/circle-plus.svg";
import removeIcon from "../assets/circle-minus.svg";

const CartItem = () => {
  return (
    <article className="cart__item">
      <p className="item__title">Bryggkaffe</p>
      <div className="cart__dotted-line"></div>
      <div className="change-cart__con">
        <img src={addIcon} alt="add" className="change-cart__icon" />
        <p className="item__amount">1</p>
        <img src={removeIcon} alt="remove" className="change-cart__icon" />
      </div>
      <p className="item__price">49 kr</p>
    </article>
  );
};

export default CartItem;
