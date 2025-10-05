"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface LineChartComponentProps {
  data: any[];
  dataKeys: { key: string; name: string; color: string }[];
  xAxisKey: string;
  yAxisLabel?: string;
}

export default function LineChartComponent({
  data,
  dataKeys,
  xAxisKey,
  yAxisLabel,
}: LineChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
        />
        <Legend
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="line"
        />
        {dataKeys.map((item) => (
          <Line
            key={item.key}
            type="monotone"
            dataKey={item.key}
            name={item.name}
            stroke={item.color}
            strokeWidth={3}
            dot={{ fill: item.color, r: 5 }}
            activeDot={{ r: 7 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
