import { ServiceDetail } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'gis-installation',
    title: '132 kV Gas-Insulated Switchgear (GIS) Installation',
    shortDesc: 'Precision erection, laser busbar alignment, cleanroom gas bay assembly, and pre-commissioning of 132 kV GIS bays compliant with IEC 62271-203 and OETC standards.',
    voltageClass: '132 kV Transmission Class',
    standard: 'IEC 62271-203 / OETC Grid Code',
    iconName: 'Cpu',
    heroImage: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Cleanroom module assembly with micro-particulate atmospheric control during enclosure coupling',
      'High-precision optical & laser alignment for 3-phase busbars and expansion bellows',
      'Torque calibration of all gas-tight flanges using calibrated electronic torque-angle wrenches',
      'Integrated secondary control wiring, interlocking logic, and CT/VT ratio testing'
    ],
    equipmentUsed: [
      'Laser leveling and optical collimators (0.05 mm tolerance)',
      'High-capacity vacuum pump units (< 1.0 mbar ultimate vacuum)',
      'DILO SF6 multi-gas handling cart & precision electronic moisture meters',
      'Hydraulic precision jacking systems for bay positioning'
    ],
    technicalSpecs: [
      { label: 'Rated Voltage (Ur)', value: '145 kV / 132 kV Nominal' },
      { label: 'Rated Lightning Impulse (Up)', value: '650 kV Peak' },
      { label: 'Short-Time Withstand (Ik)', value: '40 kA for 3.0 Seconds' },
      { label: 'Rated Gas Pressure (Pme)', value: '0.45 – 0.60 MPa at 20°C' },
      { label: 'Max Permissible Leakage', value: '< 0.5% per annum (IEC std)' },
      { label: 'Operating Mechanism', value: 'Hydraulic / Spring-charged double-trip' }
    ],
    methodologySteps: [
      {
        step: 1,
        title: 'Foundation Survey & Base Channel Anchoring',
        description: 'Laser survey of floor flatness (±2 mm over 10 meters) and embedding of seismic tie-down anchor plates.'
      },
      {
        step: 2,
        title: 'Modular Bay Erection in Controlled Atmosphere',
        description: 'Erection of breaker, disconnector, and busbar modules under positive-pressure cleanroom tents to prevent dust ingress.'
      },
      {
        step: 3,
        title: 'Evacuation & Deep Vacuum Holding Test',
        description: 'Evacuation of compartments down to < 1.0 mbar, held for 4 hours to verify absolute seal integrity and desorb moisture.'
      },
      {
        step: 4,
        title: 'SF6 Gas Charging & Quality Certification',
        description: 'Filling with virgin or recycled SF6 gas to nominal density with dew point check (< -36°C) and purity verification (> 99.5%).'
      }
    ]
  },
  {
    id: 'hv-hipot-pd-testing',
    title: 'High-Voltage AC Resonant Hipot & PD Diagnostics',
    shortDesc: 'Mobile frequency-tuned variable resonant test sets for onsite dielectric withstand and ultra-sensitive partial discharge (PD) testing of cables and GIS up to 260 kV.',
    voltageClass: 'Up to 260 kV Test Potential',
    standard: 'IEC 60840 / IEC 60270 / IEEE 400',
    iconName: 'Zap',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Variable frequency resonant test system (20 Hz - 300 Hz) to eliminate reactive power supply constraints on remote desert sites',
      'Ultra-sensitive UHF and acoustic Partial Discharge (PD) detection with phase-resolved PRPD pattern recognition',
      'Dielectric loss angle (Tan Delta / Power Factor) assessment on XLPE insulation systems',
      'Comprehensive OETC witness certification report generation with automated wave capture'
    ],
    equipmentUsed: [
      'Omicron CPC 100 + MPD 600 multi-channel PD measurement system',
      'High-Voltage Mobile Resonant Reactor (260 kV / 80 A output)',
      'BAUR Frida & Viola VLF (0.1 Hz) 60 kV True Sinusoidal Hipot',
      'Calibrated UHF sensors for GIS compartment acoustic & electromagnetic scanning'
    ],
    technicalSpecs: [
      { label: 'Max Test Voltage Output', value: '260 kV AC RMS' },
      { label: 'Tuned Frequency Range', value: '20 Hz – 300 Hz Continuous' },
      { label: 'PD Measurement Sensitivity', value: '< 2 pC (Picocoulombs)' },
      { label: 'Tan Delta Resolution', value: '1 x 10^-5 precision' },
      { label: 'Test Standard Compliance', value: 'IEC 60840 Annex H / IEC 62271-203' },
      { label: 'Safety Interlocks', value: 'Triple emergency shunt + zero-volt interlock' }
    ],
    methodologySteps: [
      {
        step: 1,
        title: 'Pre-Test Insulation Resistance & Sheath Verification',
        description: 'Verification of outer HDPE sheath integrity with 10 kV DC sheath test (1 minute per IEC 60229) and mega-ohm insulation check.'
      },
      {
        step: 2,
        title: 'Resonant Loop Tuning & High Voltage Ramp',
        description: 'Connecting the mobile tank, tuning the variable reactor to system capacitance resonance, and ramping voltage in controlled steps.'
      },
      {
        step: 3,
        title: '60-Minute Withstand at 1.73 Uo / 2.0 Uo',
        description: 'Holding rated test voltage continuously for 60 minutes while logging voltage stability and leakage current waveforms.'
      },
      {
        step: 4,
        title: 'Online Partial Discharge Mapping & Spectral Analysis',
        description: 'Synchronous recording across UHF/HFCT sensors to localize any micro-voids, electrical trees, or contaminated gas chambers.'
      }
    ]
  },
  {
    id: 'underground-cable-laying',
    title: '132 kV / 33 kV Underground Cable Laying & Trefoil Cleating',
    shortDesc: 'Engineered civil trenching, thermal stabilized sand bedding, heavy winch pulling, trefoil cleat anchoring, and precast concrete slab protection across Ash Sharqiyah terrain.',
    voltageClass: '33 kV & 132 kV XLPE Single Core',
    standard: 'IEC 60287 / IEC 60840 / OETC Cable Spec',
    iconName: 'Network',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Thermal resistivity (TR) testing and stabilized cement-sand thermal backfill for desert soil heat dissipation',
      'Calculated pulling tension monitoring with continuous digital dynamometer recording to prevent elongation',
      'Heavy-duty cast aluminum trefoil cleats engineered to withstand 40 kA short-circuit electromagnetic bursting forces',
      'Heavy-gauge interlocking precast concrete warning slabs and OETC standardized warning tapes'
    ],
    equipmentUsed: [
      '10-Ton motorized hydraulic cable puller winch with load-limiting recorder',
      'Motorized ground and corner rollers with non-marking nylon drums',
      'Thermal needle probe (KD2 Pro) for in-situ soil thermal resistivity',
      'Heavy trenching excavators and laser grade trench bed compactors'
    ],
    technicalSpecs: [
      { label: 'Conductor Sizes Handled', value: '400 mm² up to 2500 mm² Cu/Al' },
      { label: 'Max Pulling Tension', value: 'Monitored at < 50 N/mm² conductor limit' },
      { label: 'Trefoil Cleat Rating', value: 'Short-circuit tested to 110 kA peak (IEC 61914)' },
      { label: 'Trench Bedding Depth', value: '1200 mm to 1500 mm below ground level' },
      { label: 'Backfill Thermal Resistivity', value: '< 1.0 K·m/W guaranteed' },
      { label: 'Cover Protection', value: 'Precast reinforced concrete tiles (Class 40)' }
    ],
    methodologySteps: [
      {
        step: 1,
        title: 'Trench Excavation & Route Survey',
        description: 'Trenching along authorized OETC easements with optical level check and trial pit verification for underground utilities.'
      },
      {
        step: 2,
        title: 'Thermal Sand Bedding & Roller Placement',
        description: 'Laying 150 mm sieved thermal bedding sand, compacting, and positioning low-friction rollers every 2.0 meters.'
      },
      {
        step: 3,
        title: 'Winch Pulling with Dynamometer Telemetry',
        description: 'Pulling cable with pulling eye and swivel, continuously monitoring tensions below manufacturer elongation ceilings.'
      },
      {
        step: 4,
        title: 'Trefoil Formation & Cleat Torque Locking',
        description: 'Forming triangular trefoil formation, installing non-magnetic aluminum cleats at calculated spacing, and placing protective slabs.'
      }
    ]
  },
  {
    id: 'earthing-lightning-protection',
    title: 'Industrial Substation Earthing & Lightning Grids',
    shortDesc: 'Deep earth well drilling, bare stranded copper grid deployment, exothermic Cadweld bonding, and Wenner 4-pin soil resistivity surveys meeting IEEE 80 standards.',
    voltageClass: 'Substation Earthing (All Voltage Tiers)',
    standard: 'IEEE Standard 80 / IEC 62305 / OETC Earthing Spec',
    iconName: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Comprehensive step & touch potential calculation models customized for rocky desert terrain in Ash Sharqiyah',
      'Deep bore earth wells with low-resistivity bentonite / carbonaceous backfill compound',
      'Exothermic molecular welding (Cadweld) for corrosion-free permanent joints underground',
      'Surge arrester earth down-conductors and overhead Faraday cage lightning shielding'
    ],
    equipmentUsed: [
      'AEMC 6472 multi-function ground resistance & soil resistivity tester',
      'Deep well rotary drilling rigs for 30m+ earth electrode placement',
      'Cadweld graphite molds and exothermic reaction ignition systems',
      'Heavy hydraulic crimping tools for high-density copper earthing tails'
    ],
    technicalSpecs: [
      { label: 'Target Grid Resistance (Rg)', value: '< 0.5 Ohms (Grid Substations) / < 1.0 Ohm' },
      { label: 'Earthing Conductor Size', value: '70 mm² up to 240 mm² HDHC Bare Copper' },
      { label: 'Bonding Joint Standard', value: 'Exothermic Molecular Weld (IEEE 837 Class A)' },
      { label: 'Soil Resistivity Method', value: 'Wenner 4-Pin Equal Spacing (0.5m – 32m)' },
      { label: 'Earth Well Depth', value: 'Up to 45 meters per electrode' },
      { label: 'Permissible Touch Voltage', value: 'Calculated per IEEE 80 body weight curve' }
    ],
    methodologySteps: [
      {
        step: 1,
        title: 'Soil Resistivity Survey & Geological Profiling',
        description: 'Wenner 4-pin test along orthogonal axes across the substation plot to identify strata resistivity layers.'
      },
      {
        step: 2,
        title: 'Earth Grid Mesh Excavation & Copper Laying',
        description: 'Laying 95 mm² / 120 mm² bare copper conductors in 800 mm deep trenches in a perimeter mesh pattern.'
      },
      {
        step: 3,
        title: 'Deep Electrode Boring & Exothermic Cadweld Jointing',
        description: 'Drilling deep holes, inserting copper-bonded steel rods with conductive backfill, and Cadwelding all cross-joints.'
      },
      {
        step: 4,
        title: 'Fall-of-Potential Verification & Handover Dossier',
        description: 'High-current earth impedance injection test to confirm Rg is below OETC 0.5 Ohm threshold.'
      }
    ]
  },
  {
    id: 'fiber-optics-scada',
    title: 'Fiber Optic Infrastructure (OPGW, FOC & SCADA Telecom)',
    shortDesc: 'Substation teleprotection optical infrastructure, OPGW aerial stringing, underground fiber ducting, ribbon and single-mode fusion splicing (LC/ST), and bidirectional OTDR testing.',
    voltageClass: 'Telecom & High-Speed SCADA Teleprotection',
    standard: 'ITU-T G.652D / IEEE 1138 / OETC SCADA Spec',
    iconName: 'Radio',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Optical Ground Wire (OPGW) tension stringing on 132 kV overhead transmission towers',
      'Substation control room fiber distribution hubs (FDF) with dust-proof LC/ST/SC patch bays',
      'Ultra-low attenuation core-alignment fusion splicing (< 0.02 dB per splice loss)',
      'Sub-millisecond teleprotection interface for distance protection relays (Line Diff 87L)'
    ],
    equipmentUsed: [
      'Fujikura 90S+ precision core-alignment arc fusion splicers',
      'EXFO FTB-1v2 dual-wavelength (1310/1550 nm) high-dynamic-range OTDR',
      'VIP fiber inspection microscopes with automated pass/fail IEC 61300-3-35',
      'High-precision optical power meters and laser light sources'
    ],
    technicalSpecs: [
      { label: 'Fiber Core Specification', value: 'Single-Mode ITU-T G.652.D / G.655' },
      { label: 'Max Allowable Splice Loss', value: '≤ 0.02 dB per fusion splice' },
      { label: 'Connector Interfaces', value: 'LC/UPC, LC/APC, ST, SC Industrial' },
      { label: 'OTDR Dynamic Range', value: '45 dB for long-distance link qualification' },
      { label: 'Teleprotection Protocols', value: 'C37.94 / IEEE 1588 PTP Time Sync / IEC 61850' },
      { label: 'OPGW Tension Capacity', value: 'Up to 110 kN Rated Tensile Strength' }
    ],
    methodologySteps: [
      {
        step: 1,
        title: 'Duct Cleansing, Mandrel Proving & Jetting',
        description: 'Air blow proving of HDPE sub-ducts with calibration sponge and pneumatic fiber jetting equipment.'
      },
      {
        step: 2,
        title: 'Substation Room Ingress & FDF Termination',
        description: 'Securing armored cables inside the communication room, stripping buffer tubes, and routing into splice cassettes.'
      },
      {
        step: 3,
        title: 'Core Alignment Arc Splicing',
        description: 'Precision cleaving with diamond blades and automatic electric arc fusion with heat-shrink protection sleeves.'
      },
      {
        step: 4,
        title: 'Bidirectional OTDR & Optical Return Loss (ORL)',
        description: 'Dual-wavelength end-to-end trace capture, event table generation, and OETC SCADA certification sign-off.'
      }
    ]
  },
  {
    id: 'sf6-gas-monitoring',
    title: 'SF6 Gas Management, Vacuum Dehydration & Leak Detection',
    shortDesc: 'Eco-conscious zero-emission SF6 gas recovery, deep vacuum dehydration, SO2/HF decomposition byproduct chromatography, and infrared optical gas imaging (OGI).',
    voltageClass: 'High-Voltage Switchgear Compartments (132 kV)',
    standard: 'IEC 60376 / IEC 60480 / CIGRE Guidelines',
    iconName: 'Wind',
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Closed-loop oil-free SF6 gas recovery and purification compliant with zero atmospheric venting policies',
      'Gas purity, moisture content (dew point), and sulfur dioxide (SO2) decomposition diagnostics',
      'Optical Gas Imaging (OGI) with FLIR thermal infrared cameras for micro-leak visualization without outage',
      'Cylinder tracking, density monitor calibration, and environmental mass-balance reporting'
    ],
    equipmentUsed: [
      'DILO Mega-Series SF6 recovery & vacuum cart with high-efficiency oil-free compressors',
      'WIKA GA11 multi-analyzer for SO2, HF, Dew Point, and SF6 percentage (>99.9%)',
      'FLIR GF306 Optical Gas Imaging infrared camera for live leak spotting',
      'Laser photoacoustic SF6 leak detectors (detection limit < 1 ppmv)'
    ],
    technicalSpecs: [
      { label: 'Recovery Capability', value: '< 1 mbar final residual chamber pressure' },
      { label: 'Moisture Limit (Dew Point)', value: '< -36°C at atmospheric pressure (IEC standard)' },
      { label: 'Minimum Gas Purity', value: '≥ 99.5% by volume' },
      { label: 'SO2 Decomposition Limit', value: '< 12 ppmv (Action threshold)' },
      { label: 'Environmental Target', value: 'Zero Venting / 100% Closed-Loop Recycling' },
      { label: 'Leak Detection Precision', value: '0.001 cc/sec with laser photoacoustic sensor' }
    ],
    methodologySteps: [
      {
        step: 1,
        title: 'Live Infrared Leakage Survey',
        description: 'Scanning GIS compartment joints, burst discs, and valves with tuned infrared optical gas cameras.'
      },
      {
        step: 2,
        title: 'Closed-Loop Gas Evacuation & Filtration',
        description: 'Pumping SF6 through molecular sieve desiccant filters and oil separators into certified pressure vessels.'
      },
      {
        step: 3,
        title: 'Deep Vacuum Desorption & Chamber Purge',
        description: 'Vacuum holding at < 1.0 mbar for minimum 2 hours to eliminate moisture and atmospheric gases.'
      },
      {
        step: 4,
        title: 'Dry Gas Recharge & Multi-Parameter Certification',
        description: 'Recharging with purified gas, allowing 24-hour stabilization, and certifying dew point and purity before energization.'
      }
    ]
  }
];
