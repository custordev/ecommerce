
import React from "react";
import { Search, Camera, ChevronDown } from "lucide-react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-40 w-full">
      {/* Top Utility */}
      <div className="hidden lg:flex justify-end items-center px-8 py-1.5 gap-6 text-[11px] text-gray-500 border-b border-gray-50">
        <div className="flex items-center gap-4">
          <span className="hover:text-[#FF6600] cursor-pointer">Plugin</span>
          <span className="hover:text-[#FF6600] cursor-pointer">Orders</span>
          <span className="hover:text-[#FF6600] cursor-pointer">Cart</span>
          <span className="hover:text-[#FF6600] cursor-pointer">Messages</span>
          <span className="hover:text-[#FF6600] cursor-pointer">
            Official Services
          </span>
          <span className="hover:text-[#FF6600] cursor-pointer flex items-center gap-1">
            EN/USD <ChevronDown size={10} />
          </span>
        </div>
        <button className="bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors">
          Login
        </button>
      </div>

      {/* Search Section */}
      <div className="px-4 lg:px-8 py-4 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
          {/* Logo for mobile */}
          <div className="lg:hidden flex items-center justify-between w-full mb-2">
            <div className="text-[#FF6600] font-black text-2xl tracking-tighter">
              MY CHINA
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center text-[10px] text-gray-400">
                <Search size={16} />
                <span>Search</span>
              </div>
              <button className="bg-[#FF6600] text-white px-4 py-1 rounded-full text-xs font-bold">
                Login
              </button>
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="hidden lg:flex gap-8 text-lg font-bold">
            <button className="text-[#FF6600] border-b-2 border-[#FF6600] pb-1 cursor-pointer">
              Find Goods
            </button>
            <button className="text-gray-400 hover:text-[#FF6600] cursor-pointer">
              Investments
            </button>
            <button className="text-gray-400 hover:text-[#FF6600] cursor-pointer">
              Groups
            </button>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:flex-1 flex items-center gap-3">
            <div className="flex-1 flex relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Trend New Arrivals"
                className="w-full border-2 border-[#FF6600] rounded-l-md pl-11 pr-4 py-2.5 outline-none text-sm transition-shadow focus:shadow-md"
                onChange={(e) => onSearch(e.target.value)}
              />
              <button className="bg-[#FF6600] hover:bg-[#e55c00] text-white px-8 py-2.5 font-bold rounded-r-sm transition-colors">
                Search
              </button>
            </div>

            <button className="hidden sm:flex items-center gap-2 bg-[#FFF0E5] hover:bg-[#FFE5D4] text-[#FF6600] px-4 py-2.5 rounded-md border border-[#FFD9C2] transition-colors">
              <Camera size={18} />
              <span className="text-xs font-bold whitespace-nowrap">
                Image Search
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
