// Import modules and components
import { useState } from "react";
import CartIcon from "../assets/bag.svg";
import CartItem from "./CartItem";
import "../Styles/Components/Cart.scss";
import { useCart } from "./CartContext";
import { createOrder, OrderItem } from "../Services/api";
import { useNavigate } from "react-router-dom";

const Cart = () => {
// State to handle whether the cart is open or closed
  const [isCartOpen, setIsCartOpen] = useState(false);
// State to handle order submission
  const [isSubmitting, setIsSubmitting] = useState(false);
// Get cart data and functions from CartContext
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();
// Hook for navigating to other pages
  const navigate = useNavigate();

// Function to toggle the cart between open/close
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
// Function to submit the order
  const handleSubmitOrder = async () => {
    if (cartItems.length === 0) return;

    try {
      setIsSubmitting(true);
      const expandedOrderItems: OrderItem[] = [];
// Loop through the cart items and create a order list
      for (const item of cartItems) {
        for (let i = 0; i < item.quantity; i++) {
          const itemName = item.id === "campaign" ? "Cappuccino" : item.title;

          expandedOrderItems.push({
            name: itemName,
            price: item.price,
          });
        }
      }
// Send the order via API and receive an order number
      const response = await createOrder(expandedOrderItems);
// Store the order number in localstorage
      localStorage.setItem("airbean_last_order", response.orderNr);
// Clear the cart and close it
      clearCart();
      setIsCartOpen(false);
// Navigate to the status page with the order number
      navigate("/status", { state: { orderNr: response.orderNr } });
// Handle errors when placing an order
    } catch (error) {
      console.error("Failed to place order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
// Check if the cart contains coffee
  const hasCoffee = cartItems.some((item) => item.title === "Bryggkaffe" && item.quantity > 0);
// Check if the cart contains pastry 
  const hasPastry = cartItems.some((item) => item.title === "Gustav Adolfsbakelse" && item.quantity > 0);
// Check if both coffee and pastry are in the cart to apply a discount
  const discountApplied = hasCoffee && hasPastry;

  return (
    <>
      <div className="cart__icon__con" onClick={toggleCart}>
        <img src={CartIcon} alt="Cart icon" className="cart__icon"  />
{/*Show item count if the cart is not empty */}
        {getTotalItems() > 0 && <p className="cart__amount">{getTotalItems()}</p>}
      </div>
{/* Display the cart modal if it's open */}
      {isCartOpen && (
        <div className="cart__modal" onClick={toggleCart}>
          <section className="cart" onClick={(e) => e.stopPropagation()}>
            <h3 className="cart__heading">Din beställning</h3>
{/* List of cart items */}
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
  {/* Summary of total price */}
            <article className="cart-sum">
              <p className="cart-sum__title">Total</p>
              <div className="cart__dotted-line"></div>
              {discountApplied && <p className="cart-sum__discount">Kampanjrabatt: -40 kr</p>}
              <p className="cart-sum__amount">{getTotalPrice()} kr</p>
              <p className="cart-sum__condition">inkl. moms + drönarleverans</p>
            </article>
{/* Order submission button */}
            <button
              className="cart__btn"
              onClick={handleSubmitOrder}
              disabled={isSubmitting || cartItems.length === 0}>
              {isSubmitting ? "Skickar..." : "Skicka min order!"}
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default Cart;
