import React from 'react';
import { ServiceDetail } from '../types';
import { 
  X, 
  CheckCircle2, 
  Wrench, 
  Sliders, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  BookOpen
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string, voltageClass: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B132B] border border-amber-500/30 rounded-xl shadow-2xl overflow-hidden flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-[#070B14] p-6 border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono text-amber-400">
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                {service.voltageClass}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-sky-400">STANDARD: {service.standard}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {service.shortDesc}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8 divide-y divide-slate-800/80">
          {/* Key Features & Execution Scope */}
          <div className="space-y-3">
            <h3 className="text-sm font-display font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Scope of Execution & Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="pt-6 space-y-3">
            <h3 className="text-sm font-display font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4 text-sky-400" />
              Technical Ratings & Quality Criteria
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono">
              {service.technicalSpecs.map((spec, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase tracking-tight">
                    {spec.label}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Deployed */}
          <div className="pt-6 space-y-3">
            <h3 className="text-sm font-display font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <Wrench className="w-4 h-4 text-emerald-400" />
              Specialized Site Equipment & Test Fleet
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {service.equipmentUsed.map((equip, idx) => (
                <li key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-900/40 border border-slate-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{equip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Methodology */}
          <div className="pt-6 space-y-4">
            <h3 className="text-sm font-display font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              Standardized Execution Methodology (OETC Verified)
            </h3>
            <div className="space-y-3">
              {service.methodologySteps.map((m) => (
                <div 
                  key={m.step} 
                  className="flex gap-4 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    0{m.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Quote CTA */}
        <div className="bg-[#070B14] p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Full compliance with OETC Technical Specifications & HSE Golden Rules</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Close Details
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForQuote(service.title, service.voltageClass);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
            >
              <span>Enquire for this Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
