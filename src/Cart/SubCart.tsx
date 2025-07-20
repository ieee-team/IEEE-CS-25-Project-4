import { useNavigate } from "react-router-dom";

const SubCart = () => {
  const navigate = useNavigate();

  return (
    
    <div className="container w-full flex justify-center items-start pt-6 mb-3">
      <div className="flex items-center space-x-2 text-sm px-4 py-3 bg-white rounded-xl w-[92%]">
        <span
          onClick={() => navigate("/")}
          className="text-[#999999] text-[14px] font-[700] cursor-pointer"
        >
          Home
        </span>
        <span className="text-[#6C757D] text-[14px] font-[700]">/</span>
        <span
          onClick={() => navigate("/product")}
          className="text-[#999999] text-[14px] font-[700] cursor-pointer"
        >
          Pages
        </span>
        <span className="text-[#6C757D] text-[14px] font-[700]">/</span>
        <span className="text-[#000000] text-[14px] font-[700]">Cart</span>
      </div>
    </div>
  );
};

export default SubCart;
