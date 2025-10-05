import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: string;
  icon: LucideIcon;
  href?: string;
  className?: string;
}

export default function MetricCard({
  title,
  value,
  trend,
  icon: Icon,
  href,
  className,
}: MetricCardProps) {
  const CardContent = () => (
    <div
      className={cn(
        "bg-card rounded-lg p-6 border border-gray-200 shadow-sm transition-all hover:shadow-md",
        href && "cursor-pointer hover:border-blue-light",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className="text-4xl font-bold text-navy mb-2">{value}</p>
          {trend && (
            <p className="text-sm text-success flex items-center gap-1">
              <span>↗</span> {trend}
            </p>
          )}
        </div>
        <div className="bg-blue-light/10 p-3 rounded-lg">
          <Icon className="text-blue-light" size={24} />
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
