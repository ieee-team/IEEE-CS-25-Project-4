


interface CategoryCard {
  name: string;
  count: number;
  image: string;
}

const categories: CategoryCard[] = [
  { name: "Phones", count: 120, image: "src/assets/prod65.png.svg" },
  { name: "Laptops", count: 80, image: "src/assets/prod66.png.svg" },
  { name: "Tablets", count: 60, image: "src/assets/prod67.png.svg" },
  { name: "Headphones", count: 45, image: "src/assets/prod68.png.svg" },
  { name: "Watches", count: 30, image: "src/assets/prod69.png.svg" },
  { name: "Cameras", count: 25, image: "src/assets/prod70.png.svg" },
  { name: "Accessories", count: 50, image: "src/assets/prod5.png.svg" },
  { name: "Speakers", count: 35, image: "src/assets/prod10.png.svg" },
  { name: "Monitors", count: 20, image: "src/assets/prod24.png.svg" },
  { name: "Printers", count: 15, image: "src/assets/prod26.png.svg" },
];

function Popular() {
  return (
    <div className="flex flex-col items-center py-6 my-3 bg-[#FFFFFF] container mx-auto rounded-xl">
      <div className="mb-3 flex items-center space-x-2 text-sm px-4 py-3 bg-white rounded-xl w-[92%]">
        <span className="text-[#000000] text-[18px] font-[700]">
          popular categories
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-[92%]">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex justify-between items-center  min-w-[160px]">
            <div className="flex flex-col items-start">
              <span className="text-[16px] font-[600] text-black mb-1">{cat.name}</span>
              <span className="text-[12px] text-[#666666] font-[400]">{cat.count} items</span>
            </div>
            <img src={cat.image} alt={cat.name} className="w-12 h-12 object-contain ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
