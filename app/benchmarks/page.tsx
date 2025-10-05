"use client";

import HorizontalBarChart from "@/components/charts/HorizontalBarChart";
import { period1, period2, industryBenchmarks, performanceMultiplier, vanchatAOV } from "@/lib/data";
import { formatPercentage } from "@/lib/utils";

export default function BenchmarksPage() {
  const benchmarkData = [
    {
      metric: "Add-to-Cart Rate (%)",
      vanchat: (period1.addToCartRate + period2.addToCartRate) / 2,
      industry: industryBenchmarks.addToCartAverage,
    },
    {
      metric: "Chatbot Interaction (%)",
      vanchat: (period1.interactionRate + period2.interactionRate) / 2,
      industry: industryBenchmarks.chatbotInteractionRate,
    },
    {
      metric: "Chatbot Conversion (%)",
      vanchat: (period1.chatbotConversionRate + period2.chatbotConversionRate) / 2,
      industry: industryBenchmarks.chatbotConversionAverage,
    },
    {
      metric: "Avg Order Value ($)",
      vanchat: vanchatAOV,
      industry: industryBenchmarks.averageOrderValue,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2">Industry Benchmarks Comparison</h1>
        <p className="text-gray-600">
          VanChat performance metrics compared to e-commerce industry standards (2025)
        </p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-6 border border-success/20">
          <p className="text-sm text-gray-600 mb-2">Performance Multiplier</p>
          <p className="text-4xl font-bold text-success mb-1">{performanceMultiplier}x</p>
          <p className="text-sm text-gray-700">
            Higher than industry average add-to-cart rate
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-light/10 to-blue-light/5 rounded-lg p-6 border border-blue-light/20">
          <p className="text-sm text-gray-600 mb-2">Top Tier Performance</p>
          <p className="text-4xl font-bold text-blue-light mb-1">Top 2%</p>
          <p className="text-sm text-gray-700">
            Ranking among e-commerce platforms
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy/10 to-navy/5 rounded-lg p-6 border border-navy/20">
          <p className="text-sm text-gray-600 mb-2">Conversion Excellence</p>
          <p className="text-4xl font-bold text-navy mb-1">{formatPercentage((period1.chatbotConversionRate + period2.chatbotConversionRate) / 2)}</p>
          <p className="text-sm text-gray-700">
            Average chatbot conversion rate
          </p>
        </div>
      </div>

      {/* Benchmark Comparison Chart */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6">VanChat vs Industry Standards</h3>
        <HorizontalBarChart
          data={benchmarkData}
          dataKeys={[
            { key: "vanchat", name: "VanChat Performance", color: "#1e3a5f" },
            { key: "industry", name: "Industry Average", color: "#9ca3af" },
          ]}
          yAxisKey="metric"
        />
      </div>

      {/* Detailed Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg">Superior Conversion</h3>
          </div>
          <p className="text-gray-700 mb-3">
            VanChat's add-to-cart rate (<strong>28.6%</strong>) is <strong>4.3x higher</strong> than the industry average of 6.61%,
            placing it in the <strong>top 2%</strong> of e-commerce platforms.
          </p>
          <div className="pt-3 border-t border-gray-200">
            <div className="text-sm text-gray-600">VanChat: <span className="font-bold text-navy">28.6%</span></div>
            <div className="text-sm text-gray-600">Industry: <span className="font-bold">6.61%</span></div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-light/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg">Engagement Excellence</h3>
          </div>
          <p className="text-gray-700 mb-3">
            Chatbot interaction rate (<strong>5.17%</strong>) is approaching industry benchmarks (8.5%),
            with significant room for growth through enhanced visibility and prompts.
          </p>
          <div className="pt-3 border-t border-gray-200">
            <div className="text-sm text-gray-600">VanChat: <span className="font-bold text-navy">5.17%</span></div>
            <div className="text-sm text-gray-600">Industry: <span className="font-bold">8.5%</span></div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg">Conversion Efficiency</h3>
          </div>
          <p className="text-gray-700 mb-3">
            VanChat's <strong>21.07%</strong> conversion rate from chatbot interactions exceeds the industry average of 15%,
            demonstrating exceptional conversation flow effectiveness.
          </p>
          <div className="pt-3 border-t border-gray-200">
            <div className="text-sm text-gray-600">VanChat: <span className="font-bold text-navy">21.07%</span></div>
            <div className="text-sm text-gray-600">Industry: <span className="font-bold">15%</span></div>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-4">Benchmark Data Sources</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm">
            <span className="text-blue-light">•</span>
            <div>
              <strong>Dynamic Yield E-commerce Benchmarks 2025</strong>
              <p className="text-gray-600">Industry standard conversion rates and engagement metrics</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-blue-light">•</span>
            <div>
              <strong>Tidio Chatbot Analytics Report 2025</strong>
              <p className="text-gray-600">Chatbot interaction and conversion benchmarks</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-blue-light">•</span>
            <div>
              <strong>Network Solutions E-commerce Conversion Study 2025</strong>
              <p className="text-gray-600">Cross-industry e-commerce performance data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Opportunities */}
      <div className="bg-gradient-to-r from-navy to-blue-light rounded-lg p-6 text-white">
        <h3 className="mb-4 text-white">Growth Opportunities</h3>
        <p className="text-white/90 mb-4">
          While VanChat significantly outperforms industry standards in conversion metrics,
          there's substantial potential to increase the interaction rate from the current 5.17%
          toward the industry benchmark of 10-15%. This optimization could substantially boost
          overall conversion metrics and revenue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-semibold mb-1">Current State</p>
            <p className="text-sm text-white/80">5.17% interaction rate</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-semibold mb-1">Target Opportunity</p>
            <p className="text-sm text-white/80">10-15% interaction rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
