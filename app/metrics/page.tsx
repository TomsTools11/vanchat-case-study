"use client";

import { useState } from "react";
import ComparisonBarChart from "@/components/charts/ComparisonBarChart";
import PeriodToggle, { Period } from "@/components/shared/PeriodToggle";
import { period1, period2, industryBenchmarks, performanceMultiplier } from "@/lib/data";
import { formatPercentage } from "@/lib/utils";

export default function MetricsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("both");

  const conversionData = [
    {
      metric: "Add-to-Cart Rate",
      ...(selectedPeriod !== "period2" && { period1: period1.addToCartRate }),
      ...(selectedPeriod !== "period1" && { period2: period2.addToCartRate }),
      industry: industryBenchmarks.addToCartAverage,
    },
    {
      metric: "Chatbot Conversion",
      ...(selectedPeriod !== "period2" && { period1: period1.chatbotConversionRate }),
      ...(selectedPeriod !== "period1" && { period2: period2.chatbotConversionRate }),
      industry: industryBenchmarks.chatbotConversionAverage,
    },
    {
      metric: "Interaction Rate",
      ...(selectedPeriod !== "period2" && { period1: period1.interactionRate }),
      ...(selectedPeriod !== "period1" && { period2: period2.interactionRate }),
      industry: industryBenchmarks.chatbotInteractionRate,
    },
  ];

  const getDataKeys = () => {
    const keys = [];
    if (selectedPeriod !== "period2") {
      keys.push({ key: "period1", name: "First 30 Days", color: "#4a90e2" });
    }
    if (selectedPeriod !== "period1") {
      keys.push({ key: "period2", name: "Second 30 Days", color: "#1e3a5f" });
    }
    keys.push({ key: "industry", name: "Industry Average", color: "#9ca3af" });
    return keys;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2">Conversion Metrics Analysis</h1>
        <p className="text-gray-600">
          Comparison of key conversion metrics between periods and against industry benchmarks
        </p>
      </div>

      {/* Period Toggle */}
      <div className="flex justify-between items-center">
        <PeriodToggle value={selectedPeriod} onChange={setSelectedPeriod} />
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Add-to-Cart Rate (Period 2)</p>
          <p className="text-3xl font-bold text-navy mb-1">{formatPercentage(period2.addToCartRate)}</p>
          <p className="text-sm text-success">
            {performanceMultiplier}x industry average
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Chatbot Conversion (Period 2)</p>
          <p className="text-3xl font-bold text-navy mb-1">{formatPercentage(period2.chatbotConversionRate)}</p>
          <p className="text-sm text-success">
            ↗ +{formatPercentage(period2.chatbotConversionRate - period1.chatbotConversionRate, 2)} from Period 1
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Add-to-Cart Actions</p>
          <p className="text-3xl font-bold text-navy mb-1">{period2.addToCartActions}</p>
          <p className="text-sm text-success">
            ↗ +132.4% growth
          </p>
        </div>
      </div>

      {/* Conversion Comparison Chart */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6">Conversion Rates: VanChat vs Industry</h3>
        <ComparisonBarChart
          data={conversionData}
          dataKeys={getDataKeys()}
          xAxisKey="metric"
          yAxisLabel="Conversion Rate (%)"
        />
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Add-to-Cart Improvement</h3>
          <p className="text-gray-700">
            Add-to-cart conversion rate increased from <strong>{formatPercentage(period1.addToCartRate)}</strong> to <strong>{formatPercentage(period2.addToCartRate)}</strong> between periods,
            representing a <strong>53.8%</strong> improvement and exceeding industry average by <strong>4.3x</strong>.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Chatbot Effectiveness</h3>
          <p className="text-gray-700">
            Chatbot conversion rate improved from <strong>{formatPercentage(period1.chatbotConversionRate)}</strong> to <strong>{formatPercentage(period2.chatbotConversionRate)}</strong>,
            showing a <strong>25.2%</strong> increase and positioning VanChat in the top tier of industry performance.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Customer Acquisition</h3>
          <p className="text-gray-700">
            Number of customers acquired through chatbot nearly doubled from <strong>{period1.customersOrdered}</strong> to <strong>{period2.customersOrdered}</strong>,
            demonstrating improved effectiveness in converting interactions to sales.
          </p>
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6">Conversion Funnel (Period 2)</h3>
        <div className="space-y-4">
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Total Visitors</span>
              <span className="text-sm font-bold">{period2.totalVisitors.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-12 relative overflow-hidden">
              <div
                className="bg-blue-light h-12 rounded-full flex items-center justify-center text-white font-semibold"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Chatbot Interactions</span>
              <span className="text-sm font-bold">{period2.chatbotInteractions.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-12 relative overflow-hidden">
              <div
                className="bg-blue-light h-12 rounded-full flex items-center justify-center text-white font-semibold"
                style={{ width: `${(period2.chatbotInteractions / period2.totalVisitors * 100)}%` }}
              >
                {formatPercentage(period2.interactionRate)}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Add-to-Cart Actions</span>
              <span className="text-sm font-bold">{period2.addToCartActions.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-12 relative overflow-hidden">
              <div
                className="bg-navy h-12 rounded-full flex items-center justify-center text-white font-semibold"
                style={{ width: `${(period2.addToCartActions / period2.totalVisitors * 100)}%` }}
              >
                {formatPercentage(period2.addToCartRate)}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Customers Ordered</span>
              <span className="text-sm font-bold">{period2.customersOrdered.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-12 relative overflow-hidden">
              <div
                className="bg-success h-12 rounded-full flex items-center justify-center text-white font-semibold"
                style={{ width: `${(period2.customersOrdered / period2.chatbotInteractions * 100)}%` }}
              >
                {formatPercentage(period2.chatbotConversionRate)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
