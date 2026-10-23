import { Calendar, Users, Award, Shield } from 'lucide-react';
import type { Stat } from '../types';

export const stats: Stat[] = [
  {
    id: 'experience',
    icon: Calendar,
    value: 22,
    suffix: '',
    label: 'Years of Experience',
    description: 'Expert guidance since 2004'
  },
  {
    id: 'families',
    icon: Users,
    value: 2700,
    suffix: '+',
    label: 'Families Protected',
    description: 'Trust built over two decades'
  },
  {
    id: 'mdrt',
    icon: Award,
    value: 2,
    suffix: '',
    label: ' 2 Times MDRT 2023 & 2024',
    description: 'Million Dollar Round Table (USA)'
  },
  {
    id: 'claims',
    icon: Shield,
    value: 1000,
    suffix: '+',
    label: 'Claims Supported',
    description: 'Paperwork through to settlement'
  }
];
