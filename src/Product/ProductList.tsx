import { products } from '../Data/productsData';
import brand1 from '../assets/brand1.png.png';
import addimg from "../assets/addimg.png.png"
import { useState } from "react";
import Filter from './Filter';
import { useCart } from "react-use-cart";


const ProductList = () => {
  const { addItem } = useCart();
  
  const getInitialProductList = () => {
    const wishlistRaw = localStorage.getItem('wishlistProducts');
    let wishlistIds: number[] = [];
    if (wishlistRaw) {
      try {
        const wishlistArr = JSON.parse(wishlistRaw);
        wishlistIds = wishlistArr.map((p: any) => p.id);
      } catch {}
    }
    return products.map(p => ({ ...p, inWishlist: wishlistIds.includes(p.id) }));
  };
  const [productList, setProductList] = useState<any[]>(getInitialProductList());
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterPrice, setFilterPrice] = useState<string>("all");

  
  const toggleLike = (prod: any) => {
    setProductList(prevList => {
      const updatedList = prevList.map(p =>
        p.id === prod.id ? { ...p, inWishlist: !p.inWishlist } : p
      );
     
      const wishlistProducts = updatedList.filter(p => p.inWishlist);
      localStorage.setItem('wishlistProducts', JSON.stringify(wishlistProducts));
      return updatedList;
    });
  };


  let filteredProducts = productList;
  if (filterCategory !== "all") {
    filteredProducts = filteredProducts.filter(p => p.category === filterCategory);
  }
  if (filterPrice !== "all") {
    if (filterPrice === "low") {
      filteredProducts = filteredProducts.slice().sort((a, b) => (a.price ?? a.priceAfter ?? 0) - (b.price ?? b.priceAfter ?? 0));
    } else if (filterPrice === "high") {
      filteredProducts = filteredProducts.slice().sort((a, b) => (b.price ?? b.priceAfter ?? 0) - (a.price ?? a.priceAfter ?? 0));
    }
  }


  return (
    <div className="container mt-4 bg-white py-3">
      <div className="row">
        
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="bg-[#EEEFF6] rounded-lg p-4 w-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[18px] font-bold text-black">Categories</span>
              <span className="text-xs text-gray-500 cursor-pointer">Reset All</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <span className="bg-white mb-2 rounded px-3 py-2 text-xs text-gray-700">Min: $45.00 </span>
              <span className="bg-white mb-2 rounded px-3 py-2 text-xs text-gray-700">10.9 inch </span>
              <span className="bg-white mb-2 rounded px-3 py-2 text-xs text-gray-700">Color: Red </span>
              <span className="bg-white mb-2 rounded px-3 py-2 text-xs text-gray-700">128GB </span>
            </div>
            {/* By Brands */}
            <div className="mb-3 text-[15px] font-bold text-black">By Brands</div>
            <input type="text" className="w-full border border-gray-200 outline-0 bg-white rounded-xl px-2 py-1 mb-4 text-sm" />
            <div className="flex flex-col gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <label key={i} className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1 mb-2">
                    <input type="checkbox" className="accent-gray-400" />
                    <img src={brand1} alt="brand" className="object-contain px-2" />
                    <span className="text-gray-400">(12)</span>
                  </div>
                </label>
              ))}
            </div>
            <hr className="my-3 border-gray-300 w-[90%] mx-auto" />
            {/* By Price */}
            <div className="mb-3 text-[15px] font-bold text-black">By Price</div>
            <div className="relative flex items-center mb-4">
              <span className="absolute left-2 -ml-2 w-3 h-3 bg-[#1ABA1A] rounded-full"></span>
              <div className="flex-1 mx-2 h-1 rounded bg-[#1ABA1A]"></div>
              <span className="absolute right-2 -mr-2 w-3 h-3 bg-[#1ABA1A] rounded-full"></span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input type="number" className="border border-gray-400 rounded-xl px-2 py-1 w-20 text-xs bg-white" placeholder="$0" />
              <span className="text-gray-500 font-bold text-[18px]">-</span>
              <input type="number" className="border border-gray-400 rounded-xl px-2 py-1 w-20 text-xs bg-white" placeholder="$1000" />
              <span className="bg-[#1ABA1A] text-white mx-5 border-0 rounded px-2 py-1 text-xs">Go</span>
            </div>
            <hr className="my-3 border-gray-300 w-[90%] mx-auto" />
            {/* By Rating */}
            <div className="mb-3 text-[15px] font-bold text-black">By Rating</div>
            <div className="flex flex-col gap-2 mb-2">
              {[5,4,3,2].map((n) => (
                <label key={n} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-gray-400" />
                  <span className="text-gray-400 mx-12">({n})</span>
                </label>
              ))}
            </div>
            <hr className="my-3 border-gray-300 w-[90%] mx-auto" />
            {/* By Screen Size */}
            <div className="mb-3 text-[15px] font-bold text-black">By Screen Size</div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <span className="bg-white mb-2 rounded px-3 py-2 text-xs text-gray-400">7” & Under</span>
              <span className="bg-white mb-2 rounded px-3 py-2 text-xs text-gray-400">7.1” - 8.9”</span>
              <span className="bg-white mb-2 rounded px-3 py-2 text-xs text-gray-400">9” - 10.9”</span>
              <span className="bg-white mb-2 rounded px-3 py-2 text-xs text-gray-400">11” & Greater</span>
            </div>
            <hr className="my-3 border-gray-300 w-[90%] mx-auto" />
            {/* By Color */}
            <div className="mb-3 text-[15px] font-bold text-black">By Color</div>
            <div className="mb-4">
              <div className="flex gap-2 mb-2">
                {['#A42A2A','#fff','#439ABB','#0f0','#00f'].map((color, i) => (
                  <span key={i} className="w-7 h-7 mb-2 rounded-2 border-none" style={{background: color}}></span>
                ))}
              </div>
              <div className="flex gap-2">
                {['#ff0','#0ff','#f0f'].map((color, i) => (
                  <span key={i+5} className="w-7 h-7 rounded-2 border-none" style={{background: color}}></span>
                ))}
              </div>
            </div>
            <hr className="my-3 border-gray-300 w-[90%] mx-auto" />
            {/* By Memory */}
            <div className="mb-3 text-[15px] font-bold text-black">By Memory</div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[128,256,512,1024,32,64,16,8].map((mem) => (
                <label key={mem} className="flex items-center gap-2 text-xs text-gray-400">
                  <input type="checkbox" className="accent-gray-400 mx-2" />
                  {mem}GB
                    <span className="text-gray-400 mx-1">(12)</span>
                </label>
              ))}
            </div>
            <hr className="my-3 border-gray-300 w-[90%] mx-auto" />
            {/* By Conditions */}
            <div className="mb-3 text-[15px] font-bold text-black">By Conditions</div>
            <div className="flex flex-col gap-2 mb-4">
              {["New", "Like New", "Open Box"].map((cond, i) => (
                <label key={cond} className="flex items-center gap-2 text-xs text-gray-400">
                  <input type="checkbox" className="accent-gray-400 mx-2" />
                  {cond} <span className="text-gray-400 mx-1">(12)</span>
                </label>
              ))}
            </div>
            <hr className="my-3 border-gray-300 w-[90%] mx-auto pb-8" />
          </div>
          
          <div 
            className="w-[98%] mt-3 rounded-2xl relative flex items-stretch"
            style={{
              backgroundImage: `url(${addimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '220px',
              height: '100%',
            }}
          >
            <div className="flex flex-col p-5 h-full w-full items-start mt-4 ">
              <span className="text-white text-lg font-bold  mb-3 text-left">OKODo hero 11+ <br/> 5K wireless</span>
              <span className="text-gray-400 text-sm font-semibold mb-2 text-left">from</span>
              <span className="text-[#1ABA1A] text-xl font-bold text-left">$169</span>
            </div>
          </div>
        </div>
        {/* Products */}
        <div className="col-md-8">
          {/* Filter select */}
          <Filter
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            filterPrice={filterPrice}
            setFilterPrice={setFilterPrice}
          />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {filteredProducts.map((prod) => {
              const shippingArray =
                Array.isArray(prod.shipping)
                  ? prod.shipping
                  : typeof prod.shipping === 'number'
                  ? [prod.shipping.toString()]
                  : [];

              return (
                <div key={prod.id} className="col">
                  <div className="relative w-full max-w-xs mx-auto">
                    {/* Tags */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                      {prod.save ? (
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                          {prod.save}
                          <br />
                          ${prod.amountSave}.00
                        </span>
                      ) : prod.new ? (
                        <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
                          {prod.new}
                        </span>
                      ) : null}
                    </div>

                    {/* Wishlist Icon */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
                      <button
                        className="bg-[#99999973] w-6 h-6 rounded-full flex items-center justify-center border"
                        onClick={() => toggleLike(prod)}
                      >
                        <i
                          className={`bi ${
                            prod.inWishlist
                              ? 'bi-heart-fill text-danger'
                              : 'bi-heart text-dark'
                          } text-sm`}
                        ></i>
                      </button>
                    </div>

                  {/* Product Image */}
                  <img
                    src={prod.image[0]}
                    alt={prod.title}
                    className="w-full h-46 object-contain bg-white"
                  />

                  {/* Info */}
                  <div className="p-3">
                    <p className="text-xs text-gray-600 mt-2 text-center">
                      {prod.availablePieces !== undefined && `(${prod.availablePieces})`}
                    </p>
                    <p className="text-sm font-bold text-gray-800">{prod.title}</p>

                    {/* Prices */}
                    <div className="my-2 flex items-center py-1">
                      {prod.price && (
                        <span className="text-md font-bold text-black">${prod.price}</span>
                      )}
                      {prod.priceBefore && prod.priceAfter && (
                        <>
                          <span className="text-xl font-bold text-red-600 mx-2">${prod.priceAfter}</span>
                          <span className="text-sm text-gray-500 line-through">${prod.priceBefore}</span>
                        </>
                      )}
                      {prod.priceSec && (
                        <span className="text-md font-semibold text-black">${prod.priceSec}</span>
                      )}
                    </div>

                    {/* Shipping info */}
                    <div>
                      {shippingArray.includes("FREE SHIPPING") && (
                        <span className="bg-[#1aba1a15] text-[#1ABA1A] text-xs font-semibold px-2 py-1 my-2 rounded">Free Shipping</span>
                      )}
                      {shippingArray.includes("free gift") && (
                        <span className="bg-[#f1352b1d] text-[#F1352B] text-xs font-semibold px-2 py-1 my-2 rounded">Free Gift</span>
                      )}
                      {shippingArray.includes("free shipping, free gift") && (
                        <>
                          <span className="bg-[#1aba1a15] text-[#1ABA1A] text-xs font-semibold px-2 py-1 rounded mr-1 my-2">Free Shipping</span>
                          <span className="bg-[#f1352b1d] text-[#F1352B] text-xs font-semibold px-2 py-1 rounded my-2">Free Gift</span>
                        </>
                      )}
                    </div>

                    {/* Stock info */}
                    <div>
                      <span className="inline-flex items-center justify-center bg-green-600 rounded-full w-4 h-4 mr-2 my-2">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {prod.inStock}
                    </div>

                    {/* Add to cart button */}
                    <div key={prod.id}>
                      <button className='btn btn-success' onClick={() => {
                        const safePrice = prod.price ?? prod.priceAfter ?? prod.priceSec ?? 0;
                        addItem({
                          ...prod,
                          price: safePrice,
                          id: prod.id.toString(),
                        });
                      }}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-6 mb-2">
            <span className="border border-gray-200 text-white bg-[#1ABA1A] px-3 py-1 rounded font-bold">1</span>
            {[2,3,4].map((n) => (
              <span key={n} className="border border-gray-200 text-gray-600 px-3 py-1 rounded cursor-pointer text-[14px]">{n}</span>
            ))}
            <span className="border border-gray-200 text-gray-600 px-3 py-1 rounded text-[14px]">...</span>
            <span className="border border-gray-200 text-gray-600 px-3 py-1 rounded cursor-pointer text-[14px]">20</span>
            <span className="border border-gray-200 text-gray-600 px-3 py-1 rounded cursor-pointer text-[14px]">next</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
