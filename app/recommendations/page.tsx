import { recommendations, heroMetrics } from "@/lib/data";
import { CheckCircle2, TrendingUp, Target, Users, Zap } from "lucide-react";

export default function RecommendationsPage() {
  const priorityColors = {
    High: "bg-danger/10 text-danger border-danger/20",
    Medium: "bg-blue-light/10 text-blue-light border-blue-light/20",
    Low: "bg-gray-100 text-gray-700 border-gray-200",
  };

  const priorityIcons = {
    High: "🔴",
    Medium: "🟡",
    Low: "🟢",
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2">Conclusions & Recommendations</h1>
        <p className="text-gray-600">
          Key findings and strategic next steps for VanChat optimization
        </p>
      </div>

      {/* Key Achievements */}
      <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-6 border border-success/20">
        <h3 className="mb-4 flex items-center gap-2">
          <CheckCircle2 className="text-success" size={24} />
          Key Achievements
        </h3>
        <p className="text-gray-700 mb-4">
          VanChat implementation has delivered exceptional results with <strong>83% sales growth</strong>,
          <strong> 4.3x higher add-to-cart rates</strong> than industry average, and top-tier chatbot
          conversion performance at <strong>21.07%</strong>.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-1">+{heroMetrics.salesGrowth}%</div>
            <div className="text-sm text-gray-600">Sales Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-1">{heroMetrics.addToCartRate}%</div>
            <div className="text-sm text-gray-600">Add-to-Cart Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-1">{heroMetrics.chatbotConversion}%</div>
            <div className="text-sm text-gray-600">Chatbot Conversion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-1">+{heroMetrics.trafficGrowth}%</div>
            <div className="text-sm text-gray-600">Traffic Growth</div>
          </div>
        </div>
      </div>

      {/* Growth Opportunities */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-4 flex items-center gap-2">
          <TrendingUp className="text-blue-light" size={24} />
          Growth Opportunities
        </h3>
        <p className="text-gray-700">
          Significant potential exists to increase interaction rate from current <strong>5.17%</strong> toward
          industry benchmark of <strong>10-15%</strong>, which would substantially boost overall conversion metrics.
        </p>
        <div className="mt-4 bg-background rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Interaction Rate Progress</span>
            <span className="text-sm font-bold">5.17% / 10-15% target</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-light h-3 rounded-full"
              style={{ width: "34%" }}
            />
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div>
        <h3 className="mb-6 flex items-center gap-2">
          <Target className="text-navy" size={24} />
          Strategic Recommendations
        </h3>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <details
              key={index}
              className="bg-card rounded-lg border border-gray-200 overflow-hidden group"
            >
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-2xl">{priorityIcons[rec.priority as keyof typeof priorityIcons]}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy mb-1">{rec.title}</h4>
                    <p className="text-sm text-gray-600">{rec.description}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      priorityColors[rec.priority as keyof typeof priorityColors]
                    }`}
                  >
                    {rec.priority} Priority
                  </span>
                </div>
              </summary>
              <div className="px-6 pb-6 pt-2 bg-background border-t border-gray-200">
                <h5 className="font-semibold text-sm mb-2">Implementation Steps:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {rec.title === "Traffic Acquisition Strategy" && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Develop multi-channel marketing campaigns (SEO, SEM, Social Media)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Target 43K-57K monthly visitors through paid and organic channels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Focus on qualified traffic to maintain high conversion rates</span>
                      </li>
                    </>
                  )}
                  {rec.title === "Increase Interaction Rate" && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Enhance chatbot visibility with prominent placement and triggers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Implement proactive engagement prompts at key customer journey points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Test different engagement strategies to reach 10-15% interaction rate</span>
                      </li>
                    </>
                  )}
                  {rec.title === "A/B Testing Implementation" && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Test different chatbot conversation flows and messaging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Optimize product recommendation algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Measure impact on conversion rates and iterate based on results</span>
                      </li>
                    </>
                  )}
                  {rec.title === "Targeted Marketing Campaigns" && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Develop customer segments based on behavior and preferences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Create personalized marketing messages for each segment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Monitor campaign performance and adjust targeting accordingly</span>
                      </li>
                    </>
                  )}
                  {rec.title === "Performance Monitoring" && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Set up automated dashboards for real-time performance tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Compare actual vs. projected metrics weekly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-light mt-1">•</span>
                        <span>Establish alert systems for significant deviations from targets</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="bg-card rounded-lg p-6 border border-gray-200">
        <h3 className="mb-6 flex items-center gap-2">
          <Zap className="text-navy" size={24} />
          Implementation Plan Timeline
        </h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 font-semibold text-navy">Week 1-2</div>
            <div className="flex-1">
              <p className="font-medium mb-1">Planning & Setup</p>
              <p className="text-sm text-gray-600">
                Establish performance monitoring dashboard, define KPIs, and plan A/B testing framework
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 font-semibold text-navy">Week 3-4</div>
            <div className="flex-1">
              <p className="font-medium mb-1">Quick Wins</p>
              <p className="text-sm text-gray-600">
                Enhance chatbot visibility, implement initial A/B tests, launch first targeted campaigns
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 font-semibold text-navy">Week 5-8</div>
            <div className="flex-1">
              <p className="font-medium mb-1">Scale & Optimize</p>
              <p className="text-sm text-gray-600">
                Expand traffic acquisition efforts, refine based on A/B test results, optimize conversion flows
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 font-semibold text-navy">Week 9-12</div>
            <div className="flex-1">
              <p className="font-medium mb-1">Full Implementation</p>
              <p className="text-sm text-gray-600">
                Achieve target traffic levels, maintain conversion rates, monitor and adjust strategies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-navy to-blue-light rounded-lg p-6 text-white">
        <h3 className="mb-4 text-white flex items-center gap-2">
          <Users className="text-white" size={24} />
          Next Steps
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Review & Approve</p>
            <p className="text-sm text-white/80">
              Review recommendations with stakeholders and secure approval for implementation
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Resource Allocation</p>
            <p className="text-sm text-white/80">
              Assign team members and allocate budget for marketing and optimization efforts
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Execute & Monitor</p>
            <p className="text-sm text-white/80">
              Begin implementation following the timeline and track progress against projections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
