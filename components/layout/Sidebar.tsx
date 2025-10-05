"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  LineChart,
  Lightbulb,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/sales", label: "Sales Analysis", icon: TrendingUp },
  { href: "/metrics", label: "Conversion Metrics", icon: Target },
  { href: "/traffic", label: "Traffic & Engagement", icon: Users },
  { href: "/benchmarks", label: "Industry Benchmarks", icon: BarChart3 },
  { href: "/projections", label: "Projections", icon: LineChart },
  { href: "/recommendations", label: "Recommendations", icon: Lightbulb },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-[60px] h-[calc(100vh-60px)] w-[250px] bg-white border-r border-gray-200 z-50 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-navy text-white"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © 2025 Kind Oasis
          </p>
        </div>
      </aside>
    </>
  );
}
