import product1 from "../assets/Home_Imgs/product1.png";
import product2 from "../assets/Home_Imgs/product2.png";
import product3 from "../assets/Home_Imgs/product3.png";
import product4 from "../assets/Home_Imgs/product4.png";
import product5 from "../assets/Home_Imgs/product5.png";
import blackheadphone from "../assets/Home_Imgs/blackheadphone.jpg";

const products = [
  {
    id: 1,
    title: "BOSO 2 Wireless On Ear Headphone",
    price: "$359.00",
    oldPrice: null,
    shipping: "Free",
    gift: true,
    stock: "In stock",
    status: "in-stock",
    image: product1,
    variations: [product1, blackheadphone], 
  },
  {
    id: 2,
    title: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "$569.00",
    oldPrice: "$759.00",
    save: "$199.00",
    shipping: "Free",
    stock: "In stock",
    status: "in-stock",
    image: product2,
  },
  {
    id: 3,
    title: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
    price: "$1,729.00",
    oldPrice: "$2,119.00",
    save: "$59.00",
    shipping: "Free",
    stock: "Out of stock",
    status: "out-of-stock",
    image: product3,
  },
  {
    id: 4,
    title:
      "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: "$979.00 – $1,259.00",
    shipping: "$2.98",
    stock: "PRE - ORDER",
    status: "pre-order",
    image: product4,
  },
  {
    id: 5,
    title: "iSmart 24V Charger",
    price: "$9.00",
    oldPrice: "$12.00",
    save: "$3.00",
    shipping: "$3.98",
    stock: "Contact",
    status: "contact",
    image: product5,
  },
];

const BestSellerSection = () => {
  return (
    <section className="bg-white  px-10 py-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6 font-semibold text-gray-700">
          <span className="text-black border-b-2 border-black">
            BEST SELLER
          </span>
          <span>NEW IN</span>
          <span>POPULAR</span>
        </div>
        <button className="text-sm text-gray-500 hover:underline">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-lg text-left">
            {p.save && (
              <div className="relative bg-green-500 text-white text-xs font-bold px-2 py-1 rounded top-0 left-2 w-[50%] p-2">
                SAVE {p.save}
              </div>
            )}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-36 object-contain mx-auto mb-2"
            />

            <p className="text-gray-500 text-xs mb-1">(152)</p>
            <p className="text-sm font-semibold mb-1">{p.title}</p>
            <div className="flex items-left gap-2 mb-2">
              <span className="text-red-600 font-bold">{p.price}</span>
              {p.oldPrice && (
                <del className="text-gray-400 text-sm">{p.oldPrice}</del>
              )}
            </div>

            <div className="flex  gap-2 flex-wrap mb-2">
              {p.shipping === "Free" ? (
                <span className="text-green-600 text-xs border border-green-600 px-2 py-0.5 rounded">
                  FREE SHIPPING
                </span>
              ) : (
                <span className="text-gray-600 text-xs border border-gray-400 px-2 py-0.5 rounded">
                  {p.shipping} SHIPPING
                </span>
              )}
              {p.gift && (
                <span className="text-red-500 text-xs border border-red-500 px-2 py-0.5 rounded">
                  FREE GIFT
                </span>
              )}
            </div>

            <p
              className={`text-xs font-medium ${
                p.status === "in-stock"
                  ? "text-green-600"
                  : p.status === "out-of-stock"
                  ? "text-red-500"
                  : "text-gray-600"
              }`}
            >
              {p.stock}
            </p>

            {/* Optional product variations preview */}
            {p.variations && (
              <div className="flex  gap-2 mt-2">
                {p.variations.map((v, idx) => (
                  <img
                    key={idx}
                    src={v}
                    alt="variation"
                    className="w-6 h-6 object-contain border rounded"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;
