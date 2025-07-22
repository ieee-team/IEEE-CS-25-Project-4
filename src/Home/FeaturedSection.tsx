
import brand1 from "../assets/Home_Imgs/brand1.png";
import brand2 from "../assets/Home_Imgs/brand2.png";
import brand3 from "../assets/Home_Imgs/brand3.png";
import brand4 from "../assets/Home_Imgs/brand4.png";
import brand5 from "../assets/Home_Imgs/brand5.png";
import brand6 from "../assets/Home_Imgs/brand6.png";
import brand7 from "../assets/Home_Imgs/brand7.png";
import brand8 from "../assets/Home_Imgs/brand8.png";
import brand9 from "../assets/Home_Imgs/brand9.png";
import brand10 from "../assets/Home_Imgs/brand10.png";



import laptop from "../assets/Home_Imgs/laptop.png";
import pc from "../assets/Home_Imgs/PC.png";
import headphones from "../assets/Home_Imgs/Headphones.png";
import monitor from "../assets/Home_Imgs/Monitors.png";

const FeaturedSection = () => {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
  ];

  const categories = [
    { name: "Laptops", img: laptop },
    { name: "PC Gaming", img: pc },
    { name: "Headphones", img: headphones },
    { name: "Monitors", img: monitor },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-6 rounded-xl shadow-sm">
      {/* Featured Brands */}
      <div className="bg-white p-4 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">FEATURED BRANDS</h2>
          <button className="text-sm text-gray-500 hover:text-blue-600">
            View All
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {brands.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index}`}
              className="h-6 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Top Categories */}
      <div className="bg-white p-4 rounded-xl relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">TOP CATEGORIES</h2>
          <button className="text-sm text-gray-500 hover:text-blue-600">
            View All
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={cat.img}
                alt={cat.name}
                className="h-14 object-contain"
              />
              <p className="text-sm mt-2 font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
        {/* Slider Dots */}
        <div className="absolute top-4 right-4 text-xs text-gray-400">
          ● ● ◉
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
