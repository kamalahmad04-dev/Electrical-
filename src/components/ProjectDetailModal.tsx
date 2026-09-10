import React from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Sliders, 
  Zap, 
  Building2 
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B132B] border border-amber-500/30 rounded-xl shadow-2xl overflow-hidden flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-[#070B14] p-6 border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono text-amber-400">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 font-bold">
                {project.voltage}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-sky-400 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {project.client}
              </span>
              <span className="text-slate-500">•</span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-sans uppercase font-semibold ${
                project.status === 'completed' 
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                  : project.status === 'testing' 
                  ? 'bg-sky-950 text-sky-400 border border-sky-800' 
                  : 'bg-amber-950 text-amber-400 border border-amber-800'
              }`}>
                {project.status === 'completed' ? 'Handed Over' : project.status === 'testing' ? 'Commissioning Phase' : 'Under Construction'}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
              {project.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{project.location}</span>
            </div>
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
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Hero Image & Live Progress Meter */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-video max-h-64 sm:max-h-80 w-full group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent" />
            
            {/* Overlay Progress Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#0A0F1D]/90 backdrop-blur-md p-3.5 rounded-lg border border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  Current Active Milestone:
                </span>
                <span className="font-mono text-amber-400 font-bold">
                  {project.progressPercentage}% COMPLETE
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-amber-300 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${project.progressPercentage}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
                <span>{project.currentPhase}</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {project.safeWorkDays} Safe Days (Zero LTI)
                </span>
              </div>
            </div>
          </div>

          {/* Project Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Engineering Abstract & Purpose
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase text-sky-400 tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              Verified Site Parameters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
              {project.specifications.map((spec, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400">{spec.key}</div>
                  <div className="text-xs font-bold text-white mt-1">{spec.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scope Highlights */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Contracting Scope Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scopeHighlights.map((scope, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300"
                >
                  <Zap className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                  <span>{scope}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#070B14] p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Target Handover / Energization: <strong className="text-white">{project.completionDate}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
            >
              Enquire for Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
