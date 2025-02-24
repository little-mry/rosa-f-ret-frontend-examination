//luddeboi was here

// API BASE URL
const BASE_URL = "https://airbean-9pcyw.ondigitalocean.app/api";

// Interfaces
export interface MenuItem {
	id: string;
	title: string;
	desc: string;
	price: number;
}

export interface MenuResponse {
	menu: MenuItem[];
}

export interface OrderItem {
	name: string;
	price: number;
}

export interface OrderDetails {
	details: {
		order: OrderItem[];
	};
}

export interface OrderResponse {
	eta: number;
	orderNr: string;
}

// Fetches the coffee menu from the API
export async function getMenu(): Promise<MenuItem[]> {
	try {
		// Fetch menu data from API
		const response = await fetch(`${BASE_URL}/beans`);
		// Check if request was successful
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		// Parse response and return menu array
		const data: MenuResponse = await response.json();
		return data.menu;
	} catch (error) {
		console.error("Error fetching menu:", error);
		throw error;
	}
}
/**
 * Example
 * try {
 *   const menuItems = await getMenu();
 *   return (
 *     <div>
 *       {menuItems.map(item => (
 *         <div key={item.id}>
 *           <h3>{item.title} - {item.price}kr</h3>
 *           <p>{item.desc}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * } catch (error) {
 *   console.error('Failed to fetch menu:', error);
 *   return <div>Error loading menu</div>;
 * }
 */

export async function createOrder(orderItems: OrderItem[]): Promise<OrderResponse> {
	try {
		// Create the order data structure required by the API
		const orderData: OrderDetails = {
			details: {
				order: orderItems,
			},
		};

		// Send POST request to create the order
		const response = await fetch(`${BASE_URL}/beans/order`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(orderData),
		});

		// Check if request was successful
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Parse and return the order response
		const data: OrderResponse = await response.json();
		return data;
	} catch (error) {
		console.error("Error creating order:", error);
		throw error;
	}
}
/**
 * Example
 *   const orderItems = [
 *     { name: "Latte", price: 49 },
 *     { name: "Cortado", price: 39 }
 *   ];
 *
 *  const handleOrder = async () => {
 *     try {
 *       const response = await createOrder(orderItems);
 *       return (
 *         <div>
 *           <p>Order #{response.orderNr}</p>
 *           <p>Your order will arrive in {response.eta} minutes</p>
 *         </div>
 *       );
 *     } catch (error) {
 *       return <div>Failed to place order</div>;
 *     }
 *   };
 **/
