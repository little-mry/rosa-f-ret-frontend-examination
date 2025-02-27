import { Outlet } from "react-router-dom"
import { CartProvider } from "./Components/CartContext"

function App() {
  

  return (
    <CartProvider>
    <Outlet />
    </CartProvider>
  )
}

export default App
