import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { PROJECTS_DATA } from '../data/projectsData';
import { LiveTicker } from '../components/LiveTicker';
import { CleatCalculator } from '../components/CleatCalculator';
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Activity, 
  MapPin, 
  FileText, 
  Sliders, 
  Cpu, 
  HardHat, 
  Wrench, 
  PhoneCall,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
  onSelectService: (serviceId: string) => void;
  onSelectProject: (projectId: string) => void;
  onOpenQuoteWithSpecs: (specs: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onSelectService,
  onSelectProject,
  onOpenQuoteWithSpecs,
}) => {
  return (
    <div className="w-full bg-[#070B14] text-slate-200">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-slate-800">
        {/* Background Grid and Radial Glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Region & Authority Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs font-mono text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="font-semibold">OETC REGISTERED CLASS-A TRANSMISSION CONTRACTOR</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">ASH SHARQIYAH, OMAN</span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                Powering Oman’s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                  132 kV High-Voltage
                </span> <br />
                Transmission Grid.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Specialized contracting, precision erection, and diagnostic testing of 132 kV Gas-Insulated Substations (GIS), underground transmission feeders, and optical SCADA infrastructure across Ash Sharqiyah and nationwide.
              </p>

              {/* Key Capabilities Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono">
                <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  132 kV GIS Assembly
                </span>
                <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-sky-400" />
                  260 kV Resonant Hipot & PD
                </span>
                <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                  Trefoil Cleat Cable Pulling
                </span>
                <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Zero LTI HSE Standard
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  id="hero-request-quote-btn"
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all transform active:scale-95 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Technical Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-explore-projects-btn"
                  onClick={() => onNavigate('projects')}
                  className="px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explore Ash Sharqiyah Sites</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

              {/* Location Reference Banner */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Base Depot: Plot 142, Industrial Area, Ash Sharqiyah Corridor</span>
                <a 
                  href="https://maps.app.goo.gl/iE3PH4f91327UBKT7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  (Maps Link <ExternalLink className="w-3 h-3" />)
                </a>
              </div>
            </div>

            {/* Right Interactive Telemetry & Substation Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-[#0A0F1D] border border-amber-500/30 p-6 shadow-2xl space-y-6">
                {/* Header Status */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs text-white font-semibold uppercase tracking-wider">
                      Grid Station Live Status
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    OETC SCADA LINK
                  </span>
                </div>

                {/* Live Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="p-3.5 rounded-lg bg-[#070B14] border border-slate-800">
                    <div className="text-[11px] text-slate-400">OPERATING VOLTAGE</div>
                    <div className="text-xl font-bold text-amber-400 mt-1">132.4 kV</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">±0.2% Phase Balance</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#070B14] border border-slate-800">
                    <div className="text-[11px] text-slate-400">FREQUENCY</div>
                    <div className="text-xl font-bold text-sky-400 mt-1">50.02 Hz</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Grid Synchronized</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#070B14] border border-slate-800">
                    <div className="text-[11px] text-slate-400">SF6 PRESSURE (20°C)</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">0.52 MPa</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Dewpoint: -44.5°C</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#070B14] border border-slate-800">
                    <div className="text-[11px] text-slate-400">PARTIAL DISCHARGE</div>
                    <div className="text-xl font-bold text-white mt-1">&lt; 1.5 pC</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">IEC 60270 Pass</div>
                  </div>
                </div>

                {/* Featured Active Site */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400 font-semibold">FLAGSHIP PROJECT:</span>
                    <span className="text-slate-400">Sur Industrial 132/33kV</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-2 rounded-full w-[88%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Phase: Resonant Hipot & Gas Filling</span>
                    <span className="text-white font-mono font-bold">88% Done</span>
                  </div>
                </div>

                {/* Emergency Contact Bar */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>24/7 HV Emergency Hotline:</span>
                  </div>
                  <a href="tel:+96825540000" className="font-mono text-amber-400 font-bold hover:underline">
                    +968 2554 1320
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Capabilities Ticker */}
        <LiveTicker />
      </section>

      {/* CORE STATS BAR */}
      <section className="py-10 bg-[#080D1A] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-display font-bold text-amber-400">
                132 kV
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Full Transmission Certified
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-display font-bold text-white">
                520+ km
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                HV Underground Cables Laid
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-display font-bold text-emerald-400">
                1.28M
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Safe Man-Hours (Zero LTI)
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-display font-bold text-sky-400">
                260 kV
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Mobile Resonant Test Fleet
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES OVERVIEW */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-amber-400 tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>High-Voltage Engineering Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Specialized High-Voltage Contracting Services
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Engineered to withstand extreme desert temperatures (+50°C), corrosive coastal salt mist in Sur, and mountainous rock strata in Ash Sharqiyah.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500 text-slate-200 hover:text-white text-xs font-semibold transition-all self-start md:self-auto"
          >
            <span>View All Detailed Specs</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Services 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0B132B] rounded-xl border border-slate-800 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {service.voltageClass}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {service.standard}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {service.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenQuoteModal}
                  className="text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-800"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CABLE CLEAT CALCULATOR SECTION */}
      <section className="py-16 bg-[#080D1A] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
              Onsite Engineering Utilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Electrodynamic Force & Cleat Interval Simulator
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Calculate the required mechanical restraint and trefoil cleat intervals to prevent cable whipping during extreme 40 kA fault currents in accordance with IEC 61914.
            </p>
          </div>

          <CleatCalculator onOpenQuoteWithSpecs={onOpenQuoteWithSpecs} />
        </div>
      </section>

      {/* FEATURED PROJECTS FROM ASH SHARQIYAH */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-sky-400 tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Ash Sharqiyah Substation & Transmission Sites</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Featured Regional Grid Deployments
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Live tracking of ongoing grid station expansions, cable pulls, and pre-commissioning testing across Sur, Ibra, Al Kamil, and Jaalan.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all self-start md:self-auto shadow-md shadow-amber-500/20"
          >
            <span>View All Regional Sites</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.slice(0, 3).map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group bg-[#0B132B] rounded-xl border border-slate-800 hover:border-amber-500/60 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-sm border border-amber-500/40 text-amber-400 font-mono text-xs font-bold">
                    {project.voltage}
                  </span>

                  <span className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold ${
                    project.status === 'completed'
                      ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-700'
                      : 'bg-amber-950/90 text-amber-400 border border-amber-700'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Execution Progress:</span>
                      <span className="text-amber-400 font-bold">{project.progressPercentage}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-amber-300 h-1.5 rounded-full"
                        style={{ width: `${project.progressPercentage}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1 font-mono">
                      {project.currentPhase}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {project.safeWorkDays} Safe Days
                </span>
                <span className="text-amber-400 group-hover:underline flex items-center gap-1 font-sans font-semibold">
                  Details <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HSE & SAFETY COMPLIANCE BANNER */}
      <section className="py-16 bg-[#060913] border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B132B] to-slate-900 border border-amber-500/30 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ZERO ACCIDENT RECORD • 1,280,000+ SAFE MAN-HOURS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  High-Voltage Safety & OETC Golden Rules Compliance
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Working with 132 kV live apparatus demands absolute procedural rigor. Every project operates under strict Permit to Work (PTW) protocols, capacitive dead-testing verification, Arc Flash Level 4 PPE, and certified zero-emission SF6 gas containment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800">
                    <span className="text-amber-400 font-bold block">10 GOLDEN RULES</span>
                    <span className="text-slate-400 text-[11px]">Strict OETC PTW protocol</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800">
                    <span className="text-sky-400 font-bold block">SF6 CLOSED-LOOP</span>
                    <span className="text-slate-400 text-[11px]">Zero atmospheric release</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800">
                    <span className="text-emerald-400 font-bold block">ISO 45001 CERTIFIED</span>
                    <span className="text-slate-400 text-[11px]">Occupational Safety & Health</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center gap-4 text-center p-6 rounded-xl bg-[#070B14]/80 border border-slate-800">
                <HardHat className="w-12 h-12 text-amber-400" />
                <div>
                  <div className="text-lg font-display font-bold text-white">
                    Safety Dossier & Certifications
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Download or inspect our full high-voltage safety matrix and clearances.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('hse')}
                  className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Review HSE Matrix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL QUOTE CALLOUT */}
      <section className="py-20 bg-gradient-to-b from-[#060913] to-[#0A0F1D] text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
            <Zap className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Ready to Mobilize in Ash Sharqiyah?
          </h2>

          <p className="text-base text-slate-300 max-w-xl mx-auto">
            From 132 kV GIS bay additions to emergency cable fault testing and teleprotection splicing, our engineers are prepared for immediate deployment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Submit Project Specification (RFQ)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+96825540000"
              className="px-6 py-4 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Direct Operations Desk: +968 2554 1320</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
