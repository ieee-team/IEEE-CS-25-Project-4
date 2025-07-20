import CartPage from "./CartPage"
import {CartProvider } from "react-use-cart";
import SubCart from "./SubCart";
function AllCart() {
  return (
    <CartProvider>
      <div>
        <SubCart/>
        <CartPage/>
      </div>
    </CartProvider>
  )
}

export default AllCart
