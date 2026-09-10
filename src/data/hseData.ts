export interface HseRule {
  id: number;
  title: string;
  category: string;
  rule: string;
  verification: string;
}

export const OETC_GOLDEN_RULES: HseRule[] = [
  {
    id: 1,
    title: 'High-Voltage Permit to Work (PTW) & Sanction for Test',
    category: 'Operational Authorization',
    rule: 'Never approach or touch any high-voltage apparatus (132 kV or 33 kV) without an authorized OETC Permit to Work (PTW) or Sanction for Test (SFT) countersigned by the Senior Authorised Person (SAP).',
    verification: 'Physical sign-board at point of work + double-keyed lockout tagout (LOTO).'
  },
  {
    id: 2,
    title: 'Definite Dead Isolation & Earth Application',
    category: 'Electrical Isolation',
    rule: 'Live parts must be mechanically isolated, proven dead with a calibrated HV capacitive voltage detector, and solidly connected to the primary earth grid using approved earth leads before starting work.',
    verification: 'Dual-operator confirmation and visual inspection of closed earth switch blades.'
  },
  {
    id: 3,
    title: 'High-Voltage Safety Clearance Distances',
    category: 'Boundary Control',
    rule: 'Maintain strict boundary safety clearances: 1.5 meters minimum for 33 kV and 3.0 meters minimum for 132 kV live equipment in open air substations.',
    verification: 'Red-and-white plastic chain barriers, danger flags, and ground warning cones.'
  },
  {
    id: 4,
    title: 'SF6 Gas Enclosure Safety & Oxygen Depletion Alarms',
    category: 'Hazardous Gas & Confined Space',
    rule: 'Prior to entering any indoor GIS basement or cable trench chamber, forced ventilation must operate for 20 minutes, and multi-gas atmospheric monitors must confirm O2 > 19.5% and zero toxic SO2 breakdown gas.',
    verification: 'Continuous personal multigas monitor worn at waist level.'
  },
  {
    id: 5,
    title: 'Excavation & Trench Shoring Safety',
    category: 'Civil & Cable Laying',
    rule: 'All cable trenches deeper than 1.2 meters must be supported with certified aluminum trench boxes or stepped back at 45° in desert sands to prevent catastrophic trench wall collapses.',
    verification: 'Daily pre-work trench stability sign-off by competent civil engineer.'
  },
  {
    id: 6,
    title: 'Arc Flash Personal Protective Equipment (PPE)',
    category: 'PPE Standards',
    rule: 'All personnel performing testing, racking, or switching operations must wear certified Level 4 Arc Flash protection (minimum 40 cal/cm² face shield, hood, and flame-retardant coveralls).',
    verification: 'Pre-task PPE check against incident energy labels.'
  },
  {
    id: 7,
    title: 'Exothermic Cadweld Molten Metal Protection',
    category: 'Earthing Installation',
    rule: 'Cadweld operators must use heat-resistant gloves, protective eye goggles, and clear dry mold clamps. Exothermic powder must never be ignited in the presence of moisture or combustible solvents.',
    verification: 'Moisture dry-run flame test on graphite molds before charge ignition.'
  },
  {
    id: 8,
    title: 'Heavy Winch Cable Pulling Rigging Safety',
    category: 'Mechanical Rigging',
    rule: 'No personnel permitted within the direct cable recoil zone or inside corner angles during tension pulling. Load-limiting dynamometers must be set to automatically stop the winch if pulling force exceeds 80% safe limit.',
    verification: 'Radio communication link between winch operator and cable drum lead.'
  }
];

export const SAFETY_CLEARANCES = [
  { voltage: '11 kV Distribution', minDistanceAir: '0.8 Meters', testSafetyZone: '2.0 Meters', barrierType: 'Rigid Barrier / Demarcation Flag' },
  { voltage: '33 kV Sub-Transmission', minDistanceAir: '1.5 Meters', testSafetyZone: '3.5 Meters', barrierType: 'Safety Chain + Flashing Beacon' },
  { voltage: '132 kV Transmission (OETC)', minDistanceAir: '3.0 Meters', testSafetyZone: '6.0 Meters', barrierType: 'Dual Perimeter Interlocked Fencing' },
  { voltage: '220 kV National Grid', minDistanceAir: '4.5 Meters', testSafetyZone: '8.0 Meters', barrierType: 'Laser Sensor Perimeter Guard' }
];

export const HSE_METRICS = {
  safeManHours: '1,280,450',
  daysZeroLti: '920+',
  oetcAuditScore: '98.6%',
  certifiedEngineers: '48',
  isoCertifications: ['ISO 45001:2018 (Occupational Health & Safety)', 'ISO 9001:2015 (Quality Management)', 'ISO 14001:2015 (Environmental Management)']
};
