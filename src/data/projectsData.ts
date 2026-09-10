import { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'sur-grid-station-132kv',
    title: 'Sur 132/33 kV Industrial Grid Station Expansion',
    location: 'Sur Industrial Estate, Ash Sharqiyah South, Oman',
    voltage: '132/33 kV',
    client: 'Oman Electricity Transmission Company (OETC)',
    status: 'active',
    progressPercentage: 88,
    currentPhase: 'Phase 4: AC Resonant Hipot & SF6 Gas Purity Testing',
    safeWorkDays: 485,
    description: 'Turnkey electrical installation and commissioning of four new 132 kV GIS bays, 2 x 63 MVA power transformer cable terminations, and underground interconnecting circuits to supply expanding LNG and industrial manufacturing plants in Sur.',
    completionDate: 'Q4 2026 (Target Completion)',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1000&q=80',
    scopeHighlights: [
      '4 x 132 kV SF6 Gas-Insulated Switchgear (GIS) bay erection and laser alignment',
      'Installation of 12 x 132 kV outdoor sealing ends with porcelain insulator bushings',
      'Underground 132 kV 1x1200 mm² XLPE cable laying with cast aluminum trefoil cleats',
      'IEEE 80 earthing grid extension with 35 deep well earth electrodes (Rg = 0.38 Ω)'
    ],
    specifications: [
      { key: 'Substation Type', val: 'Indoor 132 kV GIS' },
      { key: 'Total Cable Laid', val: '14.8 km 132 kV XLPE' },
      { key: 'Busbar Rating', val: '2500 A / 40 kA 3-sec' },
      { key: 'PD Level Recorded', val: '< 1.8 pC (IEC compliant)' }
    ]
  },
  {
    id: 'ibra-cable-interconnector',
    title: 'Ibra North 132 kV Underground Feeder Interconnector',
    location: 'Ibra, Ash Sharqiyah North, Oman',
    voltage: '132 kV',
    client: 'OETC / Regional Transmission Grid',
    status: 'testing',
    progressPercentage: 94,
    currentPhase: 'Pre-Commissioning: 260 kV Mobile Resonant Hipot & Sheath Integrity',
    safeWorkDays: 620,
    description: 'Strategic high-voltage underground transmission link traversing challenging mountainous and wadi terrain in Ash Sharqiyah North. Features engineered concrete trench slabs, thermal stabilized backfill, and fiber teleprotection links.',
    completionDate: 'November 2026',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    scopeHighlights: [
      '22.4 circuit-km of 132 kV 1x800 mm² copper conductor XLPE cable pulling',
      'Custom reinforced precast concrete trench slab installation across 4 wadi crossings',
      'Dual 48-core armored fiber optic communication ducting with OTDR trace documentation',
      'Continuous pulling tension telemetric monitoring (zero sheath stretch defects)'
    ],
    specifications: [
      { key: 'Transmission Capacity', val: '180 MVA per circuit' },
      { key: 'Trench Depth', val: '1500 mm nominal' },
      { key: 'Thermal Backfill TR', val: '0.85 K·m/W certified' },
      { key: 'Cross-Bonding Link Boxes', val: '18 SVL link boxes installed' }
    ]
  },
  {
    id: 'al-kamil-gis-modernization',
    title: 'Al Kamil 132 kV GIS Modernization & Gas Diagnostics',
    location: 'Al Kamil Wal Wafi, Ash Sharqiyah, Oman',
    voltage: '132 kV',
    client: 'Nama Transmission / Grid Maintenance Division',
    status: 'completed',
    progressPercentage: 100,
    currentPhase: 'Energized & Handed Over to OETC Control',
    safeWorkDays: 810,
    description: 'Comprehensive overhaul, precision bay re-sealing, SF6 gas evacuation/refiltration, and dielectric diagnostic testing of 6 critical transmission bays supplying the central Ash Sharqiyah power loop.',
    completionDate: 'June 2026',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    scopeHighlights: [
      'Complete evacuation and closed-loop filtration of 2,400 kg of SF6 gas',
      'Replacement of micro-corroded rupture disc seals and desiccant molecular sieves',
      'Optical Gas Imaging (OGI) infrared thermography during full 132 kV load',
      'Handover dossier approved by OETC Technical Audit Committee with zero defects'
    ],
    specifications: [
      { key: 'Gas Dew Point Achieved', val: '-44.2°C (exceeds IEC)' },
      { key: 'SF6 Purity', val: '99.8% by volume' },
      { key: 'Contact Resistance (Ductor)', val: '< 18 µΩ per phase' },
      { key: 'Timing Discrepancy', val: '< 1.5 ms between poles' }
    ]
  },
  {
    id: 'jaalan-feeder-opgw',
    title: 'Jaalan Bani Bu Ali 33 kV Distribution & OPGW Loop',
    location: 'Jaalan Bani Bu Ali / Hassan, Ash Sharqiyah South, Oman',
    voltage: '33 kV',
    client: 'Mazoon Electricity / Nama Distribution Group',
    status: 'active',
    progressPercentage: 76,
    currentPhase: 'Phase 3: Trefoil Cable Clamping & FOC Fusion Splicing',
    safeWorkDays: 340,
    description: 'Reinforcement of coastal power reliability with 33 kV underground three-phase trefoil feeders, automated vacuum circuit breakers, and 24-core OPGW fiber optic loop for SCADA remote telemetry.',
    completionDate: 'January 2027',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    scopeHighlights: [
      '31.5 km of 33 kV 3x300 mm² XLPE cable installation with heavy-duty cleats',
      'FOC core-alignment fusion splicing across 14 distribution substations',
      'Substation deep well earthing with bentonite compound in rocky coastal soil',
      'Surge arrester deployment for severe desert lightning flashover mitigation'
    ],
    specifications: [
      { key: 'Voltage Rating', val: '33 kV / 36 kV Max' },
      { key: 'Splice Loss Average', val: '0.018 dB (target < 0.05 dB)' },
      { key: 'Cable Cleat Spacing', val: '800 mm centers (40 kA rated)' },
      { key: 'Earth Resistance', val: '0.62 Ω achieved' }
    ]
  },
  {
    id: 'ras-al-hadd-earthing-grid',
    title: 'Ras Al Hadd Substation Earthing & Marine-Grade Grid',
    location: 'Ras Al Hadd Coastline, Ash Sharqiyah, Oman',
    voltage: '33/11 kV',
    client: 'Infrastructure & Coastal Grid Directorate',
    status: 'completed',
    progressPercentage: 100,
    currentPhase: 'Commissioned & Operating',
    safeWorkDays: 520,
    description: 'Specialized marine-resistant earthing grid and high-voltage cable terminations designed to withstand high salinity, coastal humidity, and elevated ground water levels at Oman’s easternmost cape.',
    completionDate: 'March 2026',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    scopeHighlights: [
      'Exothermic Cadweld molecular joints with special anti-sulfur corrosion seals',
      'Tinned bare copper 120 mm² perimeter loop with 24 deep marine-drilled electrodes',
      'VLF Tan-Delta dielectric testing on coastal feeder cables',
      'Full compliance with OETC and Ministry of Environment marine standards'
    ],
    specifications: [
      { key: 'Earthing Resistance (Rg)', val: '0.41 Ω (target < 1.0 Ω)' },
      { key: 'Conductor Material', val: 'Tinned High-Conductivity Copper' },
      { key: 'Cadweld Joints', val: '142 joints 100% NDT inspected' },
      { key: 'VLF Test Potential', val: '3Uo 0.1 Hz Sinusoidal' }
    ]
  },
  {
    id: 'bidbid-sur-transmission-testing',
    title: 'Bidbid – Sur Corridor 132 kV Transmission Resonant Testing',
    location: 'Bidbid - Sur Highway Transmission Spine, Oman',
    voltage: '132 kV',
    client: 'OETC High-Voltage Asset Management',
    status: 'testing',
    progressPercentage: 91,
    currentPhase: 'Testing: Offline VLF & Acoustic PD Scan on Section 3',
    safeWorkDays: 730,
    description: 'High-voltage pre-energization testing and diagnostic assessment of newly installed 132 kV cable links along the dualized Bidbid-Sur arterial corridor using our mobile 260 kV resonant reactor.',
    completionDate: 'October 2026',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    scopeHighlights: [
      'Onsite AC resonant dielectric testing at 1.73 Uo (132 kV cable system)',
      'Simultaneous phase-resolved partial discharge (PRPD) localization',
      'Cross-bonding link box sheath voltage limiters (SVL) electrical verification',
      'OETC certified test protocols issued for immediate grid switching clearance'
    ],
    specifications: [
      { key: 'Test Voltage Applied', val: '160 kV AC Resonant (54 Hz)' },
      { key: 'Insulation Resistance', val: '> 50 GΩ' },
      { key: 'Circuit Length Tested', val: '18.4 km continuous section' },
      { key: 'PD Threshold', val: 'Pass (0 pC detected above background)' }
    ]
  }
];
