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
    description: 'Free online word counter tool - count words, sentences, paragraphs, characters and estimate reading time instantly. Perfect for essays, articles, social media, and content creation.',
    category: 'text-tools',
    path: '/tools/word-counter',
    icon: '📝',
    popular: true,
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Free character counter tool for social media - count characters with/without spaces. Track limits for Twitter/X (280 chars), LinkedIn, Instagram, SMS, and more. Real-time counter.',
    category: 'text-tools',
    path: '/tools/character-counter',
    icon: '🔤',
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Free text case converter - convert text to uppercase, lowercase, title case, sentence case, camelCase, and snake_case. Perfect for programming and content editing.',
    category: 'text-tools',
    path: '/tools/case-converter',
    icon: '🔠',
    popular: true,
  },
  {
    id: 'text-reverser',
    name: 'Text Reverser',
    description: 'Free online text reverser tool - reverse text, words, or sentences instantly. Great for palindromes, puzzles, coding, and creating encrypted messages.',
    category: 'text-tools',
    path: '/tools/text-reverser',
    icon: '🔄',
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    description: 'Free duplicate line remover - clean up lists and text by removing repeated lines while preserving order. Perfect for data cleanup and list management.',
    category: 'text-tools',
    path: '/tools/remove-duplicate-lines',
    icon: '🧹',
  },

  // Calculators
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Free online age calculator - calculate exact age in years, months, and days from any date of birth. Get precise age calculation with breakdown by days lived.',
    category: 'calculators',
    path: '/tools/age-calculator',
    icon: '🎂',
    popular: true,
  },
  {
    id: 'date-difference-calculator',
    name: 'Date Difference Calculator',
    description: 'Free date difference calculator - find the exact difference between two dates in days, weeks, months, and years. Perfect for countdown and duration calculations.',
    category: 'calculators',
    path: '/tools/date-difference-calculator',
    icon: '📅',
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Free percentage calculator - calculate percentages, percentage change, discount percentages, and percentage of a number. Essential for math, finance, and sales.',
    category: 'calculators',
    path: '/tools/percentage-calculator',
    icon: '📊',
    popular: true,
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Free BMI calculator - calculate Body Mass Index with health category classification (underweight, normal, overweight, obese) and health risk assessment. Health tool.',
    category: 'calculators',
    path: '/tools/bmi-calculator',
    icon: '⚖️',
  },
  {
    id: 'emi-calculator',
    name: 'EMI Calculator',
    description: 'Free EMI calculator - calculate monthly loan payments with detailed amortization schedule. Calculate EMI for home loans, car loans, personal loans instantly.',
    category: 'calculators',
    path: '/tools/emi-calculator',
    icon: '🏦',
    popular: true,
  },
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    description: 'Free discount calculator - calculate sale prices, savings amount, final cost, and percentage off. Perfect for shopping, pricing, and sales calculations.',
    category: 'calculators',
    path: '/tools/discount-calculator',
    icon: '🏷️',
  },
  {
    id: 'sip-calculator',
    name: 'SIP Calculator',
    description: 'Free SIP calculator - plan systematic investment plans with projected returns, wealth accumulation, and investment growth forecast. Financial planning tool.',
    category: 'calculators',
    path: '/tools/sip-calculator',
    icon: '📈',
    isNew: true,
  },
  {
    id: 'cagr-calculator',
    name: 'CAGR Calculator',
    description: 'Free CAGR calculator - calculate Compound Annual Growth Rate for investment analysis and performance measurement. Essential financial metrics calculator.',
    category: 'calculators',
    path: '/tools/cagr-calculator',
    icon: '💹',
    isNew: true,
  },

  // Generators
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Free strong password generator - generate secure, random passwords with customizable length and character sets (uppercase, lowercase, numbers, symbols).',
    category: 'generators',
    path: '/tools/password-generator',
    icon: '🔐',
    popular: true,
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Free UUID generator - generate unique UUIDs (v4) for applications, databases, development projects, and software. Random unique identifier generator.',
    category: 'generators',
    path: '/tools/uuid-generator',
    icon: '🆔',
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Free QR code generator - create QR codes for URLs, text, WiFi networks, vCards, and contact info. Download as PNG or SVG instantly. No sign-up required.',
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
