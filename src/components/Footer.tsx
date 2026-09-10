import React from 'react';
import { PageId } from '../types';
import { 
  Zap, 
  MapPin, 
  PhoneCall, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Clock, 
  ChevronRight,
  HardHat
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background circuit line */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Top Banner: Regional Grid Callout */}
      <div className="border-b border-slate-800/80 bg-[#080D1A]/70 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-display text-base font-semibold">
                High-Voltage Grid Operations Hub — Ash Sharqiyah, Oman
              </h4>
              <p className="text-xs text-slate-400">
                Rapid mobilization units for 132 kV / 33 kV GIS commissioning, cable fault locators & emergency resonant Hipot testing.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="https://maps.app.goo.gl/iE3PH4f91327UBKT7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/60 text-slate-200 text-xs font-medium transition-all"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>View Ash Sharqiyah Base on Google Maps</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
            >
              <span>Get Engineering Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Registration */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#070B14] rounded-[6px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">SHARQIYAH </span>
                <span className="font-display font-semibold text-lg text-amber-400">POWERGRID</span>
                <p className="text-[11px] font-mono text-slate-400">
                  Engineering & Contracting LLC — Sultanate of Oman
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Pioneering high-voltage electrical contracting across Ash Sharqiyah and the Sultanate of Oman. Specialists in 132 kV Gas-Insulated Substations (GIS), high-voltage underground transmission cables, mobile resonant testing up to 260 kV, and optical SCADA backbones.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>OETC Certified Grade-A High-Voltage Transmission Contractor</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>DCRP Registered Class-A | ISO 45001 / ISO 9001 / ISO 14001</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <HardHat className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Zero Lost-Time Injury (LTI) HSE Performance Record</span>
              </div>
            </div>
          </div>

          {/* Column 2: Engineering Capabilities */}
          <div className="space-y-3">
            <h5 className="text-white font-display text-sm font-semibold tracking-wider uppercase border-b border-slate-800 pb-2">
              Capabilities
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  132 kV GIS Substation Erection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  HV AC Resonant Hipot Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Underground Cable Pulling (Trefoil)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Substation Earthing & IEEE 80 Mesh
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  OPGW Fiber Splicing & OTDR
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  SF6 Recovery & Micro-Leak Laser
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Projects */}
          <div className="space-y-3">
            <h5 className="text-white font-display text-sm font-semibold tracking-wider uppercase border-b border-slate-800 pb-2">
              Regional Coverage
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Sur Industrial 132/33 kV Grid
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Ibra North 132 kV Transmission Link
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Al Kamil SF6 Modernization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jaalan Bani Bu Ali Distribution Loop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Ras Al Hadd Marine Earthing Grid
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Bidbid–Sur Highway HV Corridor
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations Depot */}
          <div className="space-y-3">
            <h5 className="text-white font-display text-sm font-semibold tracking-wider uppercase border-b border-slate-800 pb-2">
              Regional Operations
            </h5>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Engineering Depot & Yard: Plot 142, Industrial Area, Ash Sharqiyah Corridor, Sultanate of Oman
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <a href="tel:+96825540000" className="text-white hover:text-amber-400 font-mono">
                    +968 2554 1320
                  </a>
                  <p className="text-[10px] text-slate-500">24/7 Grid Outage Dispatch</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:tenders@sharqiyah-powergrid.om" className="text-white hover:text-amber-400 font-mono">
                  tenders@sharqiyah-powergrid.om
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Technical Office: 07:00 – 16:30 (Sun – Thu)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Compliance Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-6 flex-wrap">
              <span className="font-mono text-slate-500">STANDARDS COMPLIANCE:</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300 font-mono text-[11px]">
                OETC Grid Code Issue 4
              </span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300 font-mono text-[11px]">
                IEC 62271-203 (GIS)
              </span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300 font-mono text-[11px]">
                IEC 60840 (HV Cable Testing)
              </span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300 font-mono text-[11px]">
                IEEE Std 80 (Substation Earthing)
              </span>
            </div>

            <div>
              <p className="text-[11px] text-slate-400">
                CR No: 1489201 | Oman Electricity Transmission Co Vendor #OETC-V-9941
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Sharqiyah PowerGrid Engineering LLC (SPGE). All rights reserved. Sultanate of Oman.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('hse')} className="hover:text-white transition-colors">
              HSE Golden Rules
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
              Engineering Specifications
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Ash Sharqiyah Site Office
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
