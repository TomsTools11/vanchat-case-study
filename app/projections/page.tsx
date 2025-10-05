"use client";

import { useState } from "react";
import LineChartComponent from "@/components/charts/LineChartComponent";
import { period1, period2, projections } from "@/lib/data";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function ProjectionsPage() {
  const [growthRate, setGrowthRate] = useState(45);
  const [conversionRate, setConversionRate] = useState(21);

  // Calculate adjusted projections based on slider values
  const month3Adjusted = Math.round(period2.totalSales * (1 + growthRate / 100));
  const month4Adjusted = Math.round(month3Adjusted * (1 + growthRate / 100 * 0.7));

  const projectionChartData = [
    {
      month: "Month 1\n(Actual)",
      sales: period1.totalSales,
      visitors: Math.round(period1.totalVisitors / 1000),
      interactions: Math.round(period1.chatbotInteractions / 100),
    },
    {
      month: "Month 2\n(Actual)",
      sales: period2.totalSales,
      visitors: Math.round(period2.totalVisitors / 1000),
      interactions: Math.round(period2.chatbotInteractions / 100),
    },
    {
      month: "Month 3\n(Projected)",
      sales: month3Adjusted,
      visitors: Math.round(projections[0].requiredVisitors / 1000),
      interactions: Math.round(projections[0].expectedInteractions / 100),
    },
    {
      month: "Month 4\n(Projected)",
      sales: month4Adjusted,
      visitors: Math.round(projections[1].requiredVisitors / 1000),
      interactions: Math.round(projections[1].expectedInteractions / 100),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2">Future Performance Projections</h1>
        <p className="text-gray-600">
          Predictive model showing projected performance for the next two months
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6">Adjust Projection Assumptions</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">Growth Rate</label>
              <span className="text-sm font-bold text-navy">{growthRate}%</span>
            </div>
            <input
              type="range"
              min="30"
              max="60"
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>30%</span>
              <span>45%</span>
              <span>60%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">Target Conversion Rate</label>
              <span className="text-sm font-bold text-navy">{conversionRate}%</span>
            </div>
            <input
              type="range"
              min="15"
              max="30"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>15%</span>
              <span>22%</span>
              <span>30%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projection Chart */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6">Sales Projection Trend</h3>
        <LineChartComponent
          data={projectionChartData}
          dataKeys={[
            { key: "sales", name: "Sales ($)", color: "#1e3a5f" },
          ]}
          xAxisKey="month"
          yAxisLabel="Sales ($)"
        />
      </div>

      {/* Projected Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Month 3 Projections (July 2025)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Projected Sales</span>
              <span className="text-lg font-bold text-navy">{formatCurrency(month3Adjusted)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Growth Rate</span>
              <span className="text-lg font-bold text-success">+{growthRate}%</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Required Visitors</span>
              <span className="text-lg font-bold text-navy">{formatNumber(projections[0].requiredVisitors)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Expected Interactions</span>
              <span className="text-lg font-bold text-navy">{formatNumber(projections[0].expectedInteractions)}</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Month 4 Projections (August 2025)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Projected Sales</span>
              <span className="text-lg font-bold text-navy">{formatCurrency(month4Adjusted)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Growth Rate</span>
              <span className="text-lg font-bold text-success">+{Math.round(growthRate * 0.7)}%</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Required Visitors</span>
              <span className="text-lg font-bold text-navy">{formatNumber(projections[1].requiredVisitors)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Expected Interactions</span>
              <span className="text-lg font-bold text-navy">{formatNumber(projections[1].expectedInteractions)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Sales Growth Trajectory</h3>
          <p className="text-gray-700 mb-4">
            Projected sales of <strong>{formatCurrency(projections[0].projectedSales)}</strong> for Month 3 (+45.3%)
            and <strong>{formatCurrency(projections[1].projectedSales)}</strong> for Month 4 (+31.2%),
            based on current growth patterns and seasonal adjustments.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Traffic Requirements</h3>
          <p className="text-gray-700 mb-4">
            To achieve projected sales targets, monthly visitors need to reach <strong>43K-57K</strong>,
            requiring strategic marketing initiatives to drive qualified traffic.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Conversion Optimization</h3>
          <p className="text-gray-700 mb-4">
            Maintaining the current <strong>21.07%</strong> chatbot conversion rate while scaling traffic
            will be critical to achieving projected growth targets.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Resource Planning</h3>
          <p className="text-gray-700 mb-4">
            Projected chatbot interactions will reach <strong>2.2K-3K monthly</strong>,
            requiring adequate staffing and system capacity to maintain service quality.
          </p>
        </div>
      </div>

      {/* Scenarios */}
      <div className="bg-gradient-to-r from-navy to-blue-light rounded-lg p-6 text-white">
        <h3 className="mb-4 text-white">Projection Scenarios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-semibold mb-2">Conservative (30%)</p>
            <p className="text-2xl font-bold mb-1">{formatCurrency(Math.round(period2.totalSales * 1.3))}</p>
            <p className="text-sm text-white/80">Month 3 projected sales</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4 ring-2 ring-white/50">
            <p className="font-semibold mb-2">Realistic (45%)</p>
            <p className="text-2xl font-bold mb-1">{formatCurrency(month3Adjusted)}</p>
            <p className="text-sm text-white/80">Month 3 projected sales</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-semibold mb-2">Optimistic (60%)</p>
            <p className="text-2xl font-bold mb-1">{formatCurrency(Math.round(period2.totalSales * 1.6))}</p>
            <p className="text-sm text-white/80">Month 3 projected sales</p>
          </div>
        </div>
      </div>
    </div>
  );
}
