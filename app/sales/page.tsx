"use client";

import { useState } from "react";
import ComparisonBarChart from "@/components/charts/ComparisonBarChart";
import PeriodToggle, { Period } from "@/components/shared/PeriodToggle";
import { period1, period2, growthMetrics } from "@/lib/data";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function SalesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("both");

  const salesComparisonData = [
    {
      metric: "Total Sales",
      period1: period1.totalSales,
      period2: period2.totalSales,
    },
    {
      metric: "Daily Average",
      period1: period1.dailyAverage,
      period2: period2.dailyAverage,
    },
    {
      metric: "Chatbot Sales",
      period1: period1.chatbotDrivenSales,
      period2: period2.chatbotDrivenSales,
    },
    {
      metric: "Customers",
      period1: period1.customersOrdered,
      period2: period2.customersOrdered,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2">Sales Performance Analysis</h1>
        <p className="text-gray-600">
          VanChat sales growth comparison between 30-day periods
        </p>
      </div>

      {/* Period Toggle */}
      <div className="flex justify-between items-center">
        <PeriodToggle value={selectedPeriod} onChange={setSelectedPeriod} />
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Total Sales Growth</p>
          <p className="text-3xl font-bold text-navy mb-1">+{growthMetrics.salesGrowth}%</p>
          <p className="text-sm text-gray-500">
            {formatCurrency(period1.totalSales)} → {formatCurrency(period2.totalSales)}
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Daily Average</p>
          <p className="text-3xl font-bold text-navy mb-1">{formatCurrency(period2.dailyAverage)}</p>
          <p className="text-sm text-success">
            ↗ +{Math.round(((period2.dailyAverage - period1.dailyAverage) / period1.dailyAverage) * 100)}% from Period 1
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Chatbot-Driven Sales</p>
          <p className="text-3xl font-bold text-navy mb-1">{formatCurrency(period2.chatbotDrivenSales)}</p>
          <p className="text-sm text-gray-500">
            {formatCurrency(period1.chatbotDrivenSales)} in Period 1
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Customers Acquired</p>
          <p className="text-3xl font-bold text-navy mb-1">{formatNumber(period2.customersOrdered)}</p>
          <p className="text-sm text-success">
            ↗ +{growthMetrics.customersGrowth}% growth
          </p>
        </div>
      </div>

      {/* Sales Comparison Chart */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6">Sales Metrics Comparison</h3>
        <ComparisonBarChart
          data={salesComparisonData}
          dataKeys={[
            { key: "period1", name: "First 30 Days", color: "#4a90e2" },
            { key: "period2", name: "Second 30 Days", color: "#1e3a5f" },
          ]}
          xAxisKey="metric"
          yAxisLabel="Value ($)"
        />
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Exceptional Growth</h3>
          <p className="text-gray-700 mb-4">
            Sales increased by <strong>83%</strong> from ${formatNumber(period1.totalSales)} to ${formatNumber(period2.totalSales)}
            between the first and second 30-day periods, significantly outpacing industry average growth rates.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Revenue Acceleration</h3>
          <p className="text-gray-700 mb-4">
            Daily average sales increased from <strong>${formatNumber(period1.dailyAverage)}</strong> to <strong>${formatNumber(period2.dailyAverage)}</strong>,
            demonstrating consistent momentum and improved conversion efficiency.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Chatbot Impact</h3>
          <p className="text-gray-700 mb-4">
            Enhanced VanChat performance drove <strong>{formatNumber(period2.customersOrdered)} customers</strong> to order in the second period,
            a <strong>94.6%</strong> increase from the first period's {formatNumber(period1.customersOrdered)} customers.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Growth Trajectory</h3>
          <p className="text-gray-700 mb-4">
            The consistent upward trend suggests continued growth potential with proper scaling strategies,
            with projections indicating further acceleration.
          </p>
        </div>
      </div>
    </div>
  );
}
