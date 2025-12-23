'use client';

import React from 'react';
import { 
  Terminal, 
  Search, 
  BadgeCheck, 
  ShieldAlert, 
  ChevronRight,
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* Top Professional Header */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-8 h-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2 rounded">
               <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight leading-none text-slate-900">VETTED</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Robotics & Defense</span>
            </div>
          </div>
          <nav className="flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-slate-900 transition-colors">Verified Directory</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Compliance Standards</a>
            <a href="#" className="hover:text-slate-900 transition-colors">For Manufacturers</a>
            <button className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 rounded shadow-sm hover:bg-slate-800 transition-all">
              GOVERNMENT PORTAL
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section - The "Light" Mix */}
      <div className="relative pt-40 pb-24 px-8 bg-white border-b border-slate-200">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600 tracking-widest uppercase">
            Official Compliance Registry // v4.2
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl">
            The Standard for <br />
            <span className="text-slate-500">NDAA-Compliant Systems</span>
          </h1>

          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            A centralized, verified directory of unmanned systems cleared for government use. 
            Streamlining procurement through rigorous supply-chain validation.
          </p>

          {/* Professional Search Bar */}
          <div className="w-full max-w-2xl mt-4">
            <div className="flex items-center bg-white border border-slate-300 rounded shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-slate-400 focus-within:border-transparent transition-all">
              <Search className="w-5 h-5 text-slate-400 ml-4" />
              <input
                type="text"
                placeholder="Search by Platform, Manufacturer, or FCC ID..."
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 px-4 py-4 text-sm"
              />
              <button className="bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-slate-800">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Summary - White/Dark Mix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 max-w-7xl mx-auto -translate-y-1/2">
        {[
          { label: "Active Listings", value: "1,248", icon: FileText, color: "text-blue-600", bg: "bg-white" },
          { label: "Verified Partners", value: "312", icon: Building2, color: "text-slate-900", bg: "bg-white" },
          { label: "Compliance Rate", value: "99.2%", icon: BadgeCheck, color: "text-emerald-600", bg: "bg-slate-900" },
        ].map((stat, i) => (
          <div key={i} className={`${stat.bg} ${i === 2 ? 'text-white' : 'text-slate-900'} border border-slate-200 p-8 rounded shadow-lg flex items-center justify-between`}>
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${i === 2 ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</p>
              <p className="text-3xl font-black mt-1">{stat.value}</p>
            </div>
            <stat.icon className={`w-8 h-8 ${i === 2 ? 'text-emerald-400' : stat.color}`} />
          </div>
        ))}
      </div>

      {/* Main Directory Area */}
      <div className="px-8 max-w-7xl mx-auto pb-24 -mt-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Recently Validated Platforms</h2>
            <p className="text-slate-500 text-sm mt-1">Updates based on latest Section 848 federal requirements.</p>
          </div>
          <button className="px-4 py-2 text-xs font-bold border border-slate-300 rounded hover:bg-slate-50 transition-colors flex items-center gap-2">
            View All Platforms <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
              <div className="h-44 bg-slate-100 relative">
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 text-slate-900 text-[10px] font-black rounded shadow-sm border border-slate-200">NDAA CERTIFIED</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Skydio X10</h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-tighter mt-1">Autonomous Aerial System</p>
                
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Country of Origin</span>
                    <span className="text-sm font-bold text-slate-700">United States</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
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
