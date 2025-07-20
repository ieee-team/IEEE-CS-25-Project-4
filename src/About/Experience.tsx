function Experience() {
  return (
    <div className="bg-[#FFFFFF] w-[90%] mx-auto rounded-xl p-6">
      <img
        src="src/assets/div.about-banner.png"
        alt="About Banner"
        className="w-[97%] object-cover mx-auto py-3"
      />

      <div className="flex flex-row justify-around gap-3  shadow-xl">

        <div className="w-[40%] my-4">
          <p className="text-xl text-[#000000] text-[18px] font-[700] px-4">
            our purpose is to <span className="text-[#1ABA1A] uppercase">enrich<br /> and enhance lives</span><br />
            through technology
          </p>
        </div>


        <div className="w-[50%] flex flex-row gap-3">

          <div className="  flex flex-col">
            <p className="mt-[-40px] font-[700] text-[40px] text-[#000000]">$12.5M</p>
            <p className="font-[Poppins] font-[400] text-[12px] text-[#666666]">
             total revenue from<br /> 2001 - 2023
            </p>
          </div>

          <div className="    flex flex-col ">
            <p className=" mt-[-40px] font-[700] text-[40px]  text-[#000000]">12K+</p>
            <p className="font-[Poppins] font-[400] text-[12px] text-[#666666]">
              orders delivered <br />successful on everyday
            </p>
          </div>

         
          <div className="  flex flex-col">
            <p className="mt-[-40px] font-[700] text-[40px]  text-[#000000]">725+</p>
            <p className="font-[Poppins] font-[400] text-[12px] text-[#666666]">
              store and office in U.S <br />and worldwide
            </p>
          </div>
        </div>
      </div>

     <div className="grid grid-cols-2 gap-4 items-center mt-3">
  
    <img
      src="src/assets/about2.png.png"
      alt="About Banner"
      className=" object-cover rounded-xl my-7"
    />
 

  <div className="bg-[#E2E4EB] p-4 rounded-xl">
    <h5 className="font-[700] text-[18px] mb-4 text-black px-4">
      We connect millions of buyers and sellers around the world, empowering people & creating economic opportunity for all.
    </h5>

    <p className="mb-4 font-[400] text-[14px] text-[#666666] px-4">
      Within our markets, millions of people around the world connect,
      both online and offline, to make, sell and buy unique goods. We also
      offer a wide range of Seller Services and tools that help creative
      entrepreneurs start, manage & scale their businesses.
    </p>

    <button className="btn btn-success mx-4">Our Showreel</button>
  </div>
</div>


    </div>
  );
}

export default Experience;
