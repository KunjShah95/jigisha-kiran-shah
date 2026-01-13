import { Calendar, Users, Award, Shield, TrendingUp, Heart } from 'lucide-react';
import { Stat } from '@/types';

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
    label: 'Double MDRT Member',
    description: 'Million Dollar Round Table (USA)'
  },
  {
    id: 'claims',
    icon: Shield,
    value: 1000,
    suffix: '+',
    label: 'Claims Settled',
    description: 'When it matters most'
  },
  {
    id: 'crores',
    icon: TrendingUp,
    value: 100,
    suffix: 'Cr+',
    label: 'Sum Assured',
    description: 'Total coverage provided'
  },
  {
    id: 'satisfaction',
    icon: Heart,
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Happy clients, secured futures'
  }
];
