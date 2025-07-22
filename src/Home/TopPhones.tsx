import prod21 from "../assets/Home_Imgs/prod21-1.png"
import prod22 from "../assets/Home_Imgs/prod22.png"
import prod23 from "../assets/Home_Imgs/prod23.png"
import prod24 from "../assets/Home_Imgs/prod24.png"
import prod25 from "../assets/Home_Imgs/prod25.png"
import prod26 from "../assets/Home_Imgs/prod26.png"
import prod27 from "../assets/Home_Imgs/prod27.png"

const TopPhones = () => {
  return (
    <section className=" bg-white w-full px-6 py-10">
      <h2 className="font-bold text-xl mb-6">TOP CELLPHONES & TABLETS</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Banner */}
        <div className="flex-1 bg-gradient-to-r from-orange-100 to-blue-100 rounded-xl p-6  flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold leading-tight">REDMI NOTE<br />12 PRO+ 5G</h3>
            <p className="text-sm text-gray-600">Rise to the challenge</p>
            <button  className="mt-2 border-2 p-2 bg-black text-white rounded-xl">SHOP NOW</button>
          </div>
          <div className="flex gap-2">
            <img src={prod21} alt="phones"  className="object-contain w-[100%]" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex-[1.2] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {[
            { label: "iPhone (iOS)", count: 74, img: prod22 },
            { label: "Android", count: 35, img: prod23 },
            { label: "5G Support", count: 12, img: prod24 },
            { label: "Gaming", count: 9, img: prod25 },
            { label: "Xiaomi", count: 52, img: prod26 },
            { label: "Accessories", count: 29, img: prod27 },
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

export default TopPhones;
