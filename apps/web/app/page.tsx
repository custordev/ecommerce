// "use client";
// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState, useMemo } from "react";

// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight, X } from "lucide-react";
// import Sidebar from "@/components/sidebar";
// import Header from "@/components/navbar";
// import ProductDetail from "@/components/productDetail";
// import Hero from "@/components/Hero";
// import ProductGrid from "@/components/productGrid";
// import MobileNav from "@/components/MobileNav";
// import { Product, PRODUCTS, SUB_NAVS } from "@/mockData";

// export default function App() {
//   const [activeTab, setActiveTab] = useState("home");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showAppBanner, setShowAppBanner] = useState(true);

//   const filteredProducts = useMemo(() => {
//     return PRODUCTS.filter(
//       (p) =>
//         p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         p.category.toLowerCase().includes(searchQuery.toLowerCase()),
//     );
//   }, [searchQuery]);

//   const handleProductClick = (product: Product) => {
//     setSelectedProduct(product);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBack = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="flex min-h-screen bg-[#F8F9FA] text-[#333] font-sans selection:bg-orange-100 selection:text-[#FF6600]">
//       {/* 1. Sidebar */}
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col min-w-0">
//         <main className="flex-1 pb-20 lg:pb-10">
//           <AnimatePresence mode="wait">
//             {selectedProduct ? (
//               <ProductDetail product={selectedProduct} onBack={handleBack} />
//             ) : (
//               <motion.div
//                 key="home"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="p-3 lg:p-6 max-w-[1440px] mx-auto w-full"
//               >
//                 {/* 3. Hero Section */}
//                 <Hero />

//                 {/* 4. Secondary Features Bar */}
//                 <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
//                   {[
//                     {
//                       label: "Dropshipping",
//                       sub: "Bestselling Items",
//                       icon: "📦",
//                     },
//                     { label: "Cross-Border", sub: "Fast Hot Buy", icon: "🌐" },
//                     {
//                       label: "Store Select",
//                       sub: "Certified Flash",
//                       icon: "🏢",
//                     },
//                     {
//                       label: "Daily Specials",
//                       sub: "50% Off Rush",
//                       icon: "🏷️",
//                     },
//                     {
//                       label: "Flash Sample",
//                       sub: "50% off bestseller",
//                       icon: "⚡",
//                     },
//                     { label: "Pro Select", sub: "Worry-Free Shop", icon: "💎" },
//                   ].map((item, i) => (
//                     <div
//                       key={i}
//                       className="bg-white p-3 rounded-xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col items-center text-center"
//                     >
//                       <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
//                         {item.icon}
//                       </span>
//                       <span className="text-[10px] font-bold text-gray-800">
//                         {item.label}
//                       </span>
//                       <span className="text-[8px] text-gray-400">
//                         {item.sub}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* 5. Sub Navigation */}
//                 <div className="flex items-center gap-6 mb-6 overflow-x-auto no-scrollbar py-2 border-b border-gray-100 sticky top-[116px] lg:top-[128px] bg-[#F8F9FA] z-30">
//                   {SUB_NAVS.map((nav, i) => (
//                     <button
//                       key={nav}
//                       className={`whitespace-nowrap text-xs transition-all ${
//                         i === 0
//                           ? "text-[#FF6600] font-bold border-b-2 border-[#FF6600] pb-2"
//                           : "text-gray-500 hover:text-[#FF6600] pb-2"
//                       }`}
//                     >
//                       {nav}
//                     </button>
//                   ))}
//                   <div className="ml-auto flex items-center gap-1 text-[10px] text-gray-400 cursor-pointer hover:text-[#FF6600]">
//                     More <ChevronRight size={10} />
//                   </div>
//                 </div>

//                 {/* 6. Product Grid */}
//                 <ProductGrid
//                   products={filteredProducts}
//                   onProductClick={handleProductClick}
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </main>

