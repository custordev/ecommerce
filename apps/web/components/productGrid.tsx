import React from "react";
import { ChevronRight, Star, Flame, ShieldCheck } from "lucide-react";
import { Product } from "../mockData";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({
  products,
  onProductClick,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-5">
      {/* Special Banner Card */}
      <motion.div
        whileHover={{ y: -5 }}
        className="col-span-1 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-5 text-white flex flex-col justify-between overflow-hidden relative shadow-lg shadow-red-100 cursor-pointer"
      >
        <div className="z-10">
          <div className="flex items-center gap-1.5 mb-2">
            <Flame size={14} className="text-yellow-300 fill-yellow-300" />
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Limited Time
            </span>
          </div>
          <h2 className="text-xl font-black leading-tight mb-2">
            SPRING FESTIVAL SALE
          </h2>
          <p className="text-[10px] opacity-80 leading-relaxed">
            Global Shipping • 48h Delivery
            <br />
            Up to 70% Off Selected Items
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-6 z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 aspect-square flex flex-col items-center justify-center text-[10px] border border-white/20">
            <span className="font-bold">Apparel</span>
            <span className="opacity-60">-50%</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 aspect-square flex flex-col items-center justify-center text-[10px] border border-white/20">
            <span className="font-bold">Tech</span>
            <span className="opacity-60">-30%</span>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-400/30 rounded-full blur-xl" />
      </motion.div>

      {/* Product Cards */}
      {products.map((product, idx) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.02 }}
          whileHover={{ y: -5 }}
          onClick={() => onProductClick(product)}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-50 cursor-pointer"
        >
          <div className="aspect-square relative overflow-hidden bg-gray-50">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {product.tags.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-[9px] px-2 py-0.5 rounded-full font-bold shadow-sm ${
                      tag === "Source Factory"
                        ? "bg-[#FF6600] text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-[#FF6600]">
                <ShieldCheck size={16} />
              </div>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-[11px] leading-relaxed text-gray-700 line-clamp-2 mb-3 group-hover:text-[#FF6600] transition-colors font-medium">
              {product.title}
            </h3>

            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[#FF6600] text-xs font-bold">
                  {product.type === "shipping" ? "$" : "¥"}
                </span>
                <span className="text-[#FF6600] text-xl font-black">
                  {product.price.toFixed(2)}
                </span>
                {product.type === "shipping" && (
                  <span className="text-[10px] text-[#FF6600] ml-1 font-bold">
                    /kg
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center text-[10px] text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  {product.type === "shipping" && product.estimatedDays ? (
                    <span className="text-blue-500 font-bold">
                      {product.estimatedDays}
                    </span>
                  ) : (
                    <>
                      <Star
                        size={10}
                        className="text-orange-400 fill-orange-400"
                      />
                      <span>{product.rating.toFixed(1)}</span>
                    </>
                  )}
                </div>
                <span>
                  {product.sold}+{" "}
                  {product.type === "shipping" ? "used" : "sold"}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-400 truncate max-w-[100px] font-medium">
                    {product.company}
                  </span>
                  <span className="text-[8px] text-gray-300">
                    {product.location}
                  </span>
                </div>
                <div className="bg-gray-50 p-1 rounded-full text-gray-300 group-hover:text-[#FF6600] group-hover:bg-orange-50 transition-all">
                  <ChevronRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
