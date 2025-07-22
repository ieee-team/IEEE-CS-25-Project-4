import prod33 from "../assets/Home_Imgs/prod33.png"
import prod34 from "../assets/Home_Imgs/prod34.png"
import prod35 from "../assets/Home_Imgs/prod35.png"
import prod36 from "../assets/Home_Imgs/prod36.png"
import prod37 from "../assets/Home_Imgs/prod37.png"
import prod38 from "../assets/Home_Imgs/prod38.png"
import prod39 from "../assets/Home_Imgs/prod39.png"

const BestLabs = () => {
  return (
    <section className=" bg-white w-full px-6 py-10 mt-10">
      <h2 className="font-bold text-xl mb-6">Best Laptops & Computers</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Banner */}
        <div className="flex-1 bg-black rounded-xl p-6  flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-lg text-white font-semibold leading-tight">Mobok 2<br />superchard<span className="font-regular">By M2</span></h3>
            <p className="text-xl text-white">Start from <span className="text-[#1ABA1A]">$1,199</span></p>
          </div>
          <div className="flex gap-2">
            <img src={prod33} alt="phones"  className="object-contain w-[100%]" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex-[1.2] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {[
            { label: "Macbook", count: 74, img: prod34 },
            { label: "Gaming PC", count: 5, img: prod35 },
            { label: "Laptop Office", count: 22, img: prod36 },
            { label: "Laptop 15", count: 55, img: prod37 },
            { label: "M1 2023", count: 52, img: prod38 },
            { label: "Secondhand", count: 29, img: prod39 },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-1">
              <img src={item.img} alt={item.label} width={70} height={70} className="object-contain" />
              <span className="text-sm font-medium leading-tight">{item.label}</span>
              <span className="text-xs text-gray-500">{item.count} Items</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestLabs;
