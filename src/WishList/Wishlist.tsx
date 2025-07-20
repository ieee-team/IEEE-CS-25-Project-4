
interface WishlistProps {
  wishlistProducts?: any[];
  setWishlistProducts?: React.Dispatch<React.SetStateAction<any[]>>;
}


import { useEffect, useState } from "react";

function Wishlist({ wishlistProducts: wishlistProductsProp = [], setWishlistProducts }: WishlistProps) {
  const [localWishlist, setLocalWishlist] = useState<any[]>([]);

  
  useEffect(() => {
    if (!wishlistProductsProp.length) {
      const stored = localStorage.getItem("wishlistProducts");
      if (stored) {
        setLocalWishlist(JSON.parse(stored));
      }
    }
  }, [wishlistProductsProp]);

  
  useEffect(() => {
    if (wishlistProductsProp.length) {
      localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProductsProp));
      setLocalWishlist(wishlistProductsProp);
    }
  }, [wishlistProductsProp]);

  const removeFromWishlist = (id: string) => {
    if (setWishlistProducts) {
      setWishlistProducts((prev) => prev.filter((p) => p.id !== id));
    } else {
      const updated = localWishlist.filter((p) => p.id !== id);
      setLocalWishlist(updated);
      localStorage.setItem("wishlistProducts", JSON.stringify(updated));
    }
  };

  const wishlistToShow = wishlistProductsProp.length ? wishlistProductsProp : localWishlist;

  return (
    <div className="container mt-4">
      <h2 className="text-xl font-bold mb-4">Wishlist</h2>
      {wishlistToShow.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          
          <tbody>
            {wishlistToShow.map((prod) => (
              <tr key={prod.id}  className="border-b hover:bg-[#f5f2f2]">
                <td className="py-2 px-4 border-b">
                  <img src={prod.image[0]} alt={prod.title} className="w-16 h-16 object-contain" />
                </td>
                <td className="py-2 px-4 border-b">{prod.title}</td>
                <td> <i className=  'bi-heart text-danger'></i></td>
                <td className="py-2 px-4 border-b">
                  <button className="text-red-600" onClick={() => removeFromWishlist(prod.id)}>
                   x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Wishlist;
