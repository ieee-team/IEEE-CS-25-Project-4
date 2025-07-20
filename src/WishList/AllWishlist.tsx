import SubWishlist from "./SubWishlist";
import Wishlist from "./Wishlist";

interface AllWishlistProps {
  wishlistProducts: any[];
  setWishlistProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

function AllWishlist({ wishlistProducts, setWishlistProducts }: AllWishlistProps) {
  return (
    <div>
      <SubWishlist/>
      <Wishlist wishlistProducts={wishlistProducts} setWishlistProducts={setWishlistProducts} />
    </div>
  );
}

export default AllWishlist;
