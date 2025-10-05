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

interface HorizontalBarChartProps {
  data: any[];
  dataKeys: { key: string; name: string; color: string }[];
  yAxisKey: string;
}

export default function HorizontalBarChart({
  data,
  dataKeys,
  yAxisKey,
}: HorizontalBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis type="number" stroke="#6b7280" style={{ fontSize: "14px" }} />
        <YAxis
          type="category"
          dataKey={yAxisKey}
          stroke="#6b7280"
          style={{ fontSize: "14px" }}
          width={110}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "12px",
          }}
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
            radius={[0, 8, 8, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
