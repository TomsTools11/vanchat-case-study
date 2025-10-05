"use client";

import { useState } from "react";
import LineChartComponent from "@/components/charts/LineChartComponent";
import ComparisonBarChart from "@/components/charts/ComparisonBarChart";
import PeriodToggle, { Period } from "@/components/shared/PeriodToggle";
import { period1, period2, growthMetrics } from "@/lib/data";
import { formatNumber, formatPercentage } from "@/lib/utils";

export default function TrafficPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("both");

  const trafficData = [
    {
      metric: "Total Visitors",
      ...(selectedPeriod !== "period2" && { period1: period1.totalVisitors }),
      ...(selectedPeriod !== "period1" && { period2: period2.totalVisitors }),
    },
    {
      metric: "Chatbot Interactions",
      ...(selectedPeriod !== "period2" && { period1: period1.chatbotInteractions }),
      ...(selectedPeriod !== "period1" && { period2: period2.chatbotInteractions }),
    },
    {
      metric: "Add-to-Cart",
      ...(selectedPeriod !== "period2" && { period1: period1.addToCartActions }),
      ...(selectedPeriod !== "period1" && { period2: period2.addToCartActions }),
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
    return keys;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2">Traffic & Engagement Analysis</h1>
        <p className="text-gray-600">
          Comparing website traffic and visitor engagement metrics across periods
        </p>
      </div>

      {/* Period Toggle */}
      <div className="flex justify-between items-center">
        <PeriodToggle value={selectedPeriod} onChange={setSelectedPeriod} />
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Traffic Growth</p>
          <p className="text-3xl font-bold text-navy mb-1">+{growthMetrics.trafficGrowth}%</p>
          <p className="text-sm text-gray-500">
            {formatNumber(period1.totalVisitors)} → {formatNumber(period2.totalVisitors)}
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Interaction Rate (Period 2)</p>
          <p className="text-3xl font-bold text-navy mb-1">{formatPercentage(period2.interactionRate)}</p>
          <p className="text-sm text-success">
            ↗ Better engagement quality
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Chatbot Interactions Growth</p>
          <p className="text-3xl font-bold text-navy mb-1">+{growthMetrics.chatbotInteractionsGrowth}%</p>
          <p className="text-sm text-gray-500">
            {formatNumber(period1.chatbotInteractions)} → {formatNumber(period2.chatbotInteractions)}
          </p>
        </div>
      </div>

      {/* Traffic Comparison Chart */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6">Traffic & Engagement Metrics</h3>
        <ComparisonBarChart
          data={trafficData}
          dataKeys={getDataKeys()}
          xAxisKey="metric"
          yAxisLabel="Count"
        />
      </div>

      {/* Engagement Metrics */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6">Engagement Quality Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4">First 30 Days</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Interaction Rate</span>
                  <span className="text-sm font-bold">{formatPercentage(period1.interactionRate)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-light h-3 rounded-full"
                    style={{ width: `${period1.interactionRate * 10}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Add-to-Cart Rate</span>
                  <span className="text-sm font-bold">{formatPercentage(period1.addToCartRate)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-light h-3 rounded-full"
                    style={{ width: `${period1.addToCartRate}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Chatbot Conversion</span>
                  <span className="text-sm font-bold">{formatPercentage(period1.chatbotConversionRate)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-light h-3 rounded-full"
                    style={{ width: `${period1.chatbotConversionRate}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Second 30 Days</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Interaction Rate</span>
                  <span className="text-sm font-bold">{formatPercentage(period2.interactionRate)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-navy h-3 rounded-full"
                    style={{ width: `${period2.interactionRate * 10}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Add-to-Cart Rate</span>
                  <span className="text-sm font-bold">{formatPercentage(period2.addToCartRate)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-navy h-3 rounded-full"
                    style={{ width: `${period2.addToCartRate}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Chatbot Conversion</span>
                  <span className="text-sm font-bold">{formatPercentage(period2.chatbotConversionRate)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-navy h-3 rounded-full"
                    style={{ width: `${period2.chatbotConversionRate}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Traffic Growth</h3>
          <p className="text-gray-700">
            Total website visitors increased by <strong>48.1%</strong> from {formatNumber(period1.totalVisitors)} to {formatNumber(period2.totalVisitors)} between periods,
            showing strong audience expansion.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Engagement Improvement</h3>
          <p className="text-gray-700">
            Visitor interaction rate increased from <strong>{formatPercentage(period1.interactionRate)}</strong> to <strong>{formatPercentage(period2.interactionRate)}</strong>,
            indicating better engagement quality despite significant traffic growth.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <h3 className="mb-4">Chatbot Utilization</h3>
          <p className="text-gray-700">
            Chatbot interactions grew by <strong>55.5%</strong> from {formatNumber(period1.chatbotInteractions)} to {formatNumber(period2.chatbotInteractions)} visitors,
            with improved conversion quality ({formatPercentage(period1.chatbotConversionRate)} to {formatPercentage(period2.chatbotConversionRate)}).
          </p>
        </div>
      </div>
    </div>
  );
}
