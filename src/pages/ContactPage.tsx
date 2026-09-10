import React, { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Upload, 
  Zap, 
  ShieldCheck, 
  Building2, 
  Copy, 
  Navigation 
} from 'lucide-react';
import { QuoteFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    projectName: '',
    clientCompany: '',
    contactPerson: '',
    email: '',
    phone: '',
    locationInOman: 'Ash Sharqiyah South (Sur Industrial Area)',
    voltageClass: '132 kV Transmission',
    serviceCategory: '132 kV GIS Installation',
    scopeDescription: '',
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
    const text = `SHARQIYAH POWERGRID ENGINEERING (SPGE) - COMMERCIAL QUOTE DOCKET
Reference: ${submittedDocket.referenceId}
Date: ${submittedDocket.timestamp} (Oman Time)
Project: ${formData.projectName}
Client: ${formData.clientCompany}
Voltage Class: ${formData.voltageClass}
Service: ${formData.serviceCategory}
Location: ${formData.locationInOman}
Contact: ${formData.contactPerson} (${formData.phone}, ${formData.email})
Timeline: ${formData.estimatedTimeline}
Attached Document: ${uploadedFileName || 'Yes - Pending transfer'}
Status: Logged with Ash Sharqiyah Operations Base`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full bg-[#070B14] text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-xs font-mono text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>ASH SHARQIYAH HEADQUARTERS & DEPOT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Contact & Commercial Tender Enquiry
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Request an engineering proposal, high-voltage equipment mobilization, or immediate site inspection across Ash Sharqiyah and Oman’s national transmission grid.
          </p>
        </div>

        {/* Main Grid: Form on Left, Contact & Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0B132B] rounded-2xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
                <Zap className="w-4 h-4" />
                <span>Technical Specifications & Tender Submission</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                Project Quote & Site Enquiry Form
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fields marked with * are required for OETC technical compliance evaluation.
              </p>
            </div>

            {submittedDocket ? (
              /* Success View */
              <div className="space-y-6 py-4 animate-in zoom-in-95 duration-200">
                <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Tender Enquiry Successfully Registered
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your high-voltage engineering specification has been logged with our Ash Sharqiyah Technical Operations Desk. An authorized Senior High-Voltage Engineer will review your requirements.
                  </p>
                </div>

                {/* Formal Docket Box */}
                <div className="p-5 rounded-xl bg-[#070B14] border border-slate-800 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-amber-400">
                    <span>REGISTRATION CODE:</span>
                    <span className="font-bold text-sm text-white bg-slate-800 px-2 py-0.5 rounded">
                      {submittedDocket.referenceId}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px] text-slate-300">
                    <div><span className="text-slate-500">Project:</span> {formData.projectName}</div>
                    <div><span className="text-slate-500">Client:</span> {formData.clientCompany}</div>
                    <div><span className="text-slate-500">Voltage:</span> {formData.voltageClass}</div>
                    <div><span className="text-slate-500">Service:</span> {formData.serviceCategory}</div>
                    <div><span className="text-slate-500">Location:</span> {formData.locationInOman}</div>
                    <div><span className="text-slate-500">Timeline:</span> {formData.estimatedTimeline}</div>
                    <div><span className="text-slate-500">Document:</span> {uploadedFileName || 'Single-Line Diagram (SLD)'}</div>
                    <div><span className="text-slate-500">Contact:</span> {formData.contactPerson} ({formData.phone})</div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Registered: {submittedDocket.timestamp}</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      OETC Standardized
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="flex-1 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                  >
                    <Copy className="w-4 h-4 text-amber-400" />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Submission Docket'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmittedDocket(null)}
                    className="flex-1 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
                  >
                    Submit Another Tender Enquiry
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Project Name / Substation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sur 132/33 kV Expansion"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Client Company */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Client / Contractor Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. OETC / Nama / Petrofac / Industrial"
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
                      <option value="132 kV Transmission">132 kV Transmission (OETC Standard)</option>
                      <option value="33 kV Distribution">33 kV Regional Feeder</option>
                      <option value="11 kV / Low Voltage">11 kV / Low Voltage Industrial</option>
                      <option value="Multi-Tier 132/33 kV">Multi-Tier (132/33 kV Substation)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="132 kV GIS Installation">132 kV GIS Substation Erection</option>
                      <option value="HV AC Resonant Hipot & PD Testing">HV AC Resonant Hipot & PD Testing</option>
                      <option value="Underground Cable Laying (Trefoil)">Underground Cable Pulling & Trefoil Cleats</option>
                      <option value="Substation Earthing & IEEE 80">Substation Earthing & Lightning Grid</option>
                      <option value="Fiber Optic (OPGW/FOC) Splicing">Fiber Optic (OPGW/FOC) & OTDR</option>
                      <option value="SF6 Gas Recovery & Leak Detection">SF6 Gas Dehydration & Laser Leak Scan</option>
                      <option value="Emergency Cable Fault Locating">24/7 Emergency Cable Fault Locating</option>
                    </select>
                  </div>
                </div>

                {/* Location in Oman & Timeline */}
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
                      <option value="Bidbid – Sur Transmission Highway">Bidbid – Sur Transmission Highway</option>
                      <option value="Muscat Governorate">Muscat Governorate</option>
                      <option value="Al Wusta / Duqm Industrial Port">Al Wusta / Duqm Industrial Port</option>
                      <option value="Other Sultanate Region">Other Sultanate Region</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Expected Timeline / Outage Window
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Q4 2026 or Scheduled Outage"
                      value={formData.estimatedTimeline}
                      onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                      className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Contact Engineer *
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.om"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Phone (+968) *
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
                    Scope Details, Circuit Length or Equipment Ratings
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify circuit length (km), cable cross-section (e.g. 1x1200mm² Cu), number of GIS bays, test voltage requirements, or outage schedule constraints..."
                    value={formData.scopeDescription}
                    onChange={(e) => setFormData({ ...formData, scopeDescription: e.target.value })}
                    className="w-full bg-[#070B14] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Document Upload Placeholder */}
                <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-slate-900/40 text-center relative hover:border-amber-500 transition-colors">
                  <input
                    type="file"
                    id="contact-tender-file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5 text-xs">
                    <Upload className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold text-slate-200">
                      {uploadedFileName ? (
                        <span className="text-emerald-400 font-mono">Uploaded: {uploadedFileName}</span>
                      ) : (
                        'Attach Single-Line Diagram (SLD), BOQ, or Tender PDF'
                      )}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Drag and drop files up to 50MB (PDF, DWG, XLSX)
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Technical Enquiry for Engineering Review</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    Compliant with OETC transmission technical standards and confidentiality guidelines
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Base Details & Embedded Oman Map Reference (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-[#0B132B] rounded-2xl border border-slate-800 p-6 space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-mono text-amber-400 uppercase">
                <Building2 className="w-4 h-4" />
                <span>Regional Operations & Mobile Fleet Base</span>
              </div>

              <h3 className="text-xl font-display font-bold text-white">
                Ash Sharqiyah High-Voltage Depot
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-display">
                      Central Engineering Office & Heavy Yard
                    </strong>
                    <span className="text-slate-300">
                      Plot 142, Industrial Area, Sur / Ibra Corridor, Ash Sharqiyah, Sultanate of Oman
                    </span>
                    <div className="mt-1 font-mono text-[11px] text-slate-400">
                      Coordinates: 22°34'12.4"N 59°31'44.2"E
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">24/7 High-Voltage Emergency Hotline:</span>
                    <a href="tel:+96825540000" className="text-white hover:text-amber-400 font-mono font-bold text-sm">
                      +968 2554 1320
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Commercial & Tender Submissions:</span>
                    <a href="mailto:tenders@sharqiyah-powergrid.om" className="text-white hover:text-amber-400 font-mono text-sm">
                      tenders@sharqiyah-powergrid.om
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Working Hours:</span>
                    <span className="text-slate-300">
                      Sunday – Thursday: 07:00 – 16:30 (Oman Standard Time)
                    </span>
                    <div className="text-amber-400 font-mono text-[10px] mt-0.5">
                      Emergency Outage Crews on 24/7 Standby
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Link to User's Google Maps URL */}
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/iE3PH4f91327UBKT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all group"
                >
                  <Navigation className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Open Exact Ash Sharqiyah Location in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Interactive Visual Map Reference Card */}
            <div className="bg-[#0B132B] rounded-2xl border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold">OPERATIONAL DISPATCH ZONES</span>
                <span className="text-slate-400">Ash Sharqiyah Loop</span>
              </div>

              {/* Styled Schematic Map Graphic of Ash Sharqiyah */}
              <div className="relative rounded-xl overflow-hidden bg-[#060913] border border-slate-800 p-4 h-56 flex flex-col justify-between font-mono text-[11px]">
                {/* Visual grid lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                {/* Simulated Geographic Nodes */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="p-2 rounded bg-slate-900/90 border border-sky-500/40 text-sky-300">
                    <div className="font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3 text-sky-400" />
                      Bidbid – Sur Corridor
                    </div>
                    <span className="text-[9px] text-slate-400">132 kV Transmission Spine</span>
                  </div>

                  <div className="p-2 rounded bg-slate-900/90 border border-amber-500/40 text-amber-300">
                    <div className="font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      Sur Industrial Hub
                    </div>
                    <span className="text-[9px] text-slate-400">Main Fleet Depot (Plot 142)</span>
                  </div>
                </div>

                {/* Mid Regional Nodes */}
                <div className="relative z-10 flex justify-around items-center my-auto">
                  <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700 text-slate-300">
                    <span className="text-amber-400 font-bold">Ibra North</span> (132 kV)
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-amber-500 to-sky-500" />
                  <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700 text-slate-300">
                    <span className="text-sky-400 font-bold">Al Kamil</span> (GIS 132 kV)
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-sky-500 to-amber-500" />
                  <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700 text-slate-300">
                    <span className="text-emerald-400 font-bold">Jaalan</span> (33 kV)
                  </div>
                </div>

                {/* Bottom Node */}
                <div className="relative z-10 flex justify-between items-end">
                  <span className="text-[10px] text-slate-400">
                    Oman Sea Coastline • Ash Sharqiyah
                  </span>
                  <div className="p-1.5 rounded bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-[10px]">
                    Ras Al Hadd Marine Substation
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Rapid site mobilization: &lt; 90 minutes across all Sharqiyah sectors</span>
                <span className="text-amber-400 font-mono">100% OETC Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
