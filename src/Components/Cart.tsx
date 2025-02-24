import CartItem from "./CartItem";
import '../Styles/Components/Cart.scss'

const Cart = () => {
  return (
    <section className="cart__popup">
      <h3 className="heading__cart">Din beställing</h3>
      <section className="cart__list">
        <CartItem />
      </section>
    </section>
  );
};

export default Cart;
