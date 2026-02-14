import { GraduationCap, Sunset, Shield, TrendingUp, HeartPulse, Briefcase, Building2, Users, Handshake, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'child-education',
    title: 'Child Education',
    tagline: 'Secure Your Child\'s Dreams',
    description: 'Give your children the education they deserve with guaranteed maturity benefits that align with key milestones — from school to college to higher studies.',
    icon: GraduationCap,
    products: [
      {
        name: 'Jeevan Tarun',
        description: 'A limited premium paying money-back plan designed for children.',
        benefits: [
          'Survival benefits at ages 20, 22, 24',
          'Maturity benefit at age 25',
          'Premium waiver on death of life assured',
          'Flexible premium payment terms'
        ],
        type: 'Endowment'
      },
      {
        name: 'New Children\'s Money Back Plan',
        description: 'Provides money at important stages of your child\'s education.',
        benefits: [
          'Money-back at ages 18, 20, 22',
          'Final payment at age 25',
          'Risk cover from proposal acceptance',
          'Bonus additions throughout policy term'
        ],
        type: 'Money Back'
      }
    ]
  },
  {
    id: 'retirement',
    title: 'Retirement Planning',
    tagline: 'Retire Like Royalty',
    description: 'Live life king-size post-retirement with guaranteed pension plans that provide a steady income stream for as long as you live.',
    icon: Sunset,
    products: [
      {
        name: 'Jeevan Umang',
        description: 'A whole life plan with survival benefits payable annually after premium paying term.',
        benefits: [
          '8% of Sum Assured paid annually for life',
          'Sum Assured + Bonuses at maturity (100 years)',
          'Family gets full benefits if you pass away',
          'Loan facility available'
        ],
        type: 'Whole Life'
      },
      {
        name: 'Jeevan Akshay VII',
        description: 'Immediate annuity plan for guaranteed pension from day one.',
        benefits: [
          'Start receiving pension immediately',
          'Multiple annuity options available',
          'Pension for life or joint life',
          'Return of purchase price option'
        ],
        type: 'Annuity'
      }
    ]
  },
  {
    id: 'term-insurance',
    title: 'Term Insurance',
    tagline: 'Pure Protection for Your Family',
    description: 'Provide financial security to your loved ones at the most affordable premiums. Because protection should never be expensive.',
    icon: Shield,
    products: [
      {
        name: 'LIC Tech Term',
        description: 'Online term plan with affordable premiums and high coverage.',
        benefits: [
          'Cover up to ₹50 Lakhs to ₹25 Crores',
          'Level or increasing sum assured options',
          'Premium waiver on disability',
          'Terminal illness benefit included'
        ],
        type: 'Term Plan'
      },
      {
        name: 'Jeevan Amar',
        description: 'Regular premium term plan with flexible benefit options.',
        benefits: [
          'Level or increasing cover options',
          'Special premium rates for females',
          'Optional riders for added protection',
          'Tax benefits under Section 80C & 10(10D)'
        ],
        type: 'Term Plan'
      },
      {
        name: 'Term Life Assurance Pure Pro',
        description: 'Comprehensive term plan with enhanced coverage and rider options.',
        benefits: [
          'High coverage at affordable premiums',
          'Option to increase cover at life milestones',
          'Terminal illness benefit',
          'Tax benefits under Section 80C & 10(10D)'
        ],
        type: 'Term Plan'
      }
    ]
  },
  {
    id: 'wealth-creation',
    title: 'Wealth Creation',
    tagline: 'Grow While You\'re Protected',
    description: 'Combine the power of savings with life protection. Build a corpus for your dreams while keeping your family secure.',
    icon: TrendingUp,
    products: [
      {
        name: 'Jeevan Labh',
        description: 'Limited premium paying endowment plan with bonus additions.',
        benefits: [
          'Pay for 16/21/25 years, covered for longer',
          'Guaranteed Maturity Sum Assured',
          'Cash Bonus + Final Additional Bonus',
          'Loan facility available after 3 years'
        ],
        type: 'Endowment'
      },
      {
        name: 'New Endowment Plan',
        description: 'Traditional endowment with yearly bonuses and maturity benefits.',
        benefits: [
          'Flexible premium paying terms',
          'Participate in profits via bonuses',
          'Maturity benefit = SA + Bonus',
          'Double accident benefit option'
        ],
        type: 'Endowment'
      }
    ]
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    tagline: 'Healthcare Without Worries',
    description: 'Medical emergencies shouldn\'t drain your savings. Get comprehensive health coverage for you and your family.',
    icon: HeartPulse,
    products: [
      {
        name: 'Arogya Rakshak',
        description: 'Non-linked health insurance plan with fixed benefits.',
        benefits: [
          'Hospitalization cover up to ₹10 Lakhs',
          'No room rent restrictions',
          'Day care procedures covered',
          'Renewal for lifetime'
        ],
        type: 'Health Plan'
      },
      {
        name: 'Cancer Cover',
        description: 'Comprehensive coverage for cancer at any stage.',
        benefits: [
          'Lump sum on early stage cancer',
          'Full sum assured on major stage',
          'Premium waiver post diagnosis',
          'Income benefit option available'
        ],
        type: 'Critical Illness'
      }
    ]
  },
  {
    id: 'money-back',
    title: 'Money Back Plans',
    tagline: 'Returns at Regular Intervals',
    description: 'Get periodic payouts while staying protected. Perfect for meeting regular financial commitments.',
    icon: Briefcase,
    products: [
      {
        name: 'New Money Back Plan - 25 Years',
        description: 'Regular returns with bonus at maturity.',
        benefits: [
          '15% of SA at 5th, 10th, 15th year',
          '40% + Bonus at maturity',
          'Death benefit = Full SA + Bonus',
          'Loan available after 3 years'
        ],
        type: 'Money Back'
      },
      {
        name: 'Bima Shree',
        description: 'High-value money back plan for affluent customers.',
        benefits: [
          'Minimum SA ₹10 Lakhs',
          'Guaranteed Additions throughout',
          'Loyalty additions at maturity',
          'Premium discounts available'
        ],
        type: 'Money Back'
      }
    ]
  },
  {
    id: 'corporate-insurance',
    title: 'Corporate Insurance',
    tagline: 'Secure Your Business & Employees',
    description: 'Comprehensive insurance solutions for businesses — from employer-employee benefits to partnership protections and liability coverage.',
    icon: Building2,
    products: [
      {
        name: 'Employer-Employee Insurance',
        description: 'Group insurance cover for employees under a single master policy.',
        benefits: [
          'Group term insurance for all employees',
          'Employee family coverage options',
          'Tax benefits for employer',
          'Customizable sum assured per employee'
        ],
        type: 'Group Insurance'
      },
      {
        name: 'Partnership Insurance',
        description: 'Protect your partnership business against loss of a key partner.',
        benefits: [
          'Compensation on partner\'s death',
          'Business continuity assurance',
          'Buy-sell agreement support',
          'Tax efficient death claim'
        ],
        type: 'Business Protection'
      },
      {
        name: 'MWP Insurance',
        description: 'Married Women\'s Property Act policy to protect your family\'s financial future.',
        benefits: [
          'Creditors cannot attach the policy',
          'Nominee receives death benefit directly',
          'Protection from husband\'s business liabilities',
          'Secure family\'s financial future'
        ],
        type: 'MWP'
      },
      {
        name: 'HUF Insurance',
        description: 'Insurance solutions specifically designed for Hindu Undivided Families.',
        benefits: [
          'HUF can be proposer and life assured',
          'Tax benefits under Section 80C',
          'Protection from business risks',
          'Smooth succession planning'
        ],
        type: 'HUF'
      },
      {
        name: 'Liability Insurance',
        description: 'Protect your business against legal liabilities and third-party claims.',
        benefits: [
          'Public liability coverage',
          'Product liability protection',
          'Professional liability cover',
          'Legal defense costs covered'
        ],
        type: 'Liability'
      }
    ]
  }
];
