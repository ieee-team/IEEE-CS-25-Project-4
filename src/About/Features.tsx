function Features() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 w-[94%] m-auto">
      {[1, 2, 3].map(( index) => (
        <div key={index} className="bg-white shadow-md rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-black font-bold text-[18px] w-[220px]">100% authentic
           products</h3>
            <div className="w-9 h-9 rounded-full bg-[#1ABA1A] mt-[-35px]"></div>
          </div>
          <p className="text-[#666666] text-[14px] font-[400] ">
            Swoo Tech Mart just distribute 100% authorized products &
              guarantee quality. Nulla porta nulla nec orci vulputate, id
                rutrum sapien varius.
          </p>
        </div>
      ))}
    </div>
  );
}

export default Features;
