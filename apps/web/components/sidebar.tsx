// import React from "react";
// import {
//   LayoutGrid,
//   ClipboardList,
//   Package,
//   Store,
//   Globe,
//   Truck,
//   User,
//   Home,
// } from "lucide-react";

// interface SidebarProps {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }

// export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
//   const menuItems = [
//     { id: "home", icon: Home, label: "Home" },
//     { id: "orders", icon: ClipboardList, label: "Tracking" },
//     { id: "product", icon: Package, label: "Services" },
//     { id: "supplier", icon: Store, label: "Partners" },
//     { id: "global", icon: Globe, label: "Global" },
//     { id: "dist", icon: Truck, label: "Logistics" },
//     { id: "me", icon: User, label: "Me" },
//   ];

//   return (
//     <aside className="hidden lg:flex w-16 flex-col items-center py-4 bg-white border-r border-gray-100 sticky top-0 h-screen z-50 shrink-0">
//       <div
//         className="text-[#FF6600] font-black text-xl mb-8 cursor-pointer leading-tight text-center"
//         onClick={() => setActiveTab("home")}
//       >
//         MY
//         <br />
//         CHINA
//       </div>
//       <div className="flex flex-col gap-6 w-full">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeTab === item.id;
//           return (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`flex flex-col items-center gap-1 w-full py-2 transition-all group ${
//                 isActive
//                   ? "text-[#FF6600] border-r-2 border-[#FF6600]"
//                   : "text-gray-400 hover:text-[#FF6600]"
//               }`}
//             >
//               <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
//               <span
//                 className={`text-[10px] font-medium ${isActive ? "font-bold" : ""}`}
//               >
//                 {item.label}
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }
import React from "react";
import {
  LayoutGrid,
  ClipboardList,
  Package,
  Store,
  Globe,
  Truck,
  User,
  Home,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "orders", icon: ClipboardList, label: "Tracking" },
    { id: "product", icon: Package, label: "Services" },
    { id: "supplier", icon: Store, label: "Partners" },
    { id: "global", icon: Globe, label: "Global" },
    { id: "dist", icon: Truck, label: "Logistics" },
    { id: "me", icon: User, label: "Me" },
  ];

  return (
    <aside className="hidden lg:flex w-20 flex-col items-center py-6 bg-white border-r border-gray-100 sticky top-0 h-screen z-50 shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      {/* Compact Font-based Logo */}
      <div
        className="mb-8 cursor-pointer group"
        onClick={() => setActiveTab("home")}
      >
        <div className="flex flex-col items-center justify-center  text-[#FF6600] h-8 rounded shadow-sm  transition-colors">
          <span className="text-[12px] font-black tracking-tighter italic">
            MYCHINA
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 w-full py-2.5 rounded-xl transition-all relative group ${
                isActive
                  ? "text-[#FF6600] bg-orange-50/50"
                  : "text-gray-400 hover:text-[#FF6600] hover:bg-gray-50"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#FF6600] rounded-r-full" />
              )}
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className="group-hover:scale-110 transition-transform"
              />
              <span
                className={`text-[9px] font-bold tracking-tight ${isActive ? "opacity-100" : "opacity-70"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
