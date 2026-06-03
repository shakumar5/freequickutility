export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'text-tools',
    name: 'Text Tools',
    description: 'Analyze, transform, and manipulate text with precision.',
    icon: '✏️',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'calculators',
    name: 'Calculators',
    description: 'Financial, health, and mathematical calculators for everyday use.',
    icon: '🧮',
    color: 'from-violet-500 to-pink-500',
  },
  {
    id: 'generators',
    name: 'Generators',
    description: 'Generate passwords, UUIDs, QR codes, and more instantly.',
    icon: '⚡',
    color: 'from-orange-500 to-amber-400',
  },
];
