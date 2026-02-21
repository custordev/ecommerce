import React from "react";
import {
  ChevronRight,
  User,
  Heart,
  Store,
  History,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Flame,
  Star,
} from "lucide-react";
import { CATEGORIES, FEATURED_CARGO } from "../mockData";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* 1. Categories Sidebar */}
        <div className="hidden lg:block lg:col-span-2 bg-white rounded-lg p-4 shadow-sm border border-gray-50">
          <h3 className="font-bold mb-4 text-xs uppercase tracking-wider text-gray-800">
            All Categories
          </h3>
          <ul className="space-y-2.5">
            {CATEGORIES.map((cat) => (
              <li
                key={cat.name}
                className="text-[11px] text-gray-600 hover:text-[#FF6600] cursor-pointer flex justify-between items-center group transition-colors"
              >
                <span className="flex items-center gap-2">{cat.name}</span>
                <ChevronRight
                  size={10}
                  className="text-gray-300 group-hover:text-[#FF6600] transition-colors"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Featured Cargo Grid */}
        <div className="lg:col-span-7 bg-white rounded-lg p-4 shadow-sm border border-gray-50">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-gray-800">
                Top Shipping Products
              </span>
              <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium border border-blue-100">
                Daily Updates
              </span>
            </div>
            <button className="text-xs text-gray-400 hover:text-[#FF6600] flex items-center gap-0.5 transition-colors">
              View More <ChevronRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-3">
            {FEATURED_CARGO.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-gray-50/50 rounded-xl p-2 border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-xl hover:shadow-orange-50/50 transition-all duration-300"
              >
                <div className="aspect-square bg-white rounded-lg overflow-hidden relative border border-gray-100 mb-2">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-1 right-1">
                    <div className="bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-sm">
                      <Zap
                        size={10}
                        className="text-orange-500 fill-orange-500"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                    <div className="flex items-baseline gap-0.5 text-white">
                      <span className="text-[8px] font-bold">$</span>
                      <span className="text-xs font-black">{item.price}</span>
                      <span className="text-[7px] opacity-80 ml-0.5">/kg</span>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-gray-700 truncate group-hover:text-[#FF6600] transition-colors px-1">
                  {item.label}
                </p>
                <div className="flex items-center justify-between px-1 mt-1">
                  <span className="text-[8px] text-gray-400">Verified</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-orange-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. User Card */}
        <div className="lg:col-span-3 bg-white rounded-lg p-5 shadow-sm border border-gray-50 flex flex-col">
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 bg-gray-50 rounded-full mb-3 flex items-center justify-center text-gray-300 border border-gray-100 ring-4 ring-orange-50">
              <User size={28} />
            </div>
            <p className="text-xs font-bold text-gray-800">
              Good afternoon, Guest
            </p>
          </div>

          <div className="grid grid-cols-3 w-full mb-6 text-[10px] text-center gap-2">
            <div className="group cursor-pointer">
              <div className="font-bold text-red-500 text-sm mb-0.5">0</div>
              <div className="text-gray-500 group-hover:text-red-500 transition-colors">
                Bonus
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="font-bold text-[#FF6600] text-sm mb-0.5">12</div>
              <div className="text-gray-500 group-hover:text-[#FF6600] transition-colors">
                Vouchers
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="font-bold text-blue-500 text-sm mb-0.5">
                Apply
              </div>
              <div className="text-gray-500 group-hover:text-blue-500 transition-colors">
                Pay Later
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="text-[11px] text-gray-600 space-y-2">
              <div className="flex items-center gap-2">
                <Star size={12} className="text-orange-400" />
                <span>Recommend services for you</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={12} className="text-yellow-500" />
                <span>Faster Order Updates</span>
              </div>
            </div>
            <button className="w-full bg-[#FF6600] hover:bg-[#e55c00] text-white py-2.5 rounded-lg font-bold text-sm transition-all shadow-md shadow-orange-100 active:scale-95">
              Sign in
            </button>
          </div>

          <div className="grid grid-cols-4 w-full text-gray-400 mt-auto border-t border-gray-50 pt-4">
            <div className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-[#FF6600] transition-colors group">
              <ShoppingCart
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[9px] font-medium">Cart</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-[#FF6600] transition-colors group">
              <Heart
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[9px] font-medium">Wishlist</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-[#FF6600] transition-colors group">
              <Store
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[9px] font-medium">Follow</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 cursor-pointer hover:text-[#FF6600] transition-colors group">
              <History
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[9px] font-medium">History</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
