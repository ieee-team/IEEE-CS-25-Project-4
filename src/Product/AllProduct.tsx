import { CartProvider } from "react-use-cart";
import Categories from "./Categories";
import Popular from "./Popular"
import SubProduct from "./SubProduct"

import ProductList from "./ProductList"

import Top from "./Top"
function AllProduct() {
  return (
    <CartProvider>

<div className="container w-full bg-[#E2E4EB] mb-3">
      <SubProduct/>
      <Top/>
      <Popular/>
      <Categories/>
      <ProductList/>
    </div>
    </CartProvider>
    
  )
}

export default AllProduct
