export type PageId = 'home' | 'services' | 'projects' | 'hse' | 'contact';

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  voltageClass: string; // e.g. "Up to 132 kV", "33 kV / 132 kV", "All Voltages"
  standard: string; // e.g. "IEC 62271-203", "IEC 60840", "IEEE 80"
  iconName: string;
  heroImage: string;
  keyFeatures: string[];
  equipmentUsed: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  methodologySteps: {
    step: number;
    title: string;
    description: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  voltage: string; // "132 kV" | "33 kV" | "132/33 kV"
  client: string; // "OETC", "Nama Group", "PDO", "Oman Water & Wastewater"
  status: 'active' | 'testing' | 'completed';
  progressPercentage: number;
  currentPhase: string;
  safeWorkDays: number;
  description: string;
  completionDate: string;
  image: string;
  scopeHighlights: string[];
  specifications: {
    key: string;
    val: string;
  }[];
}

export interface QuoteFormData {
  projectName: string;
  clientCompany: string;
  contactPerson: string;
  email: string;
  phone: string;
  locationInOman: string;
  voltageClass: string;
  serviceCategory: string;
  scopeDescription: string;
  estimatedTimeline: string;
  hasSingleLineDiagram: boolean;
  requiresOetcLiaison: boolean;
}
