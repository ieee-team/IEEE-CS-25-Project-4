import React from "react";
import { products } from "../Data/productsData";

interface FilterProps {
  filterCategory: string;
  setFilterCategory: (cat: string) => void;
  filterPrice: string;
  setFilterPrice: (price: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filterCategory, setFilterCategory, filterPrice, setFilterPrice }) => {
  
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="flex flex-wrap gap-4 items-center mb-4 px-2">
      <div>
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1ABA1A]"
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1ABA1A]"
          value={filterPrice}
          onChange={e => setFilterPrice(e.target.value)}
        >
          <option value="all">Sort by Price</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
