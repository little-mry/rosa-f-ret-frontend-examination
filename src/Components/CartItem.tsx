import "../Styles/Components/Cart.scss";
import addIcon from "../assets/circle-plus.svg";
import removeIcon from "../assets/circle-minus.svg";
import { useCart } from "./CartContext";

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, title, price, quantity }: CartItemProps) => {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <article className="cart__item">
      <p className="item__title">{title}</p>
      <div className="cart__dotted-line"></div>
      <div className="change-cart__con">
        <img 
          src={addIcon} 
          alt="add" 
          className="change-cart__icon" 
          onClick={() => increaseQuantity(id)}
        />
        <p className="item__amount">{quantity}</p>
        <img 
          src={removeIcon} 
          alt="remove" 
          className="change-cart__icon" 
          onClick={() => decreaseQuantity(id)}
        />
      </div>
      <p className="item__price">{price * quantity} kr</p>
    </article>
  );
};

export default CartItem;