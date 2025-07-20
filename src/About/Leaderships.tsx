

interface Leader {
  name: string;
  jobTitle: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: "Henry Avery",
    jobTitle: "Chairman",
    image: "src/assets/div.img.png",
  },
  {
    name: "Michael Edward",
    jobTitle: "Vice President",
    image: "src/assets/div.img (1).png",
  },
  {
    name: "Eden Hazard",
    jobTitle: "CEO",
    image: "src/assets/div.img (2).png",
  },
  {
    name: "Robert Downey Jr",
    jobTitle: "CEO",
    image: "src/assets/div.img (3).png",
  },
  {
    name: "Nathan Drake",
    jobTitle: "strategist director",
    image: "src/assets/div.img (4).png",
  },
];

function Leaderships() {
  return (
    <div className="w-[90%] mx-auto py-2 bg-[#FFFFFF] mt-[-20px] px-3 rounded-b-xl">
      <div className="flex justify-between items-center mt-4 ">
        <span className="text-black font-bold text-[18px] uppercase">Leaderships</span>
        <span className="text-gray-500 text-[13px] mx-2">View All</span>
      </div>
      <div className="flex gap-4 my-6">
        {leaders.map((leader, idx) => (
          <div key={idx}>
            <img
              src={leader.image}
              alt={leader.name}
              className="rounded-1 object-cover mx-auto"
            />
            <div className="text-black font-bold text-[16px] mt-2">{leader.name}</div>
            <div className="text-[#666666] font-[400] text-[12px]">{leader.jobTitle}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Leaderships;