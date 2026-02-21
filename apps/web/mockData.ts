import React from "react";

export interface Product {
  id: string;
  title: string;
  price: number; // Price per kg or per service
  originalPrice?: number;
  sold: number;
  company: string;
  location: string;
  tags: string[];
  images: string[];
  category: string;
  minOrder: string;
  rating: number;
  repurchaseRate: string;
  type: 'shipping' | 'product' | 'investment';
  ratePerKg?: number;
  estimatedDays?: string;
}

export const CATEGORIES = [
  { name: "Air Cargo", icon: "Plane" },
  { name: "Sea Freight", icon: "Ship" },
  { name: "Consolidation", icon: "Package" },
  { name: "Procurement", icon: "ShoppingCart" },
  { name: "Investments", icon: "TrendingUp" },
  { name: "Groups", icon: "Users" },
  { name: "Customs Clear", icon: "FileCheck" },
  { name: "Warehousing", icon: "Warehouse" },
];

export const SUB_NAVS = [
  "Air Shipping",
  "Sea Shipping",
  "Consolidation",
  "Procurement",
  "Uganda Warehouse",
  "China Warehouse",
  "Express Delivery",
  "Tax Handling",
];

const UNSPLASH_IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Warehouse
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", // Shipping containers
  "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80", // Delivery
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80", // Logistics
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=80", // Truck
  "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&w=800&q=80", // Handshake
  "https://images.unsplash.com/photo-1454165833767-027ffea7028c?auto=format&fit=crop&w=800&q=80", // Business
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80", // Boxes
];

export const PRODUCTS: Product[] = [
  {
    id: "ship-1",
    title: "Express Air Cargo: China to Kampala (Door to Door)",
    price: 8.5,
    ratePerKg: 8.5,
    sold: 1240,
    company: "My China Logistics Ltd",
    location: "Guangzhou",
    tags: ["Fastest", "Insurance Incl."],
    images: [UNSPLASH_IMAGES[0], UNSPLASH_IMAGES[3]],
    category: "Air Cargo",
    minOrder: "1 kg",
    rating: 4.9,
    repurchaseRate: "85%",
    type: 'shipping',
    estimatedDays: "5-7 Days"
  },
  {
    id: "ship-2",
    title: "Economy Sea Freight: China to Uganda (Consolidated)",
    price: 450,
    ratePerKg: 2.1,
    sold: 850,
    company: "Pearl Shipping Services",
    location: "Ningbo",
    tags: ["Bulk Saver", "Tax Handled"],
    images: [UNSPLASH_IMAGES[1], UNSPLASH_IMAGES[4]],
    category: "Sea Freight",
    minOrder: "1 CBM",
    rating: 4.7,
    repurchaseRate: "72%",
    type: 'shipping',
    estimatedDays: "35-45 Days"
  },
  {
    id: "prod-1",
    title: "Luxury Automatic Mechanical Watch Waterproof Stainless Steel",
    price: 45.00,
    sold: 5200,
    company: "Guangzhou Watch Factory",
    location: "Guangdong",
    tags: ["Hot Sale", "Source Factory"],
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"],
    category: "Fashion",
    minOrder: "1 pc",
    rating: 4.8,
    repurchaseRate: "45%",
    type: 'product'
  },
  {
    id: "prod-2",
    title: "Premium Wireless Noise Cancelling Headphones Bluetooth 5.0",
    price: 28.50,
    sold: 3100,
    company: "Shenzhen Audio Tech",
    location: "Shenzhen",
    tags: ["Best Seller", "Fast Ship"],
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"],
    category: "Electronics",
    minOrder: "2 pcs",
    rating: 4.7,
    repurchaseRate: "30%",
    type: 'product'
  },
  {
    id: "inv-1",
    title: "Joint Investment: Solar Panel Distribution in Uganda",
    price: 1000,
    sold: 45,
    company: "Green Energy Partners",
    location: "Shenzhen",
    tags: ["High ROI", "Verified"],
    images: ["https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&w=800&q=80"],
    category: "Investments",
    minOrder: "1 Share",
    rating: 4.8,
    repurchaseRate: "15%",
    type: 'investment'
  }
];

// Fill up to 60 items with a mix of everything
const MIXED_TITLES = [
  "Cotton T-Shirt Unisex Summer Collection",
  "Professional DIY Tool Kit Heavy Duty",
  "Ergonomic Wireless Mouse 2.4G",
  "Portable Power Bank 20000mAh Fast Charge",
  "Designer Leather Handbag Elegant",
  "Smart Fitness Tracker Waterproof",
  "Industrial Sewing Machine High Speed",
  "Solar Street Light All-in-One",
  "Electric Scooter Foldable Adult",
  "Kitchen Knife Set Stainless Steel",
  "Yoga Mat Non-Slip Eco Friendly",
  "Baby Diapers Ultra Absorbent",
  "Pet Grooming Kit Professional",
  "Car Dash Cam 1080P Night Vision",
  "Gaming Keyboard Mechanical RGB",
];

for (let i = 6; i <= 60; i++) {
  const isShipping = i % 5 === 0;
  PRODUCTS.push({
    id: `item-${i}`,
    title: isShipping 
      ? `Procurement & Shipping Service ${i}` 
      : MIXED_TITLES[i % MIXED_TITLES.length] + ` - Batch ${i}`,
    price: Math.floor(Math.random() * 200) + 5,
    sold: Math.floor(Math.random() * 2000),
    company: "My China App Partners",
    location: i % 2 === 0 ? "Guangzhou" : "Yiwu",
    tags: i % 3 === 0 ? ["Verified", "Secure"] : ["Hot Sale"],
    images: [UNSPLASH_IMAGES[i % 8]],
    category: isShipping ? "Logistics" : "General Goods",
    minOrder: "1 unit",
    rating: 4.0 + Math.random(),
    repurchaseRate: (10 + Math.random() * 40).toFixed(1) + "%",
    type: isShipping ? 'shipping' : 'product'
  });
}

export const FEATURED_CARGO = [
  { id: 'f1', price: 8.5, img: UNSPLASH_IMAGES[0], label: "Air Cargo" },
  { id: 'f2', price: 2.1, img: UNSPLASH_IMAGES[1], label: "Sea Freight" },
  { id: 'f3', price: 5.0, img: UNSPLASH_IMAGES[3], label: "Consolidation" },
  { id: 'f4', price: 15.0, img: UNSPLASH_IMAGES[5], label: "Procurement" },
  { id: 'f5', price: 12.5, img: UNSPLASH_IMAGES[2], label: "Warehousing" },
  { id: 'f6', price: 9.9, img: UNSPLASH_IMAGES[4], label: "Trucking" },
  { id: 'f7', price: 18.0, img: UNSPLASH_IMAGES[6], label: "Customs" },
  { id: 'f8', price: 25.0, img: UNSPLASH_IMAGES[7], label: "Sourcing" },
];
