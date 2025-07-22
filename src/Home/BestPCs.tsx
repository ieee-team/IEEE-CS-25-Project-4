import prod40 from "../assets/Home_Imgs/prod40.png";
import prod41 from "../assets/Home_Imgs/prod41.png";
import prod42 from "../assets/Home_Imgs/prod42.png";
import prod43 from "../assets/Home_Imgs/prod43.png";
import prod44 from "../assets/Home_Imgs/prod44.png";
import prod41black from "../assets/Home_Imgs/prod41black.png";

const products = [
  {
    id: 1,
    title: "Pineapple Macbook Pro2022 M1 / 512 GB",
    price: "$579.00",
    oldPrice: null,
    shipping: "Free",
    stock: "In stock",
    status: "in-stock",
    image: prod40,
  },
  {
    id: 2,
    title: "C&O Bluetooth Speaker",
    price: "$979.00",
    oldPrice: null,
    shipping: "Free",
    stock: "In stock",
    status: "in-stock",
    image: prod41,
    variations: [prod41, prod41black], 
  },
  {
    id: 3,
    title: "Gigaby Custome Case, i7/16GB / SSD 256GB",
    price: "$1,259.00",
    oldPrice: null,
    shipping: "Free",
    gift: true,
    stock: "In stock",
    status: "in-stock",
    image: prod42,
  },
  {
    id: 4,
    title: "BEOS PC Gaming Case",
    price: "$1,239.00",
    save: "$59",
    oldPrice: "$1,619.00",
    shipping: "$2.98",
    stock: "Contact",
    status: "contact",
    image: prod43,
  },
  {
    id: 5,
    title: "aMoc All-in-one Computer M1",
    price: "$1,729.00",
    shipping: "Free",
    stock: "Contact",
    status: "contact",
    image: prod44,
  },
];

const BestPCs = () => {
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

export default BestPCs;
