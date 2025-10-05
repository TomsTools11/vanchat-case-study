// VanChat Performance Data - Real metrics from May-July 2025

export interface PeriodData {
  period: string;
  totalSales: number;
  dailyAverage: number;
  totalVisitors: number;
  chatbotInteractions: number;
  addToCartActions: number;
  customersOrdered: number;
  chatbotDrivenSales: number;
  addToCartRate: number;
  chatbotConversionRate: number;
  interactionRate: number;
}

export interface GrowthMetrics {
  salesGrowth: number;
  trafficGrowth: number;
  addToCartGrowth: number;
  chatbotInteractionsGrowth: number;
  customersGrowth: number;
}

export interface IndustryBenchmarks {
  addToCartAverage: number;
  chatbotInteractionRate: number;
  chatbotConversionAverage: number;
  averageOrderValue: number;
}

export interface ProjectionData {
  month: string;
  projectedSales: number;
  requiredVisitors: number;
  expectedInteractions: number;
  growthRate: number;
}

// Period 1: First 30 Days (May 2025)
export const period1: PeriodData = {
  period: "First 30 Days",
  totalSales: 9885,
  dailyAverage: 329,
  totalVisitors: 14125,
  chatbotInteractions: 710,
  addToCartActions: 481,
  customersOrdered: 129,
  chatbotDrivenSales: 5000,
  addToCartRate: 21.55,
  chatbotConversionRate: 18.17,
  interactionRate: 5.03,
};

// Period 2: Second 30 Days (June 2025)
export const period2: PeriodData = {
  period: "Second 30 Days",
  totalSales: 18084,
  dailyAverage: 603,
  totalVisitors: 20916,
  chatbotInteractions: 1104,
  addToCartActions: 1118,
  customersOrdered: 251,
  chatbotDrivenSales: 9700,
  addToCartRate: 33.15,
  chatbotConversionRate: 22.74,
  interactionRate: 5.28,
};

// Growth Metrics
export const growthMetrics: GrowthMetrics = {
  salesGrowth: 83.0,
  trafficGrowth: 48.1,
  addToCartGrowth: 132.4,
  chatbotInteractionsGrowth: 55.5,
  customersGrowth: 94.6,
};

// Hero Metrics (Combined/Overall)
export const heroMetrics = {
  salesGrowth: 83,
  addToCartRate: 28.6,
  chatbotConversion: 21.1,
  trafficGrowth: 48.1,
};

// Industry Benchmarks (2025)
export const industryBenchmarks: IndustryBenchmarks = {
  addToCartAverage: 6.61,
  chatbotInteractionRate: 8.5,
  chatbotConversionAverage: 15,
  averageOrderValue: 60,
};

// VanChat Average Order Value
export const vanchatAOV = 72;

// Performance Multiplier
export const performanceMultiplier = 4.3; // VanChat vs Industry Add-to-Cart

// Future Projections
export const projections: ProjectionData[] = [
  {
    month: "Month 3 (July 2025)",
    projectedSales: 26284,
    requiredVisitors: 43000,
    expectedInteractions: 2200,
    growthRate: 45.3,
  },
  {
    month: "Month 4 (August 2025)",
    projectedSales: 34484,
    requiredVisitors: 57000,
    expectedInteractions: 3000,
    growthRate: 31.2,
  },
];

// Key Findings
export const keyFindings = [
  "Sales Growth: 83% increase from $9,885 to $18,084 between periods",
  "Conversion: 28.6% add-to-cart rate (4.3x industry average)",
  "Engagement: 55.5% increase in chatbot interactions",
  "Projections: $26,284 and $34,484 for next two months",
];

// Strategic Recommendations
export const recommendations = [
  {
    title: "Traffic Acquisition Strategy",
    description: "Develop comprehensive traffic acquisition strategy to reach 43K-57K monthly visitors needed for projected growth",
    priority: "High",
  },
  {
    title: "Increase Interaction Rate",
    description: "Increase interaction rate from current 5.17% toward industry benchmark of 10-15% to substantially boost overall conversion metrics",
    priority: "High",
  },
  {
    title: "A/B Testing Implementation",
    description: "Implement A/B testing for chatbot conversation flows to optimize user experience and conversion rates",
    priority: "Medium",
  },
  {
    title: "Targeted Marketing Campaigns",
    description: "Develop targeted marketing campaigns to increase qualified traffic while maintaining high conversion rates",
    priority: "Medium",
  },
  {
    title: "Performance Monitoring",
    description: "Establish performance monitoring system to track actual vs. projected metrics and adjust strategies accordingly",
    priority: "Medium",
  },
];

// Analysis Methodology Steps
export const methodologySteps = [
  { step: 1, title: "Data Collection", description: "from VanChat dashboard" },
  { step: 2, title: "Period Comparison", description: "between 30-day periods" },
  { step: 3, title: "Benchmark Research", description: "from industry sources" },
  { step: 4, title: "Comparative Analysis", description: "against standards" },
  { step: 5, title: "Predictive Modeling", description: "for future performance" },
  { step: 6, title: "Strategic Assessment", description: "and recommendations" },
];
