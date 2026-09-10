import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectItem } from '../types';
import { 
  FolderGit2, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  ChevronRight, 
  Zap, 
  CheckCircle2, 
  Filter,
  Search
} from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (projectId: string) => void;
  onOpenQuoteModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onOpenQuoteModal,
}) => {
  const [filterVoltage, setFilterVoltage] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesVoltage = filterVoltage === 'all' || project.voltage.includes(filterVoltage);
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesVoltage && matchesStatus && matchesSearch;
  });

  return (
    <div className="w-full bg-[#070B14] text-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-xs font-mono text-amber-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>ASH SHARQIYAH REGIONAL PROJECT DASHBOARD</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Substation Projects & Live Site Execution
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Monitoring high-voltage substation expansions, cable trenching, resonant Hipot testing, and teleprotection splicing across Sur, Ibra, Al Kamil, and Jaalan corridors.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all self-start md:self-auto cursor-pointer"
          >
            <span>Tender Technical RFQ</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Project KPI Summary Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0B132B] p-5 rounded-xl border border-slate-800">
          <div className="space-y-1 border-r border-slate-800/80 pr-4">
            <div className="text-xs font-mono text-slate-400">ACTIVE REGIONAL SITES</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">
              {PROJECTS_DATA.length} Projects
            </div>
            <div className="text-[11px] text-amber-400 font-mono">Ash Sharqiyah Region</div>
          </div>

          <div className="space-y-1 border-r border-slate-800/80 pr-4">
            <div className="text-xs font-mono text-slate-400">SAFE WORK RECORD</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400">
              1,280,000+
            </div>
            <div className="text-[11px] text-slate-400 font-mono">Zero LTI Safe Hours</div>
          </div>

          <div className="space-y-1 border-r border-slate-800/80 pr-4">
            <div className="text-xs font-mono text-slate-400">MAX OPERATING TIER</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-sky-400">
              132 kV
            </div>
            <div className="text-[11px] text-slate-400 font-mono">OETC Transmission Grid</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-slate-400">TEST CAPABILITY</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-amber-400">
              260 kV AC
            </div>
            <div className="text-[11px] text-slate-400 font-mono">Mobile Resonant Reactor</div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-[#0B132B]/80 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Voltage Filter */}
            <div className="flex items-center gap-1.5 bg-[#070B14] p-1 rounded-lg border border-slate-800 text-xs">
              <span className="text-slate-400 px-2 font-mono text-[11px]">Voltage:</span>
              <button
                onClick={() => setFilterVoltage('all')}
                className={`px-3 py-1 rounded font-medium transition-colors ${filterVoltage === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilterVoltage('132')}
                className={`px-3 py-1 rounded font-medium transition-colors ${filterVoltage === '132' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                132 kV
              </button>
              <button
                onClick={() => setFilterVoltage('33')}
                className={`px-3 py-1 rounded font-medium transition-colors ${filterVoltage === '33' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                33 kV
              </button>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5 bg-[#070B14] p-1 rounded-lg border border-slate-800 text-xs">
              <span className="text-slate-400 px-2 font-mono text-[11px]">Phase:</span>
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1 rounded font-medium transition-colors ${filterStatus === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus('active')}
                className={`px-3 py-1 rounded font-medium transition-colors ${filterStatus === 'active' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                Execution
              </button>
              <button
                onClick={() => setFilterStatus('testing')}
                className={`px-3 py-1 rounded font-medium transition-colors ${filterStatus === 'testing' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                Hipot/Testing
              </button>
              <button
                onClick={() => setFilterStatus('completed')}
                className={`px-3 py-1 rounded font-medium transition-colors ${filterStatus === 'completed' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                Energized
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search site, city, client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#070B14] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group bg-[#0B132B] rounded-xl border border-slate-800 hover:border-amber-500/60 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Image & Status Badges */}
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
                      : project.status === 'testing'
                      ? 'bg-sky-950/90 text-sky-400 border border-sky-700'
                      : 'bg-amber-950/90 text-amber-400 border border-amber-700'
                  }`}>
                    {project.status === 'completed' ? 'Energized' : project.status === 'testing' ? 'Testing & Hipot' : 'In Execution'}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span className="line-clamp-1">{project.location.split(',')[0]}</span>
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-slate-300">
                      <Building2 className="w-3 h-3 text-sky-400" />
                      {project.client.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Progress:</span>
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

              {/* Card Footer */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {project.safeWorkDays} Safe Days
                </span>
                <span className="text-amber-400 group-hover:underline flex items-center gap-1 font-sans font-semibold">
                  Inspect Site Data <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-400 space-y-2">
            <p className="text-sm">No project matching current filter criteria.</p>
            <button
              onClick={() => {
                setFilterVoltage('all');
                setFilterStatus('all');
                setSearchQuery('');
              }}
              className="text-xs text-amber-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
