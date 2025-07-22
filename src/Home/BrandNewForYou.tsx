import prod17 from "../assets/Home_Imgs/prod17.png";
import prod18 from "../assets/Home_Imgs/prod18.png";
import prod19 from "../assets/Home_Imgs/prod19.png";
import prod20 from "../assets/Home_Imgs/prod20.png";

const products = [
  {
    img: prod17,
    title: "Zumac Steel Computer Case",
    description: "And an option to upgrade every three years",
  },
  {
    img: prod18,
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
  },
  {
    img: prod19,
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
  },
  {
    img: prod20,
    title: "iPad Pro Mini 6 - Powerful I in hand",
    description:
      "From $19.99/month for 36 months. $280.35 final payment due in month 37",
  },
];

const BrandNewForYou = () => {
  return (
    <section className="py-10 px-10 my-5 bg-white rounded-2xl">
      <h2 className="text-xl font-bold mb-6">BRAND NEW FOR YOU</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="!rounded-xl overflow-hidden shadow-sm">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-semibold mb-1 leading-snug">
                {product.title}
              </p>
              <p className="text-xs text-gray-500 mb-3 leading-tight">
                {product.description}
              </p>
              <button className="text-green-600 border !border-green-600 px-4 py-1 rounded-full !text-[10px] font-medium hover:bg-green-50">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandNewForYou;
