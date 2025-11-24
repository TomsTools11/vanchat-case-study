# VanChat Interactive Case Study Platform

A comprehensive, interactive web application showcasing VanChat's exceptional performance metrics from May-July 2025. This platform transforms static presentation data into dynamic, explorable visualizations with real-time interactivity.

![VanChat Dashboard](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)

## 🎯 Key Metrics

- **+83%** Sales Growth (Period 1 → Period 2)
- **28.6%** Add-to-Cart Rate (4.3x industry average)
- **21.1%** Chatbot Conversion Rate
- **+48.1%** Traffic Growth

## 🚀 Features

### Core Pages
- **Executive Dashboard** - Hero metrics with clickable cards and key findings
- **Sales Analysis** - Revenue growth, daily averages, customer acquisition
- **Conversion Metrics** - Funnel visualization and benchmark comparisons
- **Traffic & Engagement** - Visitor metrics and interaction quality
- **Industry Benchmarks** - VanChat vs e-commerce industry standards
- **Projections** - Interactive sliders for future forecasting
- **Recommendations** - Strategic action items with implementation timeline

### Interactive Components
- 📊 **Dynamic Charts** - Built with Recharts (bar, line, horizontal bar)
- 🔄 **Period Comparison Toggle** - Switch between First 30 Days, Second 30 Days, or Both
- 🎚️ **Interactive Sliders** - Adjust growth assumptions in real-time
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎨 **Clean Design** - Navy blue (#1e3a5f) and light blue (#4a90e2) color scheme

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Netlify](https://www.netlify.com/)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/GrowthScienceAI/vanchat-case-study.git

# Navigate to project directory
cd vanchat-case-study

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Netlify

1. Push code to GitHub repository
2. Connect repository to Netlify
3. Netlify will auto-detect Next.js settings
4. Deploy! 🚀

The `netlify.toml` configuration is already included.

## 📂 Project Structure

```
vanchat-case-study/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Executive Dashboard
│   ├── sales/page.tsx           # Sales Analysis
│   ├── metrics/page.tsx         # Conversion Metrics
│   ├── traffic/page.tsx         # Traffic & Engagement
│   ├── benchmarks/page.tsx      # Industry Benchmarks
│   ├── projections/page.tsx     # Future Projections
│   └── recommendations/page.tsx # Strategic Recommendations
├── components/
│   ├── layout/                  # Header, Sidebar, DashboardLayout
│   ├── dashboard/               # MetricCard
│   ├── charts/                  # Reusable chart components
│   └── shared/                  # PeriodToggle
├── lib/
│   ├── data.ts                  # Real VanChat performance data
│   └── utils.ts                 # Helper functions
├── public/
│   └── gs-logo-light.png        # Growth Science logo
└── tailwind.config.ts           # Tailwind configuration
```

## 📊 Data Source

All metrics are sourced from the VanChat performance analysis PDF covering May-July 2025:

- **Period 1 (First 30 Days):** $9,885 sales, 14,125 visitors
- **Period 2 (Second 30 Days):** $18,084 sales, 20,916 visitors
- **Industry Benchmarks:** 2025 e-commerce standards
- **Projections:** Months 3-4 based on current growth patterns

## 🎨 Design System

### Colors
- **Primary:** Navy Blue (#1e3a5f)
- **Secondary:** Light Blue (#4a90e2)
- **Success:** Green (#4caf50)
- **Danger:** Red (#f44336)
- **Background:** Light Gray (#f5f7fa)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, Navy Blue
- **Body:** Regular, 16px

## 🚧 Development

```bash
# Run development server with hot reload
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

## 📝 License

This project was built for Growth Science AI as an interactive case study platform.

## 🤝 Contributing

This is a production application. For bug reports or feature requests, please contact the development team.

---

*Made with ❤️ in Milwaukee, WI*

Co-Authored-By: Claude <noreply@anthropic.com>
