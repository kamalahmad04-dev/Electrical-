import React from 'react';
import { 
  Zap, 
  Cpu, 
  Activity, 
  Radio, 
  Layers, 
  ShieldAlert, 
  CheckCircle2 
} from 'lucide-react';

export const LiveTicker: React.FC = () => {
  const tickerItems = [
    { label: '132 kV GIS Installation', metric: 'Laser Alignment ±0.05mm', icon: <Cpu className="w-3.5 h-3.5 text-amber-400" /> },
    { label: 'HV Resonant Hipot Testing', metric: '260 kV / 80 A Onsite Reactor', icon: <Zap className="w-3.5 h-3.5 text-sky-400" /> },
    { label: 'Partial Discharge (PD)', metric: 'UHF Detection < 2 pC Sensitive', icon: <Activity className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: 'Trefoil Cable Pulling', metric: '132 kV 1200 mm² XLPE winching', icon: <Layers className="w-3.5 h-3.5 text-amber-400" /> },
    { label: 'Fiber Optic Splicing (OPGW)', metric: 'Loss < 0.02 dB per fusion (OTDR)', icon: <Radio className="w-3.5 h-3.5 text-sky-400" /> },
    { label: 'SF6 Gas Recovery & Purity', metric: 'Moisture Dewpoint < -42°C', icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: 'Substation Earthing IEEE 80', metric: 'Grid Resistance Rg < 0.5 Ω', icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> },
    { label: 'OETC Transmission Grid', metric: 'Ash Sharqiyah Operations Active', icon: <Zap className="w-3.5 h-3.5 text-amber-400" /> },
  ];

  return (
    <div className="w-full bg-[#080D1A] border-y border-amber-500/20 py-2.5 overflow-hidden relative shadow-inner">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080D1A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080D1A] to-transparent z-10 pointer-events-none" />

      {/* Repeating ticker animation */}
      <div className="flex w-max animate-marquee space-x-8 text-xs font-mono">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 px-3 py-1 rounded bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-colors"
          >
            {item.icon}
            <span className="text-slate-300 font-semibold">{item.label}</span>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 font-medium">{item.metric}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
