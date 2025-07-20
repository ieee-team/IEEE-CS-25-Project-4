
import { products } from '../Data/productsData';


const staticPhoneTypes = [
  "All","iPhone", "Samsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Realme", "Nokia", "Sony", "LG",
  "HTC", "Motorola", "OnePlus", "Google Pixel", "Lenovo", "Asus", "Honor", "Infinix"
];

function Categories() {
  const firstFour = products.slice(0, 4);

  return (
    <div className="container my-4 bg-white py-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-4 px-5">
          <div className="bg-[#EEEFF6] rounded  py-3 px-5  ">
            <p className="mb-3 font-bold text-[18px] text-black uppercase">Categories</p>
            <button className="mb-3 ml-5 py-2 px-3 rounded-3xl bg-white font-bold text-[12px] text-black"> All Categories</button>
            <p className="mb-3 font-bold text-[14px] text-black ">Cell Phones & Tablets</p>
            <ul className="list-group">
              {staticPhoneTypes.map((type, idx) => (
                <li key={idx} className="text-[14px] text-black">{type}</li>
              ))}
            </ul>
          </div>
        </div>
       
        <div className="col-md-8 position-relative">
          <div className="row">
            <p className="mb-3 font-bold text-[18px] text-black ">Best seller in this category</p>
          </div>
          <p
            className="absolute left-[-20px] top-1/3 -translate-y-1/2 z-20 bg-gray-200 text-black border-none rounded-xl w-10 h-10  text-xs flex items-center justify-center shadow hover:bg-gray-300 transition"
           
          >
            prev
          </p>
          <p
            className="absolute right-[0px] top-1/3 -translate-y-1/2 z-20 bg-gray-200 text-black border-none rounded-xl w-10 h-10  text-xs flex items-center justify-center shadow hover:bg-gray-300 transition"
            
          >
            next
          </p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {firstFour.map((prod) => (
              <div key={prod.id} className="col">
                <div className="relative w-full max-w-xs mx-auto bg-white rounded " style={{height: '100%'}}>
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
                  {/* Product Image */}
                  <img
                    src={prod.image[0]}
                    alt={prod.title}
                    className="w-full h-46 object-contain bg-white"
                    style={{height: '180px'}}
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
                      {Array.isArray(prod.shipping) && prod.shipping.includes("FREE SHIPPING") && (
                        <span className="bg-[#1aba1a15] text-[#1ABA1A] text-xs font-semibold px-2 py-1 my-2 rounded">Free Shipping</span>
                      )}
                      {Array.isArray(prod.shipping) && prod.shipping.includes("free gift") && (
                        <span className="bg-[#f1352b1d] text-[#F1352B] text-xs font-semibold px-2 py-1 my-2 rounded">Free Gift</span>
                      )}
                      {Array.isArray(prod.shipping) && prod.shipping.includes("free shipping, free gift") && (
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
