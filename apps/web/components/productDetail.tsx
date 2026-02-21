import React from "react";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
  Clock,
  MessageSquare,
  Heart,
  Share2,
  ShoppingCart,
  Store,
} from "lucide-react";
import { Product } from "../mockData";
import { motion } from "framer-motion";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [selectedImg, setSelectedImg] = React.useState(product.images[0]);
  const [quantity, setQuantity] = React.useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Breadcrumbs */}
      <div className="px-4 lg:px-8 py-4 text-xs text-gray-500 flex items-center gap-2 border-b border-gray-50">
        <span className="cursor-pointer hover:text-[#FF6600]" onClick={onBack}>
          Home
        </span>
        <ChevronRight size={10} />
        <span className="cursor-pointer hover:text-[#FF6600]">
          {product.category}
        </span>
        <ChevronRight size={10} />
        <span className="text-gray-400 truncate max-w-[200px]">
          {product.title}
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Images */}
        <div className="lg:col-span-5 space-y-4">
          <div className="aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-50 relative group">
            <img
              src={selectedImg}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(img)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                  selectedImg === img
                    ? "border-[#FF6600]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-7">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#FF6600] text-white text-[10px] px-2 py-0.5 rounded font-bold">
                Source Factory
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Star size={12} className="text-orange-400 fill-orange-400" />
                {product.rating} Rating
              </span>
              <span className="text-xs text-gray-400">|</span>
              <span className="text-xs text-gray-400">
                {product.sold}+ Sold
              </span>
            </div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-4">
              {product.title}
            </h1>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-baseline gap-4 mb-4">
                <div className="flex items-baseline gap-1 text-[#FF6600]">
                  <span className="text-lg font-bold">
                    {product.type === "shipping" ? "$" : "¥"}
                  </span>
                  <span className="text-4xl font-black">
                    {product.price.toFixed(2)}
                  </span>
                  {product.type === "shipping" && (
                    <span className="text-sm ml-1">/kg</span>
                  )}
                </div>
                <span className="bg-blue-50 text-blue-500 text-[10px] px-2 py-0.5 rounded font-bold border border-blue-100">
                  {product.estimatedDays || "Verified Service"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-gray-400" />
                  <span>From {product.location} to Kampala</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gray-400" />
                  <span>Real-time GPS Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  <span>Insurance Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={14} className="text-orange-400" />
                  <span>{product.repurchaseRate} Success Rate</span>
                </div>
              </div>
            </div>

            {/* Tracking Stages */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-800 mb-4">
                Tracking Milestones
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Received at China Warehouse",
                    desc: "Weight & Photo confirmation",
                    status: "complete",
                  },
                  {
                    label: "Customs Clearance (Origin)",
                    desc: "Documentation prepared",
                    status: "active",
                  },
                  {
                    label: "In Transit (Air/Sea)",
                    desc: "Real-time location updates",
                    status: "pending",
                  },
                  {
                    label: "Arrived in Uganda",
                    desc: "Local customs processing",
                    status: "pending",
                  },
                  {
                    label: "Out for Delivery",
                    desc: "Kampala local dispatch",
                    status: "pending",
                  },
                ].map((stage, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          stage.status === "complete"
                            ? "bg-green-500 border-green-500"
                            : stage.status === "active"
                              ? "bg-white border-blue-500"
                              : "bg-white border-gray-200"
                        }`}
                      />
                      {i < 4 && <div className="w-0.5 h-full bg-gray-100" />}
                    </div>
                    <div className="pb-4">
                      <p
                        className={`text-xs font-bold ${stage.status === "pending" ? "text-gray-400" : "text-gray-800"}`}
                      >
                        {stage.label}
                      </p>
                      <p className="text-[10px] text-gray-400">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-6">
              <div className="flex flex-col gap-4 bg-orange-50/30 p-4 rounded-xl border border-orange-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-700">
                    Shipping Calculator
                  </span>
                  <span className="text-[10px] text-[#FF6600] font-bold">
                    Uganda ↔ China
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex items-center border border-gray-200 bg-white rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-50 text-gray-500"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value) || 1)
                      }
                      className="w-full text-center text-sm font-bold outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-50 text-gray-500"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-400">
                      Estimated Cost
                    </div>
                    <div className="text-sm font-bold text-[#FF6600]">
                      ${(quantity * product.price).toFixed(2)}
                    </div>
                  </div>
                </div>
                <p className="text-[9px] text-gray-400">
                  Final cost depends on actual weight and volume at origin
                  warehouse.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-orange-50 text-[#FF6600] border border-[#FF6600] py-3.5 rounded-xl font-bold text-sm hover:bg-orange-100 transition-colors flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Inquiry
                </button>
                <button className="flex-[1.5] bg-[#FF6600] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#e55c00] transition-colors shadow-lg shadow-orange-100 flex items-center justify-center gap-2">
                  Book Shipment
                </button>
              </div>

              {/* Specifications Section */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-800 mb-4">
                  Service Specifications
                </h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                  {[
                    {
                      label: "Service Type",
                      value:
                        product.type === "shipping"
                          ? "Logistics"
                          : "Procurement",
                    },
                    { label: "Route", value: "Guangzhou ➔ Kampala" },
                    {
                      label: "Transit Time",
                      value: product.estimatedDays || "7-10 Days",
                    },
                    { label: "Min Weight", value: product.minOrder },
                    { label: "Tracking", value: "Full Visibility" },
                    { label: "Insurance", value: "Available" },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] text-gray-400">
                        {spec.label}
                      </span>
                      <span className="text-xs font-medium text-gray-700">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#FF6600] transition-colors">
                    <MessageSquare size={20} />
                    <span className="text-[10px]">Chat</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#FF6600] transition-colors">
                    <Store size={20} />
                    <span className="text-[10px]">Store</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#FF6600] transition-colors">
                    <Heart size={20} />
                    <span className="text-[10px]">Wishlist</span>
                  </button>
                </div>
                <button className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  <Share2 size={16} />
                  Share Product
                </button>
              </div>
            </div>
          </div>

          {/* Supplier Info */}
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex flex-col items-center justify-center text-[#FF6600] font-black text-[10px] leading-tight">
                  MY
                  <br />
                  CHINA
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    My China Logistics
                  </h3>
                  <p className="text-[10px] text-gray-400">
                    Verified Partner • 5 Years
                  </p>
                </div>
              </div>
              <button className="text-xs text-[#FF6600] font-bold border border-[#FF6600] px-3 py-1 rounded-full hover:bg-white transition-colors">
                Contact Agent
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xs font-bold text-gray-800">4.8</div>
                <div className="text-[9px] text-gray-400">Service</div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">4.9</div>
                <div className="text-[9px] text-gray-400">Logistics</div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">4.7</div>
                <div className="text-[9px] text-gray-400">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
