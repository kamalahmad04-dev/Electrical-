import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Upload, 
  FileText, 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Copy, 
  Download,
  AlertCircle
} from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialVoltage?: string;
  initialNotes?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialVoltage,
  initialNotes,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    projectName: '',
    clientCompany: '',
    contactPerson: '',
    email: '',
    phone: '',
    locationInOman: 'Ash Sharqiyah South (Sur Industrial Area)',
    voltageClass: initialVoltage || '132 kV Transmission',
    serviceCategory: initialService || '132 kV GIS Installation',
    scopeDescription: initialNotes || '',
    estimatedTimeline: 'Q4 2026',
    hasSingleLineDiagram: true,
    requiresOetcLiaison: true,
  });

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [submittedDocket, setSubmittedDocket] = useState<{
    referenceId: string;
    timestamp: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refCode = `SPGE-OETC-2026-${randomSuffix}`;
    setSubmittedDocket({
      referenceId: refCode,
      timestamp: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Muscat' }),
    });
  };

  const handleCopySummary = () => {
    if (!submittedDocket) return;
    const text = `SHARQIYAH POWERGRID ENGINEERING (SPGE) - RFQ DOCKET
Reference: ${submittedDocket.referenceId}
Date: ${submittedDocket.timestamp} (Oman Time)
Project: ${formData.projectName}
Client: ${formData.clientCompany}
Voltage Class: ${formData.voltageClass}
Service: ${formData.serviceCategory}
Location: ${formData.locationInOman}
Contact: ${formData.contactPerson} (${formData.phone}, ${formData.email})
Timeline: ${formData.estimatedTimeline}
Attached SLD: ${uploadedFileName || 'Yes - Pending transfer'}
Status: Logged with Ash Sharqiyah High-Voltage Engineering Directorate`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleResetAndClose = () => {
    setSubmittedDocket(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] bg-[#0B132B] border border-amber-500/40 rounded-xl shadow-2xl overflow-hidden flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#070B14] p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
                High-Voltage Technical Quote & Site Enquiry
              </h3>
              <p className="text-xs text-slate-400">
                Ash Sharqiyah Central Base • OETC & DCRP Registered Class-A
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {submittedDocket ? (
            /* Success Docket View */
            <div className="space-y-6 py-4 animate-in zoom-in-95 duration-200">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-display font-bold text-white">
                  Technical Tender Enquiry Registered
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your high-voltage engineering specification has been dispatched to our Ash Sharqiyah Operations Office. An authorized Senior High-Voltage Engineer will review your requirements.
                </p>
              </div>

              {/* Formal Docket Details */}
              <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 font-mono text-xs space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-amber-400">
                  <span>OFFICIAL DOCKET REF:</span>
                  <span className="font-bold text-sm text-white bg-slate-800 px-2 py-0.5 rounded">
                    {submittedDocket.referenceId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div><span className="text-slate-500">Project:</span> {formData.projectName}</div>
                  <div><span className="text-slate-500">Client:</span> {formData.clientCompany}</div>
                  <div><span className="text-slate-500">Voltage:</span> {formData.voltageClass}</div>
                  <div><span className="text-slate-500">Service:</span> {formData.serviceCategory}</div>
                  <div><span className="text-slate-500">Location:</span> {formData.locationInOman}</div>
                  <div><span className="text-slate-500">Timeline:</span> {formData.estimatedTimeline}</div>
                  <div><span className="text-slate-500">Document:</span> {uploadedFileName || 'Single-Line Diagram on file'}</div>
                  <div><span className="text-slate-500">Contact:</span> {formData.contactPerson} ({formData.phone})</div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Registered: {submittedDocket.timestamp}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    OETC Liaison Notified
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="flex-1 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Copy className="w-4 h-4 text-amber-400" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Formal Docket Text'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Close & Return</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Name */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Project / Substation Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sur 132 kV GIS Feeder Extension"
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Client Company */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Client / EPC Contractor *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. OETC / Nama / Petrofac / EPC"
                    value={formData.clientCompany}
                    onChange={(e) => setFormData({ ...formData, clientCompany: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Voltage Class & Service Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Voltage Class *
                  </label>
                  <select
                    value={formData.voltageClass}
                    onChange={(e) => setFormData({ ...formData, voltageClass: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="132 kV Transmission">132 kV Transmission (OETC Spec)</option>
                    <option value="33 kV Distribution">33 kV Regional Distribution</option>
                    <option value="11 kV / Low Voltage">11 kV / Low Voltage Industrial</option>
                    <option value="Multi-Tier 132/33/11 kV">Multi-Tier (132/33/11 kV Substation)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Primary Service Scope *
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="132 kV GIS Installation">132 kV GIS Installation & Erection</option>
                    <option value="HV AC Resonant Hipot & PD Testing">HV AC Resonant Hipot & PD Diagnostics</option>
                    <option value="Underground Cable Laying (Trefoil)">Underground Cable Pulling & Trefoil Cleating</option>
                    <option value="Substation Earthing & IEEE 80">Substation Earthing & Lightning Mesh</option>
                    <option value="Fiber Optic (OPGW/FOC) Splicing">Fiber Optic (OPGW / FOC) Splicing & OTDR</option>
                    <option value="SF6 Gas Recovery & Leak Detection">SF6 Gas Dehydration & Laser Leak Detection</option>
                    <option value="Full Turnkey Substation Contracting">Full Turnkey Substation Contracting</option>
                  </select>
                </div>
              </div>

              {/* Location in Oman */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Site Location in Oman *
                  </label>
                  <select
                    value={formData.locationInOman}
                    onChange={(e) => setFormData({ ...formData, locationInOman: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Ash Sharqiyah South (Sur Industrial Area)">Ash Sharqiyah South (Sur Industrial Area)</option>
                    <option value="Ash Sharqiyah North (Ibra / Al Qabil)">Ash Sharqiyah North (Ibra / Al Qabil)</option>
                    <option value="Al Kamil Wal Wafi / Jaalan Corridor">Al Kamil Wal Wafi / Jaalan Corridor</option>
                    <option value="Ras Al Hadd Coastal Region">Ras Al Hadd Coastal Region</option>
                    <option value="Bidbid – Sur Transmission Corridor">Bidbid – Sur Transmission Corridor</option>
                    <option value="Muscat Governorate">Muscat Governorate</option>
                    <option value="Al Wusta / Duqm Industrial Port">Al Wusta / Duqm Industrial Port</option>
                    <option value="Other Oman Region">Other Sultanate Region</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Target Energization Timeline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Q4 2026 or Immediate Outage Window"
                    value={formData.estimatedTimeline}
                    onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eng. Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@company.om"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Phone / GSM (+968) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+968 9XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Technical Scope Description */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                  Technical Specifications & Scope Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify circuit length (km), cable cross-section (e.g. 1x800mm² XLPE), number of GIS bays, test voltage requirements, or outage schedule constraints..."
                  value={formData.scopeDescription}
                  onChange={(e) => setFormData({ ...formData, scopeDescription: e.target.value })}
                  className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Document Upload Placeholder */}
              <div className="p-3.5 rounded-lg border border-dashed border-slate-700 bg-slate-900/40 text-center relative hover:border-amber-500/60 transition-colors">
                <input
                  type="file"
                  id="tender-file-input"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center gap-1 text-xs">
                  <Upload className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold text-slate-200">
                    {uploadedFileName ? (
                      <span className="text-emerald-400 font-mono">Uploaded: {uploadedFileName}</span>
                    ) : (
                      'Attach Single-Line Diagram (SLD), BOQ, or Tender PDF (Optional)'
                    )}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Drag & drop or browse from workstation (PDF, DWG, XLSX up to 50MB)
                  </span>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col sm:flex-row gap-4 text-xs text-slate-300 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.requiresOetcLiaison}
                    onChange={(e) => setFormData({ ...formData, requiresOetcLiaison: e.target.checked })}
                    className="rounded text-amber-500 focus:ring-amber-500 bg-slate-800 border-slate-700"
                  />
                  <span>Requires OETC / Nama Grid Liaison & Sanction for Test (SFT)</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Technical Enquiry for Engineering Review</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  All quotes handled under strict Non-Disclosure Agreement (NDA) & OETC Grid Code security
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