//         {/* 8. Mobile App Banner (The popup from screenshots) */}
//         <AnimatePresence>
//           {showAppBanner && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               className="lg:hidden fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
//             >
//               <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative overflow-hidden text-center">
//                 <button
//                   onClick={() => setShowAppBanner(false)}
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//                 >
//                   <X size={20} />
//                 </button>

//                 <div className="mb-6">
//                   <div className="w-20 h-20 bg-orange-50 rounded-3xl mx-auto flex items-center justify-center mb-4 shadow-inner">
//                     <span className="text-[#FF6600] font-black text-2xl text-center leading-tight">
//                       MY
//                       <br />
//                       CHINA
//                     </span>
//                   </div>
//                   <h2 className="text-xl font-bold text-gray-900 mb-2">
//                     Download My China App
//                   </h2>
//                   <p className="text-sm text-gray-500">
//                     Track your shipments from China to Uganda!
//                   </p>
//                 </div>

//                 <div className="space-y-3">
//                   <button className="w-full bg-[#FF6600] text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-orange-100">
//                     Download App
//                   </button>
//                   <button
//                     onClick={() => setShowAppBanner(false)}
//                     className="w-full border border-orange-200 text-[#FF6600] py-3.5 rounded-2xl font-bold text-sm hover:bg-orange-50 transition-colors"
//                   >
//                     Continue in Browser
//                   </button>
//                 </div>

//                 <p className="mt-6 text-[10px] text-gray-400">
//                   Version 11.90.1.0 • Updated 2026-01-18
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";

