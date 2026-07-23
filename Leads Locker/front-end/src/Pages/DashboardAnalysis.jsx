import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardAnalysis = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState("30d");

  // Core Key Performance Indicators
  const metrics = {
    totalLeads: 1248,
    contactedLeads: 856,
    closedDeals: 312,
    conversionRate: "36.4%",
    avgDealCycle: "14 Days",
    marketDemandScore: "88/100",
  };

  // Lead Funnel Progression Data
  const funnelStages = [
    {
      label: "Total Ingested Leads",
      count: 1248,
      percentage: 100,
      color: "bg-indigo-500",
    },
    {
      label: "Engaged / Outreached",
      count: 856,
      percentage: 68.5,
      color: "bg-blue-500",
    },
    {
      label: "Qualified / Hot",
      count: 520,
      percentage: 41.6,
      color: "bg-purple-500",
    },
    {
      label: "Closed / Won",
      count: 312,
      percentage: 25.0,
      color: "bg-emerald-500",
    },
  ];

  // High Demand Market Categories / Topics
  const marketDemands = [
    {
      category: "AI Marketing Automation",
      demand: "High",
      growth: "+42%",
      trend: "up",
      score: 94,
    },
    {
      category: "SaaS Lead Scraping",
      demand: "Very High",
      growth: "+28%",
      trend: "up",
      score: 89,
    },
    {
      category: "E-commerce Retargeting",
      demand: "Medium",
      growth: "-4%",
      trend: "down",
      score: 62,
    },
    {
      category: "Cold Email Outreach",
      demand: "High",
      growth: "+18%",
      trend: "up",
      score: 78,
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-6 md:p-10 relative overflow-hidden font-sans">
      {/* Background Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-white/[0.06] pb-6">
        <div>
          {/* Back to Chat Button */}
          <button
            onClick={() => navigate("/home")}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white mb-3 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] transition-all cursor-pointer group"
          >
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:-translate-x-0.5 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Chat
          </button>

          <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
            Leads Analytics & Demand
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
              <svg
                className="w-3 h-3 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Live Updates
            </span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Real-time pipeline performance, conversion rates, and current market
            demand trends.
          </p>
        </div>

        {/* Timeframe Controls & Refresh */}
        <div className="flex items-center gap-3">
          <div className="bg-[#05070d] border border-white/[0.08] p-1 rounded-xl flex items-center">
            {["7d", "30d", "90d"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeframe(range)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  timeframe === range
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>

          <button className="p-2.5 bg-[#05070d] border border-white/[0.08] hover:border-white/20 rounded-xl text-slate-300 hover:text-white transition-all">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 space-y-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MetricCard
            title="Total Ingested Leads"
            value={metrics.totalLeads.toLocaleString()}
            subText="+12% from last month"
            trend="up"
            icon={
              <svg
                className="w-5 h-5 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
          />
          <MetricCard
            title="Contacted Leads"
            value={metrics.contactedLeads.toLocaleString()}
            subText="68.5% outreach rate"
            trend="up"
            icon={
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          />
          <MetricCard
            title="Closed Deals"
            value={metrics.closedDeals.toLocaleString()}
            subText="Target: 300 / mo"
            trend="up"
            icon={
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
          <MetricCard
            title="Market Demand Index"
            value={metrics.marketDemandScore}
            subText="High demand signal"
            trend="up"
            icon={
              <svg
                className="w-5 h-5 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
              </svg>
            }
          />
        </div>

        {/* Section: Funnel Analytics & Demand Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lead Funnel Breakdown */}
          <div className="lg:col-span-2 bg-[#05070d]/80 backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Pipeline Conversion Funnel
                </h2>
                <p className="text-xs text-slate-400">
                  Out of total outreach vs successfully closed deals
                </p>
              </div>
              <span className="text-2xl font-bold text-emerald-400">
                {metrics.conversionRate}{" "}
                <span className="text-xs font-normal text-slate-400">
                  Win Rate
                </span>
              </span>
            </div>

            {/* Funnel Progress Bars */}
            <div className="space-y-5">
              {funnelStages.map((stage, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-medium">
                      {stage.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold">
                        {stage.count}
                      </span>
                      <span className="text-xs text-slate-500 w-12 text-right">
                        {stage.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-900/90 h-3 rounded-full overflow-hidden border border-white/[0.04]">
                    <div
                      className={`h-full ${stage.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${stage.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stat Footer */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-400">Average Sales Cycle</p>
                <p className="text-base font-semibold text-white mt-0.5">
                  {metrics.avgDealCycle}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Leads Pending Outreach</p>
                <p className="text-base font-semibold text-white mt-0.5">
                  392 Leads
                </p>
              </div>
            </div>
          </div>

          {/* Market Demand Tracker */}
          <div className="bg-[#05070d]/80 backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                  </svg>
                  Market Demand Signals
                </h2>
                <svg
                  className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>

              <div className="space-y-4">
                {marketDemands.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {item.category}
                        </h4>
                        <span className="text-xs text-slate-400 mt-0.5 inline-block">
                          Demand:{" "}
                          <span className="text-indigo-400 font-medium">
                            {item.demand}
                          </span>
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
                          item.trend === "up"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-rose-500/10 text-rose-400"
                        }`}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                              item.trend === "up"
                                ? "M7 17L17 7M17 7H7M17 7V17"
                                : "M17 7L7 17M7 17H17M7 17V7"
                            }
                          />
                        </svg>
                        {item.growth}
                      </span>
                    </div>

                    {/* Mini Meter */}
                    <div className="mt-3 w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full mt-6 py-2.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 rounded-xl text-xs font-semibold transition-all cursor-pointer">
              Explore Targeted Lead Signals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Metric Card Sub-component
const MetricCard = ({ title, value, subText, icon, trend }) => {
  return (
    <div className="bg-[#05070d]/80 backdrop-blur-md border border-white/[0.06] p-5 rounded-2xl shadow-xl relative overflow-hidden group hover:border-white/15 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">{title}</span>
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          {icon}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-2xl font-black text-white tracking-tight">
          {value}
        </h3>
        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
          {trend === "up" && (
            <svg
              className="w-3 h-3 text-emerald-400 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          )}
          {subText}
        </p>
      </div>
    </div>
  );
};

export default DashboardAnalysis;
