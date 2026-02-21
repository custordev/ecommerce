import React from "react";
import { Home, MessageSquare, ShoppingCart, User, ClipboardList } from "lucide-react";

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileNav({ activeTab, setActiveTab }: MobileNavProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Recommend" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "orders", icon: ClipboardList, label: "Tracking" },
    { id: "me", icon: User, label: "Me" },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-2 z-50 flex justify-around items-center safe-area-bottom">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-0.5 transition-colors relative ${
              isActive ? "text-[#FF6600]" : "text-gray-400"
            }`}
          >
            {isActive && tab.id === 'home' && (
              <div className="absolute -top-1 w-1 h-1 bg-[#FF6600] rounded-full" />
            )}
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
