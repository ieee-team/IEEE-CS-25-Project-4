import { useEffect, useState } from "react";

import mainPhone from "../assets/Home_Imgs/mainphone.png";
import thumb1 from "../assets/Home_Imgs/thumb-1.png";
import thumb2 from "../assets/Home_Imgs/thumb-2.png";
import thumb3 from "../assets/Home_Imgs/thumb-3.png";
import thumb4 from "../assets/Home_Imgs/thumb-4.png";
import offer1 from "../assets/Home_Imgs/offer-1.png";
import offer2 from "../assets/Home_Imgs/offer-2.png";
import offer3 from "../assets/Home_Imgs/offer-3.png";

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 9,
    minutes: 45,
    seconds: 20,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <section className="mt-10 bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left: Thumbnails + Main Image */}
      
      <div className="mt-30 flex gap-6 col-span-1">
        
        <div className="pt-10 pr-15 flex flex-col gap-12">
          {[thumb1, thumb2, thumb3, thumb4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className="w-12 h-16 object-cover rounded-md "
            />
          ))}
        </div>
        <div className="relative flex-1">
          <img
            src={mainPhone}
            alt="main"
            className="w-[70%] rounded-lg pt-10"
          />
          <div className="absolute top-2 left-4 bg-green-500 text-white px-2  text-xs font-semibold rounded-md">
            SAVE $199.00
          </div>
        </div>
      </div>

      {/* Center: Product Info */}
      <div className="col-span-1 mr-25">
        <h3 className="bg-green-500  text-white rounded-xl p-2 font-bold mb-5 ">DEALS OF THE DAY</h3>
        <h2 className="text-lg font-semibold mb-5">
          Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
        </h2>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-red-600 text-xl font-bold">$569.00</span>
          <del className="text-gray-400 text-sm">$759.00</del>
        </div>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
          <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
          <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
          <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
        </ul>
        <div className="flex gap-2 mb-5">
          <span className="text-green-600 text-xs font-semibold border border-green-600 px-2 py-1 rounded-md">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-semibold border border-red-500 px-2 py-1 rounded-md">
            FREE GIFT
          </span>
        </div>
        <p className="text-sm text-gray-800 font-medium mb-2">
          HURRY UP! PROMOTION WILL EXPIRE IN
        </p>

        <div className="flex gap-2 mb-4">
          <div className="bg-gray-100 rounded-md px-3 py-2 text-center text-xs font-bold text-gray-700">
            {timeLeft.days}d
          </div>
          <div className="bg-gray-100 rounded-md px-3 py-2 text-center text-xs font-bold text-gray-700">
            {timeLeft.hours}h
          </div>
          <div className="bg-gray-100 rounded-md px-3 py-2 text-center text-xs font-bold text-gray-700">
            {timeLeft.minutes}m
          </div>
          <div className="bg-gray-100 rounded-md px-3 py-2 text-center text-xs font-bold text-gray-700">
            {timeLeft.seconds}s
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
          <div className="bg-green-500 h-full w-[35%] rounded-full"></div>
        </div>
        <p className="text-sm text-gray-700">
          Sold: <strong>26/75</strong>
        </p>
      </div>

      {/* Right: Offer Banners */}
      <div className="bg-gray-200 justify-center items-center flex flex-col gap-2 col-span-1">
        {[offer1, offer2, offer3].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`offer-${i}`}
            className="w-[80%] rounded-xl shadow-sm"
          />
        ))}
      </div>
    </section>
  );
};

export default DealsSection;
