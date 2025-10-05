"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ComparisonBarChartProps {
  data: any[];
  dataKeys: { key: string; name: string; color: string }[];
  xAxisKey: string;
  yAxisLabel?: string;
}

export default function ComparisonBarChart({
  data,
  dataKeys,
  xAxisKey,
  yAxisLabel,
}: ComparisonBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey={xAxisKey}
          stroke="#6b7280"
          style={{ fontSize: "14px" }}
        />
        <YAxis
          stroke="#6b7280"
          style={{ fontSize: "14px" }}
          label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: "insideLeft" } : undefined}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "12px",
          }}
          cursor={{ fill: "rgba(74, 144, 226, 0.1)" }}
        />
        <Legend
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="rect"
        />
        {dataKeys.map((item) => (
          <Bar
            key={item.key}
            dataKey={item.key}
            name={item.name}
            fill={item.color}
            radius={[8, 8, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
