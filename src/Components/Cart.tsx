import { useState } from "react";
import CartIcon from "../assets/bag.svg";
import CartItem from "./CartItem";
import "../Styles/Components/Cart.scss";
import { useCart } from "./CartContext";
import { createOrder, OrderItem } from "../Services/api";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSubmitOrder = async () => {
    if (cartItems.length === 0) return;
  
    try {
      setIsSubmitting(true);
      const expandedOrderItems: OrderItem[] = [];
      for (const item of cartItems) {
        for (let i = 0; i < item.quantity; i++) {
          expandedOrderItems.push({
            name: item.title,
            price: item.price
          });
        }
      }
      
      const response = await createOrder(expandedOrderItems);
  
      
      localStorage.setItem('airbean_last_order', response.orderNr);
  
      clearCart();
      setIsCartOpen(false);
      navigate("/status", { state: { orderNr: response.orderNr } });
      
    } catch (error) {
      console.error("Failed to place order:", error);
    } finally {
      setIsSubmitting(false);
    }
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
        {getTotalItems() > 0 && (
          <p className="cart__amount">{getTotalItems()}</p>
        )}
      </div>

      {isCartOpen && (
        <div className="cart__modal" onClick={toggleCart}>
          <section className="cart" onClick={(e) => e.stopPropagation()}>
            <h3 className="cart__heading">Din beställning</h3>
            <section className="cart__list">
              {cartItems.length === 0 ? (
                <p>Din varukorg är tom</p>
              ) : (
                cartItems.map((item) => (
                  <CartItem 
                    key={item.id} 
                    id={item.id}
                    title={item.title} 
                    price={item.price} 
                    quantity={item.quantity}
                  />
                ))
              )}
            </section>
            <article className="cart-sum">
              <p className="cart-sum__title">Total</p>
              <div className="cart__dotted-line"></div>
              <p className="cart-sum__amount">{getTotalPrice()} kr</p>
              <p className="cart-sum__condition">inkl. moms + drönarleverans</p>
            </article>
            <button 
              className="cart__btn" 
              onClick={handleSubmitOrder}
              disabled={isSubmitting || cartItems.length === 0}
            >
              {isSubmitting ? "Skickar..." : "Skicka min order!"}
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default Cart;