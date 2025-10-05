"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-[60px] bg-navy text-white border-b border-navy-dark flex items-center px-6 fixed top-0 left-0 right-0 z-40">
      <button
        onClick={onMenuClick}
        className="lg:hidden mr-4 p-2 hover:bg-navy-dark rounded"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-3">
        <div className="text-blue-light font-bold text-xl">VanChat</div>
        <div className="hidden sm:block text-sm text-gray-300">
          Performance Analysis
        </div>
      </div>

      <div className="ml-auto text-sm text-gray-300">
        May-July 2025
      </div>
    </header>
  );
}
