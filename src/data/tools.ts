export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  path: string;
  icon: string;
  popular?: boolean;
  isNew?: boolean;
}

export const tools: Tool[] = [
  // Text Tools
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, sentences, paragraphs, and estimate reading time instantly.',
    category: 'text-tools',
    path: '/tools/word-counter',
    icon: '📝',
    popular: true,
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Count characters with and without spaces, track limits for social media posts.',
    category: 'text-tools',
    path: '/tools/character-counter',
    icon: '🔤',
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between uppercase, lowercase, title case, sentence case, and more.',
    category: 'text-tools',
    path: '/tools/case-converter',
    icon: '🔠',
    popular: true,
  },
  {
    id: 'text-reverser',
    name: 'Text Reverser',
    description: 'Reverse text, words, or sentences instantly. Great for puzzles and encoding.',
    category: 'text-tools',
    path: '/tools/text-reverser',
    icon: '🔄',
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    description: 'Clean up lists by removing repeated lines while preserving order.',
    category: 'text-tools',
    path: '/tools/remove-duplicate-lines',
    icon: '🧹',
  },

  // Calculators
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate exact age in years, months, and days from any date of birth.',
    category: 'calculators',
    path: '/tools/age-calculator',
    icon: '🎂',
    popular: true,
  },
  {
    id: 'date-difference-calculator',
    name: 'Date Difference Calculator',
    description: 'Find the exact difference between two dates in days, weeks, months, and years.',
    category: 'calculators',
    path: '/tools/date-difference-calculator',
    icon: '📅',
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, percentage change, and percentage of a number.',
    category: 'calculators',
    path: '/tools/percentage-calculator',
    icon: '📊',
    popular: true,
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index with health category classification and recommendations.',
    category: 'calculators',
    path: '/tools/bmi-calculator',
    icon: '⚖️',
  },
  {
    id: 'emi-calculator',
    name: 'EMI Calculator',
    description: 'Calculate monthly loan payments with detailed amortization breakdown.',
    category: 'calculators',
    path: '/tools/emi-calculator',
    icon: '🏦',
    popular: true,
  },
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    description: 'Calculate sale prices, savings amount, and final cost after discount.',
    category: 'calculators',
    path: '/tools/discount-calculator',
    icon: '🏷️',
  },
  {
    id: 'sip-calculator',
    name: 'SIP Calculator',
    description: 'Plan systematic investments with projected returns and wealth accumulation.',
    category: 'calculators',
    path: '/tools/sip-calculator',
    icon: '📈',
    isNew: true,
  },
  {
    id: 'cagr-calculator',
    name: 'CAGR Calculator',
    description: 'Calculate Compound Annual Growth Rate for investment performance analysis.',
    category: 'calculators',
    path: '/tools/cagr-calculator',
    icon: '💹',
    isNew: true,
  },

  // Generators
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, secure passwords with customizable length and character sets.',
    category: 'generators',
    path: '/tools/password-generator',
    icon: '🔐',
    popular: true,
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate unique UUIDs (v4) for applications, databases, and development.',
    category: 'generators',
    path: '/tools/uuid-generator',
    icon: '🆔',
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Create QR codes for URLs, text, WiFi, and contact info. Download as PNG or SVG.',
    category: 'generators',
    path: '/tools/qr-generator',
    icon: '📱',
    popular: true,
  },
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter((tool) => tool.category === categoryId);
}

export function getPopularTools(): Tool[] {
  return tools.filter((tool) => tool.popular);
}

export function getRelatedTools(currentToolId: string, limit = 4): Tool[] {
  const currentTool = tools.find((t) => t.id === currentToolId);
  if (!currentTool) return [];
  return tools
    .filter((t) => t.category === currentTool.category && t.id !== currentToolId)
    .slice(0, limit);
}
