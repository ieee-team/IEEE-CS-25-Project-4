import headphoneImg from "../assets/Home_Imgs/Headphone.png";
import watch from "../assets/Home_Imgs/Watch.png";
import camera from "../assets/Home_Imgs/Camera.png";
import keyboard from "../assets/Home_Imgs/Keyboard.png";
import plalystaion from "../assets/Home_Imgs/playstation (2).png";

export default function HeroBanner() {
  return (
    <div className="bg-gray-200 font-sans text-gray-800 p-4 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-gray-50 p-4 rounded shadow-sm text-sm">
          <h3 className="text-red-600 font-bold mb-4">SALE 40% OFF</h3>
          <ul className="space-y-2 font-medium">
            {[
              "Laptops",
              "PC & Computers",
              "Cell Phones",
              "Tablets",
              "Gaming & VR",
              "Networking",
              "Cameras",
              "Sounds",
              "Office",
              "Storage, USB",
              "Accessories",
              "Clearance",
            ].map((item) => (
              <li key={item} className="hover:text-blue-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Headphone Image with Text */}
          <div className="sm:col-span-2 relative rounded overflow-hidden">
            <img
              src={headphoneImg}
              alt="Headphone"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 text-white max-w-[200px]">
              <h2 className="text-2xl font-bold leading-tight">
                Noise Cancelling
              </h2>
              <p className="text-sm mb-2">Headphone</p>
              <p className="text-xs leading-tight mb-3">
                Boso Over-Ear Headphone <br />
                Wifi, Voice Assistant, <br />
                Low Latency Game Mode
              </p>
              <button className="px-4 py-1 bg-white text-black rounded text-xs">
                BUY NOW
              </button>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-white">
              ● ● ◉
            </div>
          </div>

          {/* Watch Image with Text */}
          <div className="relative rounded overflow-hidden">
            <img
              src={watch}
              alt="Watch"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-6 md:left-20 text-black text-sm">
              <h4 className="font-bold leading-tight">
                Sport Water <br /> Resistance Watch
              </h4>
              <button className="mt-3 px-4 py-1 bg-black text-white text-xs rounded">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Sono Device */}
          <div className="relative rounded overflow-hidden">
            <img
              src={plalystaion}
              alt="Sono"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-black text-xs">
              <h5 className="font-semibold text-sm">Sono Playgo 5</h5>
              <p className="text-sm font-semibold text-green-300">from $569</p>
              <a href="#" className="text-black underline">
                DISCOVER NOW
              </a>
            </div>
          </div>

          {/* Keyboard */}
          <div className="relative rounded overflow-hidden">
            <img
              src={keyboard}
              alt="Keyboard"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-xs">
              <h5 className="font-semibold text-sm">
                Logitek Bluetooth <br />
                <span className="text-yellow-300">Keyboard</span>
              </h5>
              <p>Best for all device</p>
            </div>
          </div>

          {/* GoPro Camera */}
          <div className="relative rounded overflow-hidden bg-black">
            <img
              src={camera}
              alt="GoPro"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-white text-sm">
              <h5 className="font-bold">OKODO HERO <br />11+ BLACK</h5>
              <p className="text-green-400 mt-2 text-xs">FROM $169</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
