import sliderImg from "../assets/slider3.png.png";
import bannerImg from "../assets/banner1.png.png";

function Top() {
  return (
    <div className=" flex flex-col items-center py-6 my-3 bg-[#FFFFFF] container mx-auto rounded-xl">

      <div className="mb-3 flex items-center space-x-2 text-sm px-4 py-3 bg-white rounded-xl w-[92%]">
        <span className="text-[#000000] text-[14px] font-[700]">
          Top Cell Phones & Tablets
        </span>
      </div>

     
      <div className="flex flex-col md:flex-row w-[98%] gap-4 ">
       
        <div
          className="md:w-2/3 w-full rounded-xl h-[300px] text-white bg-cover bg-left flex items-center px-6"
          style={{ backgroundImage: `url(${sliderImg})` }}
        >
          <div>
            <p className="text-[30px] font-[700] text-[#FFFFFF] w-[260px]">
              Noise Cancelling Headphone
            </p>
            <p className="text-[12px] font-[400] text-[#FFFFFF] my-3 px-3">
            Boso Over-Ear Headphone <br/>Wifi, Voice Assistant,<br/>Low latency game mode
            </p>
            <button className=" text-[12px] font-[500] uppercase px-4 py-2 bg-white text-black rounded">
             BUY NOW
            </button>
          </div>
        </div>

     
       <div
  className="md:w-1/3 w-full rounded-xl h-[300px] text-white bg-cover bg-center flex items-start  pl-4 py-4"
  style={{ backgroundImage: `url(${bannerImg})` }}
>
  <div className="flex flex-row items-start justify-start w-full">
    <div>
      <p className="text-[22px] font-[500] text-black mb-1 leading-tight">
        redmi note 12<br />Pro+ 5g
      </p>
      <p className="text-sm text-[#666666] mb-2">
        Rise to the challenge
      </p>
    </div>
    <button className="py-2 px-2 m-3 rounded bg-black text-white font-[500] text-[12px]">
      SHOP NOW
    </button>
  </div>
</div>
      </div>
    </div>
  );
}

export default Top;
