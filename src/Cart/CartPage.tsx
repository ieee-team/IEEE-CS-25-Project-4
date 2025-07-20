import { useCart } from "react-use-cart";

function CartPage() {
  const {
    isEmpty,
    totalUniqueItems,
    
    cartTotal,
    items,
    updateItemQuantity,
   
  } = useCart();

  if (isEmpty) return <p className="text-center text-gray-500 py-10">Your cart is empty</p>;

  return (
    <div className="w-[95%] mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Cart <span className="text-[#1ABA1A]">({totalUniqueItems})</span></h1>
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Table section */}
        <div className="flex-1 overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-md">
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b hover:bg-[#f9f9f9]">
                  {/* Product Image & Price /new tag */}
                  <td className="p-3 align-top">
                    <div className="relative flex flex-col items-center">
                      <div className="absolute top-0 left-1 flex flex-col gap-1 z-10">
                        {item.save ? (
                          <span className="bg-green-600 text-white text-[12px] px-2 rounded">
                            {item.save}
                            <br />
                            ${item.amountSave}
                          </span>
                        ) : item.new ? (
                          <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
                            {item.new}
                          </span>
                        ) : null}
                      </div>
                      <img src={item.image?.[0] || item.image} alt={item.title} className="w-30 h-30 object-contain rounded mb-2 border" />
                    </div>
                  </td>
                  {/* Details: save/new, availablePieces, title */}
                  <td className="p-3 align-top min-w-[180px]">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center"></div>
                      <div className="text-xs text-gray-500"> <span className="font-bold text-gray-500">{item.availablePieces}</span></div>
                      <div className="font-bold text-gray-800 text-sm mt-1">{item.title}</div>
                      <div className="text-lg font-bold text-black mt-1">${item.price}</div>
                      <div className="inline-flex items-center gap-2 border border-gray-200 rounded-xl px-2 py-1 w-fit">
                        <button
                          className="text-black px-2 py-0.5 rounded"
                          onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                        >-</button>
                        <span className="text-[16px] px-2">{item.quantity}</span>
                        <button
                          className="text-black px-2 py-0.5 rounded"
                          onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                        >+</button>
                      </div>

                      {/* Shipping info */}
                      <div>
                        {Array.isArray(item.shipping) && item.shipping.includes("FREE SHIPPING") && (
                          <span className="bg-[#1aba1a15] text-[#1ABA1A] text-xs font-semibold px-2 py-1 my-2 rounded">Free Shipping</span>
                        )}
                        {Array.isArray(item.shipping) && item.shipping.includes("free gift") && (
                          <span className="bg-[#f1352b1d] text-[#F1352B] text-xs font-semibold px-2 py-1 my-2 rounded">Free Gift</span>
                        )}
                        {Array.isArray(item.shipping) && item.shipping.includes("free shipping, free gift") && (
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
                        {item.inStock}
                      </div>
                    </div>
                  </td>
                  
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* Actions */}
                  <td className="p-3 align-top text-center">
                  </td>
                  {/* Circles */}
                  <td className="p-3 align-top text-center">
                    <div className="flex flex-row items-center gap-2">
                      <span className="inline-block w-4 h-4 rounded-full bg-[#99999973]"></span>
                      <span className="inline-block w-4 h-4 rounded-full bg-[#f1352b1d]"></span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Summary section */}
        <div className="w-full lg:w-[350px] min-w-[260px] max-w-[400px]">
          <div className="bg-white rounded-xl p-4 border-1 border-green-500">
            <p className="pt-2 text-lg font-bold mb-4 text-black">Order Summary</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="font-semibold text-gray-400">Sub Total</span>
                <span className="text-black">${Math.round(cartTotal)}</span>
              </div>
              <hr className="border-gray-300 my-1" />
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="font-semibold text-gray-400">Shipping estimate</span>
                <span className="text-black">$20</span>
              </div>
              <hr className="border-gray-300 my-1" />
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="font-semibold text-gray-400">Tax estimate</span>
                <span className="text-black">$137</span>
              </div>
              <hr className="border-gray-300 my-1" />
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="font-semibold uppercase">Order total: </span>
                <span className="text-black">${Math.round(cartTotal) + 20 + 137}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CartPage;