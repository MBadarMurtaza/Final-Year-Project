import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SavedPeople = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState("All");

  // Dummy saved lead contacts
  const savedLeads = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Head of Growth",
      company: "Apex Automation",
      email: "alex.m@apexauto.io",
      phone: "+1 (555) 019-2834",
      status: "Hot Lead",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      tag: "SaaS",
      savedDate: "Jul 20, 2026",
      avatarBg: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "VP of Marketing",
      company: "Nexus Labs",
      email: "sophia.chen@nexuslabs.co",
      phone: "+1 (555) 018-9921",
      status: "Contacted",
      statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      tag: "AI",
      savedDate: "Jul 18, 2026",
      avatarBg: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      name: "Marcus Vance",
      role: "Founder & CEO",
      company: "ScaleFlow",
      email: "marcus@scaleflow.com",
      phone: "+1 (555) 014-7732",
      status: "Follow Up",
      statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      tag: "E-Commerce",
      savedDate: "Jul 15, 2026",
      avatarBg: "from-amber-500 to-rose-600",
    },
    {
      id: 4,
      name: "Elena Rostova",
      role: "Director of Outreach",
      company: "HyperLead",
      email: "elena@hyperlead.agency",
      phone: "+1 (555) 012-4411",
      status: "Closed Won",
      statusColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      tag: "Agency",
      savedDate: "Jul 10, 2026",
      avatarBg: "from-teal-500 to-emerald-600",
    },
  ];

  // Filtering Logic
  const filteredLeads = savedLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = filterTag === "All" || lead.tag === filterTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-6 md:p-10 relative overflow-hidden font-sans">
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

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
              Saved People & Leads
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {filteredLeads.length} Total Saved
              </span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Manage, search, and initiate outreach with saved prospects from
              Leads Locker.
            </p>
          </div>

          {/* Search Input */}
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
              placeholder="Search name, company, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#05070d] border border-white/[0.08] focus:border-indigo-500 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1">
          {["All", "SaaS", "AI", "E-Commerce", "Agency"].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filterTag === tag
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Saved Leads Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        {filteredLeads.length > 0 ? (
          filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-[#05070d]/80 backdrop-blur-md border border-white/[0.06] hover:border-white/15 p-5 rounded-2xl shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Lead Info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${lead.avatarBg} flex items-center justify-center text-white font-bold text-base shadow-md flex-shrink-0`}
                    >
                      {lead.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {lead.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {lead.role} at{" "}
                        <span className="text-slate-200">{lead.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${lead.statusColor}`}
                  >
                    {lead.status}
                  </span>
                </div>

                {/* Contact Metadata */}
                <div className="mt-5 space-y-2 border-t border-white/[0.04] pt-4">
                  <div className="flex items-center text-xs text-slate-400 gap-2">
                    <svg
                      className="w-4 h-4 text-slate-500"
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
                    <span className="truncate">{lead.email}</span>
                  </div>

                  <div className="flex items-center text-xs text-slate-400 gap-2">
                    <svg
                      className="w-4 h-4 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{lead.phone}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs">
                <span className="text-slate-500">Saved: {lead.savedDate}</span>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all">
                    Remove
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/20 transition-all">
                    Contact Lead
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-[#05070d]/50 rounded-2xl border border-white/[0.06]">
            <p className="text-slate-400 text-sm">
              No saved contacts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPeople;
