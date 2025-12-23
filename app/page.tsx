'use client';

import React from 'react';
import { 
  Menu,
  Search, 
  BadgeCheck, 
  ChevronRight,
  ShieldCheck,
  Building2,
  FileText,
  X
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased">
      {/* Responsive Header */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 h-16 sm:h-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-1.5 sm:p-2 rounded">
               <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight leading-none text-slate-900 uppercase">Vetted</span>
              <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Robotics</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-slate-900 transition-colors">Verified Directory</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Compliance</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Manufacturers</a>
            <button className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 rounded shadow-sm hover:bg-slate-800 transition-all">
              GOVERNMENT PORTAL
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-4">
            <a href="#" className="block text-sm font-semibold text-slate-600">Verified Directory</a>
            <a href="#" className="block text-sm font-semibold text-slate-600">Compliance</a>
            <a href="#" className="block text-sm font-semibold text-slate-600">Manufacturers</a>
            <button className="w-full px-5 py-3 text-xs font-bold text-white bg-slate-900 rounded">
              GOVERNMENT PORTAL
            </button>
          </div>
        )}
      </header>

      {/* Hero Section - Mobile Optimized */}
      <div className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 bg-white border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600 tracking-widest uppercase">
            Official Compliance Registry // v4.2
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            The Standard for <br className="hidden sm:block" />
            <span className="text-slate-500">NDAA-Compliant Systems</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            A centralized, verified directory of unmanned systems cleared for government use. 
          </p>

          <div className="w-full max-w-2xl mx-auto mt-4 px-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white border border-slate-300 rounded shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-slate-400 transition-all">
              <div className="flex items-center flex-1 px-4 py-3 sm:py-0">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by Platform or FCC ID..."
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 px-3 text-sm"
                />
              </div>
              <button className="bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Summary - Responsive Stack */}
      <div className="relative z-10 px-4 sm:px-8 max-w-7xl mx-auto -mt-8 sm:-mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Active Listings", value: "1,248", icon: FileText, color: "text-blue-600", bg: "bg-white" },
            { label: "Verified Partners", value: "312", icon: Building2, color: "text-slate-900", bg: "bg-white" },
            { label: "Compliance Rate", value: "99.2%", icon: BadgeCheck, color: "text-emerald-600", bg: "bg-slate-900" },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} ${i === 2 ? 'text-white' : 'text-slate-900'} border border-slate-200 p-6 sm:p-8 rounded shadow-lg flex items-center justify-between`}>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${i === 2 ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-black mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${i === 2 ? 'text-emerald-400' : stat.color}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Directory Content */}
      <div className="px-4 sm:px-8 max-w-7xl mx-auto py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Recently Validated Platforms</h2>
            <p className="text-slate-500 text-sm mt-1">Updates based on latest Section 848 requirements.</p>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 text-xs font-bold border border-slate-300 rounded hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-md transition-all group">
              <div className="h-40 sm:h-44 bg-slate-100 relative">
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 text-slate-900 text-[9px] font-black rounded shadow-sm border border-slate-200">NDAA CERTIFIED</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">Skydio X10</h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase mt-1">Aerial System</p>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-400 uppercase font-bold">Origin</span>
                    <span className="text-sm font-bold text-slate-700">United States</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
