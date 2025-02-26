import { createContext, useState, useContext, ReactNode, useCallback } from "react";

export interface CartItemType {
	id: string;
	title: string;
	price: number;
	quantity: number;
}

interface CartContextType {
	cartItems: CartItemType[];
	addToCart: (id: string, title: string, price: number) => void;
	removeFromCart: (id: string) => void;
	increaseQuantity: (id: string) => void;
	decreaseQuantity: (id: string) => void;
	getTotalPrice: () => number;
	getTotalItems: () => number;
	clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItemType[]>([]);

	const addToCart = useCallback((id: string, title: string, price: number) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === id);

			if (existingItem) {
				return prevItems.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
				);
			} else {
				return [...prevItems, { id, title, price, quantity: 1 }];
			}
		});
	}, []);

	const removeFromCart = (id: string) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	};

	const increaseQuantity = (id: string) => {
		setCartItems(
			cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
		);
	};

	const decreaseQuantity = (id: string) => {
		const item = cartItems.find((item) => item.id === id);

		if (item && item.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.id !== id));
		} else {
			setCartItems(
				cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)),
			);
		}
	};

	const getTotalPrice = () => {
		const normalTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

		const hasCoffee = cartItems.some((item) => item.title === "Bryggkaffe" && item.quantity > 0);
		const hasPastry = cartItems.some(
			(item) => item.title === "Gustav Adolfsbakelse" && item.quantity > 0,
		);

		if (hasCoffee && hasPastry) {
			return normalTotal - 40;
		}

		return normalTotal;
	};

	const getTotalItems = () => {
		return cartItems.reduce((total, item) => total + item.quantity, 0);
	};
	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				increaseQuantity,
				decreaseQuantity,
				getTotalPrice,
				getTotalItems,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
