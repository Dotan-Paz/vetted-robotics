'use client';

import React from 'react';
import { 
  Terminal, 
  Search, 
  BadgeCheck, 
  ShieldAlert, 
  ChevronRight 
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-800/60 bg-slate-900/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-[#38bdf8]" />
            <span className="font-mono font-bold tracking-tighter text-lg text-white">
              VETTED<span className="text-[#38bdf8]">.ROBOTICS</span>
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-[#38bdf8] transition-colors">Directory</a>
            <a href="#" className="hover:text-[#38bdf8] transition-colors">Compliance</a>
            <a href="#" className="hover:text-[#38bdf8] transition-colors">Manufacturers</a>
            <button className="px-4 py-2 text-xs font-bold text-slate-900 bg-[#38bdf8] rounded hover:bg-sky-400 transition-colors">
              AGENCY LOGIN
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SYSTEM ONLINE // DATABASE UPDATED
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl">
            Secure Robotics <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-emerald-400">
              Procurement Nexus
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            The definitive verified directory for NDAA-compliant unmanned systems.
            Verified hardware for government and defense applications.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] via-emerald-500 to-[#38bdf8] opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-lg"></div>
            <div className="relative flex items-center bg-slate-800/90 border border-slate-700 rounded-lg p-2 shadow-2xl backdrop-blur-sm">
              <Search className="w-5 h-5 text-slate-500 ml-3" />
              <input
                type="text"
                placeholder="Search by Platform, SKU, or Compliance Code..."
                className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 px-4 py-2 font-mono text-sm"
              />
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                SCAN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 max-w-7xl mx-auto mb-20">
        {[
          { label: "Verified Platforms", value: "1,248", icon: BadgeCheck, color: "text-emerald-400" },
          { label: "Blacklisted Entities", value: "84", icon: ShieldAlert, color: "text-rose-500" },
          { label: "Active Agencies", value: "312", icon: Terminal, color: "text-[#38bdf8]" },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-lg backdrop-blur-sm hover:border-slate-600 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`w-6 h-6 ${stat.color} opacity-80`} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Listings */}
      <div className="px-6 max-w-7xl mx-auto pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-1 h-6 bg-[#38bdf8] rounded-full"></span>
            Recent Certifications
          </h2>
          <button className="text-sm text-[#38bdf8] hover:text-white flex items-center gap-1 transition-colors">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group relative bg-slate-900 border border-slate-800 hover:border-[#38bdf8]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold rounded">NDAA</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">Skydio X10</h3>
                <p className="text-slate-400 text-xs mt-1">Autonomous Enterprise Drone</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Flight Time</span>
                    <span className="text-slate-300 font-mono">40 MIN</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1">
                    <span className="text-slate-500">Origin</span>
                    <span className="text-slate-300 font-mono">USA</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
