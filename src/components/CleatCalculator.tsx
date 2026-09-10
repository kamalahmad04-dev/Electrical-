import React, { useState } from 'react';
import { 
  Calculator, 
  Layers, 
  ShieldAlert, 
  CheckCircle2, 
  Info, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface CleatCalculatorProps {
  onOpenQuoteWithSpecs?: (specs: string) => void;
}

export const CleatCalculator: React.FC<CleatCalculatorProps> = ({ onOpenQuoteWithSpecs }) => {
  const [voltage, setVoltage] = useState<'33' | '132'>('132');
  const [faultCurrentKa, setFaultCurrentKa] = useState<number>(40);
  const [cableDiameterMm, setCableDiameterMm] = useState<number>(95);
  const [cleatSpacingMm, setCleatSpacingMm] = useState<number>(800);

  // IEC 61914 Peak Short Circuit Force calculation for Trefoil formation:
  // F_peak (N/m) = 0.17 * (I_peak)^2 / (d / 1000)
  // where I_peak = 2.55 * I_rms (for 50 Hz, typical X/R ratio)
  const peakCurrentKa = faultCurrentKa * 2.55;
  const forcePerMeterN = (0.17 * Math.pow(peakCurrentKa, 2)) / (cableDiameterMm / 1000);
  // Total force experienced by each individual cleat based on spacing:
  const forcePerCleatKn = (forcePerMeterN * (cleatSpacingMm / 1000)) / 1000;

  // Evaluation: typical cast aluminum trefoil cleat has rated short-circuit withstand of ~30 kN - 45 kN
  const isSafe = forcePerCleatKn <= 35;
  const isBorderline = forcePerCleatKn > 35 && forcePerCleatKn <= 45;

  const handleApplyToQuote = () => {
    const summary = `${voltage} kV Trefoil Cable Cleating: ${faultCurrentKa} kA Fault Current, ${cableDiameterMm} mm OD, ${cleatSpacingMm} mm Spacing (Calculated Force: ${forcePerCleatKn.toFixed(1)} kN/cleat)`;
    if (onOpenQuoteWithSpecs) {
      onOpenQuoteWithSpecs(summary);
    }
  };

  return (
    <div className="bg-[#0B132B] border border-amber-500/30 rounded-xl p-6 sm:p-8 shadow-xl text-slate-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive Engineering Tool (IEC 61914 Standard)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
            Trefoil Cable Cleat & Short-Circuit Force Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Compute electrodynamic bursting forces on 132 kV / 33 kV single-core cables to determine optimal cleat intervals and trench anchorage in Ash Sharqiyah terrain.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 shrink-0">
          <Info className="w-4 h-4 text-amber-400" />
          <span>Formulation: IEC 61914 / CIGRE TB 669</span>
        </div>
      </div>

      {/* Calculator Body: Inputs & Realtime Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Voltage Selection */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
              Transmission / Distribution Voltage Tier:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setVoltage('132');
                  setFaultCurrentKa(40);
                  setCableDiameterMm(105);
                }}
                className={`py-2.5 px-4 rounded-lg font-mono text-sm font-semibold border transition-all cursor-pointer ${
                  voltage === '132'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500 shadow-sm shadow-amber-500/20'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                132 kV Transmission (OETC Spec)
              </button>
              <button
                type="button"
                onClick={() => {
                  setVoltage('33');
                  setFaultCurrentKa(25);
                  setCableDiameterMm(68);
                }}
                className={`py-2.5 px-4 rounded-lg font-mono text-sm font-semibold border transition-all cursor-pointer ${
                  voltage === '33'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500 shadow-sm shadow-amber-500/20'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                33 kV Regional Feeder
              </button>
            </div>
          </div>

          {/* Fault Current Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-mono text-slate-300">Prospective Short-Circuit Current (I_rms):</span>
              <span className="font-mono text-amber-400 font-bold">{faultCurrentKa} kA (Peak: {peakCurrentKa.toFixed(1)} kA)</span>
            </div>
            <input
              type="range"
              min="16"
              max="50"
              step="0.5"
              value={faultCurrentKa}
              onChange={(e) => setFaultCurrentKa(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>16 kA (Low Distribution)</span>
              <span>31.5 kA</span>
              <span>40 kA (OETC Standard)</span>
              <span>50 kA (Heavy Grid)</span>
            </div>
          </div>

          {/* Cable Outer Diameter */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-mono text-slate-300">Single Core Cable Outer Diameter (OD):</span>
              <span className="font-mono text-sky-400 font-bold">{cableDiameterMm} mm</span>
            </div>
            <input
              type="range"
              min="45"
              max="135"
              step="1"
              value={cableDiameterMm}
              onChange={(e) => setCableDiameterMm(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>45 mm (300 mm² 33kV)</span>
              <span>90 mm (800 mm² 132kV)</span>
              <span>135 mm (2500 mm² Corrugated Al)</span>
            </div>
          </div>

          {/* Cleat Spacing */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-mono text-slate-300">Cleat Center-to-Center Pitch Spacing:</span>
              <span className="font-mono text-emerald-400 font-bold">{cleatSpacingMm} mm</span>
            </div>
            <input
              type="range"
              min="400"
              max="1500"
              step="50"
              value={cleatSpacingMm}
              onChange={(e) => setCleatSpacingMm(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>400 mm (High Security)</span>
              <span>800 mm (Standard Trench)</span>
              <span>1200 mm</span>
              <span>1500 mm</span>
            </div>
          </div>
        </div>

        {/* Right Output & Recommendation Panel (5 Cols) */}
        <div className="lg:col-span-5 bg-[#070B14] rounded-xl p-5 border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase text-slate-400">IEC 61914 Evaluation</span>
              <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                isSafe 
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                  : isBorderline 
                  ? 'bg-amber-950 text-amber-400 border border-amber-800' 
                  : 'bg-rose-950 text-rose-400 border border-rose-800'
              }`}>
                {isSafe ? 'COMPLIANT (SAFE)' : isBorderline ? 'BORDERLINE (ADD CLEATS)' : 'OVERSTRESSED (UNSAFE)'}
              </span>
            </div>

            {/* Calculated Force metric */}
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-slate-400">Peak Electromagnetic Force per Cleat:</div>
              <div className="text-3xl font-display font-bold text-amber-400">
                {forcePerCleatKn.toFixed(2)} <span className="text-sm font-sans text-slate-300 font-normal">kN / Cleat</span>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Linear Burst Force: {(forcePerMeterN / 1000).toFixed(2)} kN/meter of trench
              </div>
            </div>

            {/* Engineering Recommendation Box */}
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Recommended Ash Sharqiyah Spec:</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {isSafe 
                  ? `Heavy-duty die-cast aluminum alloy trefoil cleat with 10mm LSF Zero-Halogen neoprene pad and M12 Grade A4-70 stainless steel bolt. Trench spacing of ${cleatSpacingMm} mm provides ample safety margin under ${faultCurrentKa} kA prospective fault.`
                  : isBorderline
                  ? `Reduce cleat pitch spacing to 600 mm or upgrade to stainless steel double-wrap trefoil cleats with reinforced unistrut anchoring.`
                  : `CRITICAL RISK: Electromagnetic bursting force (${forcePerCleatKn.toFixed(1)} kN) exceeds single cleat yield strength. Reduce cleat pitch to ≤ 500 mm immediately.`
                }
              </p>
              <div className="pt-1 text-[10px] font-mono text-amber-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>OETC Specification Class: SPGE-CLEAT-132</span>
              </div>
            </div>
          </div>

          {/* Action to quote */}
          <button
            type="button"
            onClick={handleApplyToQuote}
            className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Apply Parameter to Technical Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
