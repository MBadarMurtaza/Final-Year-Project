import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Historical activity logs
  const historyLogs = [
    {
      id: 1,
      type: "Lead Export",
      category: "Exports",
      title: "Exported 250 SaaS Founders to CSV",
      description:
        "Query: 'SaaS CEOs in US with > $1M ARR'. File generated successfully.",
      timestamp: "Today at 09:42 AM",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      actionText: "Download CSV",
      icon: (
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
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      type: "AI Query",
      category: "Searches",
      title: "Searched for 'E-commerce Marketing VPs'",
      description:
        "Discovered 42 verified decision-makers across Shopify Plus agencies.",
      timestamp: "Yesterday at 04:15 PM",
      iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      actionText: "Re-run Query",
      icon: (
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      type: "Email Sequence",
      category: "Outreach",
      title: "Triggered Cold Email Sequence #4",
      description:
        "Sent personalized AI pitch to 18 saved contacts from Apex Automation.",
      timestamp: "Jul 21, 2026",
      iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      actionText: "View Sequence",
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      type: "Saved Prospect",
      category: "Saved",
      title: "Added 5 New Prospects to 'Hot Leads'",
      description:
        "Saved Alex Morgan, Sophia Chen, and 3 others from search session.",
      timestamp: "Jul 20, 2026",
      iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      actionText: "View Saved",
      icon: (
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
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      ),
    },
  ];

  // Filtering Logic
  const filteredLogs = historyLogs.filter((log) => {
    const matchesSearch =
      log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "All" || log.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-6 md:p-10 relative overflow-hidden font-sans">
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Area */}
      <div className="relative z-10 border-b border-white/[0.06] pb-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
              Activity & Query History
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Review past lead discoveries, AI prompts, outreach sequences, and
              exported datasets.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <svg
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search history logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#05070d] border border-white/[0.08] focus:border-indigo-500 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1">
          {["All", "Searches", "Exports", "Outreach", "Saved"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* History Timeline */}
      <div className="relative z-10 space-y-4">
        {filteredLogs.length > 0 ? (
          filteredLogs.map((log) => (
            <div
              key={log.id}
              className="bg-[#05070d]/80 backdrop-blur-md border border-white/[0.06] hover:border-white/15 p-5 rounded-2xl shadow-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl border flex-shrink-0 ${log.iconBg}`}
                >
                  {log.icon}
                </div>

                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {log.title}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                      {log.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {log.description}
                  </p>
                  <span className="text-[11px] text-slate-500 mt-2 block">
                    {log.timestamp}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  if (log.category === "Saved") navigate("/saved-people");
                  if (log.category === "Searches") navigate("/home");
                }}
                className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium border border-white/[0.06] transition-all flex-shrink-0 self-start sm:self-center cursor-pointer"
              >
                {log.actionText}
              </button>
            </div>
          ))
        ) : (
          <div className="py-16 text-center bg-[#05070d]/50 rounded-2xl border border-white/[0.06]">
            <p className="text-slate-400 text-sm">
              No activity history found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
