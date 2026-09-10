import React from 'react';
import { OETC_GOLDEN_RULES, SAFETY_CLEARANCES, HSE_METRICS } from '../data/hseData';
import { 
  ShieldCheck, 
  HardHat, 
  AlertTriangle, 
  Sun, 
  Wind, 
  CheckCircle2, 
  Award, 
  Lock, 
  FileText,
  Activity,
  ArrowRight,
  Zap
} from 'lucide-react';

interface HsePageProps {
  onOpenQuoteModal: () => void;
}

export const HsePage: React.FC<HsePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="w-full bg-[#070B14] text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OCCUPATIONAL HEALTH, SAFETY & ENVIRONMENTAL RIGOR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            High-Voltage Safety & OETC Compliance Framework
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Operating at 132 kV requires zero tolerance for error. Our operations across Ash Sharqiyah are governed by OETC’s Golden Safety Rules, strict Permit to Work (PTW) protocols, Arc Flash Level 4 protections, and closed-loop SF6 environmental containment.
          </p>
        </div>

        {/* Live HSE Scorecard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#0B132B] p-6 rounded-2xl border border-amber-500/30">
          <div className="space-y-1 border-r border-slate-800/80 pr-4">
            <span className="text-[11px] font-mono text-slate-400">SAFE WORK HOURS</span>
            <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400">
              {HSE_METRICS.safeManHours}
            </div>
            <span className="text-[11px] font-mono text-slate-400">Continuous Record</span>
          </div>

          <div className="space-y-1 border-r border-slate-800/80 pr-4">
            <span className="text-[11px] font-mono text-slate-400">DAYS WITHOUT LTI</span>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">
              {HSE_METRICS.daysZeroLti}
            </div>
            <span className="text-[11px] font-mono text-emerald-400">Zero Lost-Time Incidents</span>
          </div>

          <div className="space-y-1 border-r border-slate-800/80 pr-4">
            <span className="text-[11px] font-mono text-slate-400">OETC AUDIT RATING</span>
            <div className="text-2xl sm:text-3xl font-display font-bold text-amber-400">
              {HSE_METRICS.oetcAuditScore}
            </div>
            <span className="text-[11px] font-mono text-slate-400">Quality & Safety Index</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono text-slate-400">CERTIFIED HV PERSONNEL</span>
            <div className="text-2xl sm:text-3xl font-display font-bold text-sky-400">
              {HSE_METRICS.certifiedEngineers}
            </div>
            <span className="text-[11px] font-mono text-slate-400">SAP & AP Authorised</span>
          </div>
        </div>

        {/* OETC 10 Golden Safety Rules Breakdown */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
              Mandatory Operational Directives
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              OETC High-Voltage Golden Safety Rules
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Strict rules enforced on every substation, cable trench, and testing yard in Ash Sharqiyah:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OETC_GOLDEN_RULES.map((rule) => (
              <div 
                key={rule.id}
                className="p-5 rounded-xl bg-[#0B132B] border border-slate-800 hover:border-amber-500/40 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    RULE #{rule.id} • {rule.category}
                  </span>
                  <Lock className="w-4 h-4 text-slate-500" />
                </div>

                <h3 className="text-sm font-display font-bold text-white">
                  {rule.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {rule.rule}
                </p>

                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-start gap-1.5">
                  <span className="text-emerald-400 font-semibold shrink-0">Verification:</span>
                  <span>{rule.verification}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High-Voltage Air Safety Clearance Table */}
        <div className="space-y-4 pt-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              Boundary & Clearance Guidelines
            </span>
            <h2 className="text-2xl font-display font-bold text-white">
              Minimum High-Voltage Working Clearances
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clearance distances compliant with OETC safety regulations and IEC 61936-1:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0B132B]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#070B14] border-b border-slate-800 text-slate-400 uppercase text-[11px]">
                <tr>
                  <th className="p-4">Voltage Tier</th>
                  <th className="p-4">Min Air Clearance to Live Part</th>
                  <th className="p-4">Test Safety Boundary Zone</th>
                  <th className="p-4">Demarcation Barrier Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {SAFETY_CLEARANCES.map((clearance, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      {clearance.voltage}
                    </td>
                    <td className="p-4 text-amber-400 font-bold">{clearance.minDistanceAir}</td>
                    <td className="p-4 text-sky-400">{clearance.testSafetyZone}</td>
                    <td className="p-4 text-slate-400">{clearance.barrierType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Extreme Desert Climate Engineering & Environmental Stewardship */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Desert Thermal Engineering */}
          <div className="p-6 rounded-2xl bg-[#0B132B] border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Extreme Desert Climate Engineering (+50°C)
                </h3>
                <p className="text-xs text-slate-400">
                  Thermal management adapted to Ash Sharqiyah soils
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Oman’s summer temperatures frequently exceed +50°C, causing extreme soil drying and elevated cable sheath heating. We engineer specialized low-resistivity thermal backfill (TR &lt; 1.0 K·m/W) and concrete trench slabs to prevent thermal runaway and maintain cable ampacity.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Thermal needle testing (KD2 Pro) for in-situ soil resistivity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Reinforced precast concrete slab protection with warning tapes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Night-shift cable pulls during peak summer heat constraints</span>
              </li>
            </ul>
          </div>

          {/* SF6 Environmental Commitment */}
          <div className="p-6 rounded-2xl bg-[#0B132B] border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <Wind className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  SF6 Zero-Atmospheric Venting Policy
                </h3>
                <p className="text-xs text-slate-400">
                  Closed-loop recovery compliant with ISO 14001
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sulfur Hexafluoride (SF6) has a global warming potential 23,500 times greater than CO2. Our fleet of DILO service carts guarantees 100% closed-loop evacuation, filtration, and recycling with residual vessel pressures below 1 mbar.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Zero venting to atmosphere verified by mass-balance logging</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Infrared Optical Gas Imaging (OGI) for sub-millimeter leak tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>SO2 and decomposition byproduct chemical neutralizers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="p-8 rounded-2xl bg-[#0B132B] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <Award className="w-4 h-4" />
              <span>ACCREDITATION & REGISTRATION</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">
              Approved by Oman Electricity Transmission Company (OETC)
            </h3>
            <p className="text-xs text-slate-400">
              Fully compliant with Oman Grid Code, DCRP Class-A licensing, and international ISO quality & safety directives.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all shrink-0 cursor-pointer"
          >
            <span>Initiate Safety Compliance RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
