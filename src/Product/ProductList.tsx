import { products } from '../Data/productsData';

function ProductList() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((prod) => {
          const shippingArray =
            Array.isArray(prod.shipping)
              ? prod.shipping
              : typeof prod.shipping === 'number'
              ? [prod.shipping.toString()]
              : [];

          return (
            <div key={prod.id} className="col">
              <div className="relative w-full max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 border">
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

                  
                  {shippingArray.includes("express") && (
                    <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">Express</span>
                  )}
                </div>

                {/* Product Image */}
                <img
                  src={prod.image[0]}
                  alt={prod.title}
                  className="w-full h-48 object-contain bg-white"
                />

                {/* Info */}
                <div className="p-3">
                     {/* Availability */}
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    {prod.availablePieces !== undefined && `(${prod.availablePieces})`}
                 
                  </p>
                  {/* Title */}
                  <h2 className="text-sm font-bold text-gray-800">{prod.title}</h2>

                  

                  {/* Prices */}
                  <div className="mt-2 flex items-center gap-2">
                    {prod.price && (
                      <span className="text-md font-bold text-black">${prod.price} -</span>
                    )}
                    {prod.priceBefore && prod.priceAfter && (
                      <>
                       <span className="text-md font-bold text-red-600">${prod.priceAfter}</span>
                        <span className="text-sm text-gray-500 line-through">${prod.priceBefore}</span>
                       
                      </>
                    )}
                    {prod.priceSec && (
                      <span className="text-md font-semibold text-black">${prod.priceSec}</span>
                    )}
                       
                  </div>
                  
                   <div>
                  {shippingArray.includes("FREE SHIPPING") && (
                    <span className="bg-[#1aba1a15] text-[#1ABA1A] text-xs font-semibold px-2 py-1 rounded">Free Shipping</span>
                  )}
                  {shippingArray.includes("free gift") && (
                    <span className="bg-[#f1352b1d] text-[#F1352B] text-xs font-semibold px-2 py-1 rounded">Free Gift</span>
                  )}
                 {shippingArray.includes("free shipping, free gift") && (
  <>
    <span className="bg-[#1aba1a15] text-[#1ABA1A] text-xs font-semibold px-2 py-1 rounded mr-1">Free Shipping</span>
    <span className="bg-[#f1352b1d] text-[#F1352B] text-xs font-semibold px-2 py-1 rounded">Free Gift</span>
  </>
)}

                </div>
                
                <div>
                    <span className="inline-flex items-center justify-center bg-green-600 rounded-full w-4 h-4 mr-2">
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
                 
                    
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
