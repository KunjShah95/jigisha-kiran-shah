import { LucideIcon } from 'lucide-react';

// Stats types
export interface Stat {
  id: string;
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

// Service types
export interface Product {
  name: string;
  description: string;
  benefits: string[];
  minPremium?: string;
  type?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  products: Product[];
}

// Testimonial types
export type JourneyType = 'education' | 'retirement' | 'claim' | 'investment' | 'protection';

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  avatar?: string;
  story: string;
  journeyType: JourneyType;
  year: number;
  rating: number;
}

// Form types
export type ServiceType = 
  | 'child_education' 
  | 'retirement' 
  | 'term_insurance' 
  | 'wealth_creation'
  | 'health_insurance'
  | 'other';

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  interest: ServiceType;
  message?: string;
}

// Navigation types
export interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

// About timeline types
export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

// Award types
export interface Award {
  id: string;
  title: string;
  year: number;
  issuer: string;
  icon?: LucideIcon;
}
