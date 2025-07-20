
import { Link } from "react-router-dom";

function AllHome() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Home</h1>
      <Link to="/product">top</Link>
      <Link to="/cart">cart</Link>
      <Link to="/wishlist">wishlist</Link>
    </>
  )
}

export default AllHome
