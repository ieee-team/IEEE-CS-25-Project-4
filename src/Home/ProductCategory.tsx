import banner1 from "../assets/Home_Imgs/banner1.png";
import banner2 from "../assets/Home_Imgs/banner2.png";
import banner3 from "../assets/Home_Imgs/banner3.png";
import prod45 from "../assets/Home_Imgs/prod45.png";
import prod46 from "../assets/Home_Imgs/prod46.png";
import prod47 from "../assets/Home_Imgs/prod47.png";
import prod48 from "../assets/Home_Imgs/prod48.png";
import prod49 from "../assets/Home_Imgs/prod49.png";
import prod50 from "../assets/Home_Imgs/prod50.png";
import prod51 from "../assets/Home_Imgs/prod51.png";
import prod52 from "../assets/Home_Imgs/prod52.png";
import prod53 from "../assets/Home_Imgs/prod53.png";
import prod54 from "../assets/Home_Imgs/prod54.png";
import prod55 from "../assets/Home_Imgs/prod55.png";
import prod56 from "../assets/Home_Imgs/prod56.png";

type Product = {
  image: string;
  title: string;
};

type Category = {
  banner: string;
  title: string;
  products: Product[];
  bg: string;
};

const categories: Category[] = [
  {
    banner: banner1,
    title: "Audio",
    bg: "bg-[#EAF4FF]",
    products: [
      { image: prod45, title: "Speaker" },
      { image: prod46, title: "Camera" },
      { image: prod47, title: "Earbuds" },
      { image: prod48, title: "Mic" },
    ],
  },
  {
    banner: banner2,
    title: "Gaming",
    bg: "bg-[#FFF0F0]",
    products: [
      { image: prod49, title: "Monitor" },
      { image: prod50, title: "Chair" },
      { image: prod51, title: "Controller" },
      { image: prod52, title: "Keyboard" },
    ],
  },
  {
    banner: banner3,
    title: "Office",
    bg: "bg-[#F0FFF3]",
    products: [
      { image: prod53, title: "Printer" },
      { image: prod54, title: "Router" },
      { image: prod55, title: "CCTV" },
      { image: prod56, title: "Projector" },
    ],
  },
];

const ProductCategory = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12 lg:px-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden ${category.bg} shadow-lg`}
          >
            <div className="w-full h-40 md:h-48 lg:h-56">
              <img
                src={category.banner}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">{category.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {category.products.map((product, idx) => (
                  <div key={idx} className="text-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-30 h-30 mx-auto mb-2 object-contain"
                    />
                    <p className="text-sm font-medium">{product.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
