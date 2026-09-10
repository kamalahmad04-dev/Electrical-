import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { 
  Zap, 
  PhoneCall, 
  FileText, 
  Menu, 
  X, 
  MapPin, 
  CheckCircle2, 
  Layers,
  HardHat,
  FolderGit2
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [gridFrequency, setGridFrequency] = useState(50.02);

  // Subtle live grid frequency simulator (OETC 50Hz grid stability)
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * 0.04;
      setGridFrequency(prev => Number((50.0 + delta).toFixed(2)));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Zap className="w-4 h-4" /> },
    { id: 'services', label: 'Capabilities & Services', icon: <Layers className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects & Progress', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'hse', label: 'Safety & HSE Standards', icon: <HardHat className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact & RFQ', icon: <MapPin className="w-4 h-4" /> }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Telemetry & Certification Ribbon */}
      <div className="bg-[#050811] border-b border-slate-800/80 text-[11px] sm:text-xs text-slate-300 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left Grid Status */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-amber-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>GRID STABILITY:</span>
              <span className="text-white font-semibold">{gridFrequency} Hz</span>
              <span className="text-slate-500">|</span>
              <span className="text-sky-400 font-semibold">132 kV NOMINAL</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>OETC & Nama Registered Class-A HV Contractor</span>
            </div>
          </div>

          {/* Right Location & Quick Hotline */}
          <div className="flex items-center gap-4 text-slate-300 ml-auto">
            <div className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Ash Sharqiyah, Sultanate of Oman</span>
            </div>

            <a 
              href="tel:+96825540000" 
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
              title="24/7 High-Voltage Grid Emergency Dispatch"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">+968 2554 1320</span>
              <span className="hidden lg:inline text-[10px] bg-amber-950/80 text-amber-300 border border-amber-800/60 px-1.5 py-0.5 rounded">
                24/7 HV DISPATCH
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full px-4 sm:px-8 py-3 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#0A0F1D]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-black/40' 
          : 'bg-[#0B132B]/90 backdrop-blur-sm border-b border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Authority Label */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <div className="w-full h-full bg-[#070B14] rounded-[6px] flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-400 fill-amber-400/20 group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 border border-[#070B14]"></span>
              </span>
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg tracking-wider text-white">
                  SHARQIYAH
                </span>
                <span className="font-display font-semibold text-lg text-amber-400">
                  POWERGRID
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-slate-400">
                <span>132 kV Infrastructure</span>
                <span className="text-amber-500">•</span>
                <span>Oman</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="top-rfq-button"
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 hover:from-amber-400 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>Request Technical Quote</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-rfq-quick-btn"
              onClick={onOpenQuoteModal}
              className="px-2.5 py-1.5 rounded-md bg-amber-500 text-slate-950 text-xs font-semibold"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F1D] border-b border-amber-500/30 px-4 py-4 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="pb-2 mb-2 border-b border-slate-800 text-xs text-amber-400 flex items-center justify-between">
            <span className="font-mono">Ash Sharqiyah High-Voltage Division</span>
            <span className="bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded text-[10px]">
              OETC APPROVED
            </span>
          </div>

          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-3 transition-colors ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              id="mobile-drawer-rfq-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>Request Technical Quote</span>
            </button>

            <a
              href="tel:+96825540000"
              className="w-full py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>24/7 Emergency Line: +968 2554 1320</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
