function Global() {
    const leftYears = [];
  const rightYears = [];

  for (let year = 1997; year <= 2009; year += 2) {
    leftYears.push(year);
  }

  for (let year = 2011; year <= 2024; year += 2) {
    rightYears.push(year);
  }

  return (
    <div className="w-[90%] mx-auto pt-4 bg-white">
      
      <div className=" px-3">
        <p className="text-[18px] font-[700] text-black mb-1">
          From a retail store to the global chain of stores
        </p>
        <p className="text-[14px] font-[400] text-black">
          Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat.
        </p>
      </div>

     <div className="grid grid-cols-12 gap-4 p-3">
      {/* Left side */}
      <div className="col-span-6">
        {leftYears.map((year, index) => (
          <div key={index} className="mb-2">
            <span className=" text-black text-[14px] font-bold">{year}:</span>{" "}
            <span className="text-[#666666] text-[14px] font-[400]">
             It is a long established fact that a reader will be distracted by the readable
            </span>
          </div>
        ))}
      </div>

      {/* Right side */}
      <div className="col-span-6">
        {rightYears.map((year, index) => (
          <div key={index} className="mb-4">
            <span className="text-[14px] font-bold text-black">{year}:</span>{" "}
            <span className="text-[#666666] text-[14px] font-[400]">
              Lorem Ipsum has been the industry's standard dummy text ever since
            </span>
          </div>
        ))}
      </div>
    </div>
    <hr className="w-[93%] mx-auto border-t border-gray-400 mt-3" />
    </div>
  );
}

export default Global;
