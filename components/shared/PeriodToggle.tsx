"use client";

import { cn } from "@/lib/utils";

export type Period = "period1" | "period2" | "both";

interface PeriodToggleProps {
  value: Period;
  onChange: (value: Period) => void;
}

export default function PeriodToggle({ value, onChange }: PeriodToggleProps) {
  const options: { value: Period; label: string }[] = [
    { value: "period1", label: "First 30 Days" },
    { value: "period2", label: "Second 30 Days" },
    { value: "both", label: "Both Periods" },
  ];

  return (
    <div className="inline-flex bg-gray-100 rounded-lg p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-all",
            value === option.value
              ? "bg-navy text-white shadow-sm"
              : "text-gray-700 hover:text-navy"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
