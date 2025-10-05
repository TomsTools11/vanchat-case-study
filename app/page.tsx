import { TrendingUp, ShoppingCart, MessageSquare, Users } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import { heroMetrics, keyFindings, methodologySteps } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="mb-2">Executive Dashboard</h1>
        <p className="text-gray-600">
          Comprehensive evaluation of chatbot metrics, industry benchmarks, and
          future projections
        </p>
      </div>

      {/* Hero Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Sales Growth"
          value={`+${heroMetrics.salesGrowth}%`}
          icon={TrendingUp}
          href="/sales"
          trend="From Period 1 to Period 2"
        />
        <MetricCard
          title="Add-to-Cart Rate"
          value={`${heroMetrics.addToCartRate}%`}
          icon={ShoppingCart}
          href="/metrics"
          trend="4.3x industry average"
        />
        <MetricCard
          title="Chatbot Conversion"
          value={`${heroMetrics.chatbotConversion}%`}
          icon={MessageSquare}
          href="/metrics"
          trend="Top-tier performance"
        />
        <MetricCard
          title="Traffic Growth"
          value={`+${heroMetrics.trafficGrowth}%`}
          icon={Users}
          href="/traffic"
          trend="Strong audience expansion"
        />
      </div>

      {/* Reporting Period */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-3">Reporting Period</h3>
        <p className="text-gray-700">
          This analysis covers <strong>May-July 2025</strong>, evaluating VanChat
          performance across two distinct 30-day periods. The data demonstrates
          exceptional growth in sales, conversion rates, and customer engagement
          metrics.
        </p>
      </div>

      {/* Key Findings */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-4">Key Findings</h3>
        <ul className="space-y-3">
          {keyFindings.map((finding, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-light text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                {index + 1}
              </span>
              <span className="text-gray-700">{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Methodology Overview */}
      <details className="bg-card rounded-lg border border-gray-200">
        <summary className="p-6 cursor-pointer font-semibold text-navy hover:text-blue-light transition-colors">
          Analysis Methodology
        </summary>
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {methodologySteps.map((step) => (
              <div
                key={step.step}
                className="bg-background rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </span>
                  <h4 className="font-semibold text-sm">{step.title}</h4>
                </div>
                <p className="text-sm text-gray-600 ml-11">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </details>

      {/* Quick Links */}
      <div className="bg-gradient-to-r from-navy to-blue-light rounded-lg p-6 text-white">
        <h3 className="mb-4 text-white">Explore Detailed Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/sales"
            className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
          >
            <h4 className="font-semibold text-white mb-1">Sales Performance</h4>
            <p className="text-sm text-white/80">
              Deep dive into revenue growth and customer acquisition
            </p>
          </a>
          <a
            href="/benchmarks"
            className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
          >
            <h4 className="font-semibold text-white mb-1">
              Industry Benchmarks
            </h4>
            <p className="text-sm text-white/80">
              Compare VanChat performance against industry standards
            </p>
          </a>
          <a
            href="/projections"
            className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
          >
            <h4 className="font-semibold text-white mb-1">
              Future Projections
            </h4>
            <p className="text-sm text-white/80">
              Model future performance scenarios for Months 3-4
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
