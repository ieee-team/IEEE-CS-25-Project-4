import prod28 from "../assets/Home_Imgs/prod28.png";
import prod29 from "../assets/Home_Imgs/prod29.png";
import prod30 from "../assets/Home_Imgs/prod30.png";
import prod31 from "../assets/Home_Imgs/prod31.png";
import prod32 from "../assets/Home_Imgs/prod32.png";
import product2 from "../assets/Home_Imgs/product2.png";

const products = [
  {
    id: 1,
    title: "SROK Smart Phone 128GB,Oled Retina",
    price: "$597.00",
    oldPrice: "859.00",
    save: "$199.00",
    shipping: "Free",
    gift: true,
    stock: "In stock",
    status: "in-stock",
    image: prod28,
  },
  {
    id: 2,
    title: "aPod Pro Tablet 2023 LTE +Wifi, GPS Cellular 12.9 Inch,512GB",
    price: "$979.00 -$1,259.00",
    oldPrice: null,
    save: "$199.00",
    shipping: "Free",
    stock: "In stock",
    status: "in-stock",
    image: prod29,
  },
  {
    id: 3,
    title: "OPod Pro 12.9 Inch M1 2023,64GB + Wifi, GPS",
    price: "$659.00",
    oldPrice: null,
    shipping: "Free",
    gift: true,
    stock: "In stock",
    status: "in-stock",
    image: prod30,
    variations: [prod30, prod28, prod31],
  },
  {
    id: 4,
    title:"Xiamoi Redmi Note 5, 64GB",
    price: "$1,239.00",
    oldPrice: "$1,619.00",
    shipping: "Free",
    stock: "Contact",
    status: "contact",
    image: prod31,
  },
  {
    id: 5,
    title: "Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver",
    price: "$9.00",
    save: "$1,729.00",
    shipping: "Free",
    stock: "Contact",
    status: "contact",
    image: prod32,
    variations: [prod32, prod28, product2], 

  },
];

const TopTablets = () => {
  return (
    <section className="bg-white  px-10 py-6 ">
      <div className="flex justify-between items-center mb-6">
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

export default TopTablets;