import {
  ChevronRight,
  X,
  Home,
  ClipboardList,
  Package,
  Store,
  Globe,
  Truck,
  Loader2,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "@/components/sidebar";
import Header from "@/components/navbar";
import ProductDetail from "@/components/productDetail";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/productGrid";
import MobileNav from "@/components/MobileNav";
import { Product, PRODUCTS, SUB_NAVS } from "@/mockData";
export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAppBanner, setShowAppBanner] = useState(true);
  const [visibleCount, setVisibleCount] = useState(20);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    const filtered = PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    return filtered.slice(0, visibleCount);
  }, [searchQuery, visibleCount]);

  const hasMore = visibleCount < PRODUCTS.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoadingMore]);

  const loadMore = () => {
    setIsLoadingMore(true);
    // Simulate network delay
    setTimeout(() => {
      setVisibleCount((prev) => prev + 20);
      setIsLoadingMore(false);
    }, 800);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(20); // Reset count on search
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-[#333] font-sans selection:bg-orange-100 selection:text-[#FF6600]">
      {/* 1. Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 2. Header (Global) */}
        {/* <Header onSearch={handleSearch} /> */}

        <main className="flex-1 pb-20 lg:pb-10">
          <AnimatePresence mode="wait">
            {selectedProduct ? (
              <ProductDetail product={selectedProduct} onBack={handleBack} />
            ) : (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-3 lg:p-6 max-w-[1440px] mx-auto w-full"
              >
                {/* 3. Hero Section */}
                <Hero />

                {/* 4. Secondary Features Bar */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
                  {[
                    {
                      label: "Dropshipping",
                      sub: "Bestselling Items",
                      icon: "📦",
                    },
                    { label: "Cross-Border", sub: "Fast Hot Buy", icon: "🌐" },
                    {
                      label: "Store Select",
                      sub: "Certified Flash",
                      icon: "🏢",
                    },
                    {
                      label: "Daily Specials",
                      sub: "50% Off Rush",
                      icon: "🏷️",
                    },
                    {
                      label: "Flash Sample",
                      sub: "50% off bestseller",
                      icon: "⚡",
                    },
                    { label: "Pro Select", sub: "Worry-Free Shop", icon: "💎" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col items-center text-center"
                    >
                      <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-bold text-gray-800">
                        {item.label}
                      </span>
                      <span className="text-[8px] text-gray-400">
                        {item.sub}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 5. Sub Navigation */}
                <div className="flex items-center gap-6 mb-6 overflow-x-auto no-scrollbar py-2 border-b border-gray-100 sticky top-[116px] lg:top-[128px] bg-[#F8F9FA] z-30">
                  {SUB_NAVS.map((nav, i) => (
                    <button
                      key={nav}
                      className={`whitespace-nowrap text-xs transition-all ${
                        i === 0
                          ? "text-[#FF6600] font-bold border-b-2 border-[#FF6600] pb-2"
                          : "text-gray-500 hover:text-[#FF6600] pb-2"
                      }`}
                    >
                      {nav}
                    </button>
                  ))}
                  <div className="ml-auto flex items-center gap-1 text-[10px] text-gray-400 cursor-pointer hover:text-[#FF6600]">
                    More <ChevronRight size={10} />
                  </div>
                </div>

                {/* Mobile Sidebar Items Row (Secondary Navigation) */}
                <div className="lg:hidden mb-6">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-xs font-bold text-gray-800">
                      Quick Services
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Slide for more
                    </span>
                  </div>
                  <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-3 bg-white rounded-2xl px-4 shadow-sm border border-gray-50">
                    {[
                      {
                        id: "home",
                        icon: Home,
                        label: "Home",
                        color: "bg-orange-50 text-orange-500",
                      },
                      {
                        id: "orders",
                        icon: ClipboardList,
                        label: "Tracking",
                        color: "bg-blue-50 text-blue-500",
                      },
                      {
                        id: "product",
                        icon: Package,
                        label: "Services",
                        color: "bg-green-50 text-green-500",
                      },
                      {
                        id: "supplier",
                        icon: Store,
                        label: "Partners",
                        color: "bg-purple-50 text-purple-500",
                      },
                      {
                        id: "global",
                        icon: Globe,
                        label: "Global",
                        color: "bg-indigo-50 text-indigo-500",
                      },
                      {
                        id: "dist",
                        icon: Truck,
                        label: "Logistics",
                        color: "bg-red-50 text-red-500",
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className="flex flex-col items-center gap-2 shrink-0 min-w-[65px] group"
                      >
                        <div
                          className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shadow-sm group-active:scale-90 transition-transform`}
                        >
                          <item.icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-600">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Product Grid */}
                <ProductGrid
                  products={filteredProducts}
                  onProductClick={handleProductClick}
                />

                {/* Infinite Scroll Loader */}
                <div
                  ref={loaderRef}
                  className="py-10 flex flex-col items-center justify-center gap-2"
                >
                  {isLoadingMore ? (
                    <>
                      <Loader2
                        className="animate-spin text-[#FF6600]"
                        size={24}
                      />
                      <span className="text-xs text-gray-400">
                        Loading more products...
                      </span>
                    </>
                  ) : hasMore ? (
                    <span className="text-xs text-gray-400">
                      Scroll to load more
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">
                      No more products to show
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* 7. Mobile Navigation */}
        <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 8. Mobile App Banner (The popup from screenshots) */}
        <AnimatePresence>
          {showAppBanner && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="lg:hidden fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            >
              <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative overflow-hidden text-center">
                <button
                  onClick={() => setShowAppBanner(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>

                <div className="mb-6">
                  <div className="w-20 h-20 bg-orange-50 rounded-3xl mx-auto flex items-center justify-center mb-4 shadow-inner">
                    <span className="text-[#FF6600] font-black text-2xl text-center leading-tight">
                      MY
                      <br />
                      CHINA
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Download My China App
                  </h2>
                  <p className="text-sm text-gray-500">
                    Track your shipments from China to Uganda!
                  </p>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-[#FF6600] text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-orange-100">
                    Download App
                  </button>
                  <button
                    onClick={() => setShowAppBanner(false)}
                    className="w-full border border-orange-200 text-[#FF6600] py-3.5 rounded-2xl font-bold text-sm hover:bg-orange-50 transition-colors"
                  >
                    Continue in Browser
                  </button>
                </div>

                <p className="mt-6 text-[10px] text-gray-400">
                  Version 11.90.1.0 • Updated 2026-01-18
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
