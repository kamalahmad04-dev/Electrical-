import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { CleatCalculator } from '../components/CleatCalculator';
import { 
  Zap, 
  Cpu, 
  Activity, 
  Layers, 
  ShieldCheck, 
  Radio, 
  Wind, 
  CheckCircle2, 
  Sliders, 
  Wrench, 
  BookOpen, 
  ArrowRight,
  Download,
  Info
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModalWithService: (serviceTitle: string, voltageClass: string) => void;
  onOpenQuoteWithSpecs: (specs: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenQuoteModalWithService,
  onOpenQuoteWithSpecs,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTabId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'gis-installation':
        return <Cpu className="w-5 h-5" />;
      case 'hv-hipot-pd-testing':
        return <Activity className="w-5 h-5" />;
      case 'underground-cable-laying':
        return <Layers className="w-5 h-5" />;
      case 'earthing-lightning-protection':
        return <ShieldCheck className="w-5 h-5" />;
      case 'fiber-optics-scada':
        return <Radio className="w-5 h-5" />;
      case 'sf6-gas-monitoring':
        return <Wind className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full bg-[#070B14] text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-xs font-mono text-amber-400">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSMISSION & DISTRIBUTION INFRASTRUCTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            High-Voltage Engineering & Testing Capabilities
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Turnkey installation, pre-commissioning, and precision diagnostic testing compliant with OETC Grid Code Issue 4, IEC 62271-203, IEC 60840, and IEEE 80 standards in the Sultanate of Oman.
          </p>
        </div>

        {/* Tab Selector for 6 Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-slate-800 pb-4">
          {SERVICES_DATA.map((service) => {
            const isActive = service.id === activeTabId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTabId(service.id)}
                className={`p-3 rounded-xl text-left transition-all duration-200 flex flex-col justify-between space-y-2 cursor-pointer border ${
                  isActive
                    ? 'bg-amber-500/15 border-amber-500 text-amber-400 shadow-md shadow-amber-500/10'
                    : 'bg-[#0B132B]/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit ${isActive ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-900 text-slate-400'}`}>
                  {getServiceIcon(service.id)}
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-tight text-slate-400">
                    {service.voltageClass.split(' ')[0]} {service.voltageClass.split(' ')[1] || ''}
                  </div>
                  <div className="text-xs font-display font-bold leading-tight mt-0.5 line-clamp-2">
                    {service.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep Dive Panel */}
        <div className="bg-[#0B132B] rounded-2xl border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-10">
          {/* Top Overview & Hero Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
                  {activeService.voltageClass}
                </span>
                <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400">
                  STANDARD: {activeService.standard}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {activeService.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeService.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenQuoteModalWithService(activeService.title, activeService.voltageClass)}
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>Request RFQ for this Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-800 aspect-video lg:aspect-[4/3] group">
              <img
                src={activeService.heroImage}
                alt={activeService.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#070B14]/85 backdrop-blur-sm border border-slate-800 text-xs font-mono flex items-center justify-between">
                <span className="text-amber-400 font-bold">Oman Grid Deployment</span>
                <span className="text-slate-400">{activeService.standard}</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-display font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4 text-sky-400" />
              <span>Technical Ratings & Design Parameters</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
              {activeService.technicalSpecs.map((spec, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#070B14] border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase tracking-tight line-clamp-1">
                    {spec.label}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features & Equipment Fleet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-slate-800">
            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-sm font-display font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Engineered Execution Highlights</span>
              </h3>

              <div className="space-y-2.5">
                {activeService.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#070B14]/60 border border-slate-800/80 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Inventory */}
            <div className="space-y-4">
              <h3 className="text-sm font-display font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span>Specialized Mobilization Equipment</span>
              </h3>

              <div className="space-y-2.5">
                {activeService.equipmentUsed.map((equip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#070B14]/60 border border-slate-800/80 text-xs text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{equip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step-by-Step Methodology Accordion / Stepper */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-display font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Standard Operational Procedure (OETC Verified Sequence)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeService.methodologySteps.map((m) => (
                <div key={m.step} className="p-4 rounded-xl bg-[#070B14] border border-slate-800 space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                      STAGE 0{m.step}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-white font-display">
                    {m.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Embedded Trefoil Cleat & Trench Slab Calculator */}
        <div className="space-y-4 pt-8">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
              High-Voltage Civil & Cable Engineering Tool
            </span>
            <h2 className="text-2xl font-display font-bold text-white">
              Trench Slabs & Trefoil Cable Cleat Spacing Simulator
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Determine the required cleat spacing to withstand peak electrodynamic bursting forces on 132 kV / 33 kV single-core cables during short-circuit faults per IEC 61914.
            </p>
          </div>

          <CleatCalculator onOpenQuoteWithSpecs={onOpenQuoteWithSpecs} />
        </div>
      </div>
    </div>
  );
};
