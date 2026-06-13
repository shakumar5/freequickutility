export interface ToolDescription {
  title: string;
  content: string;
  howToUse: string[];
  features: string[];
}

export const toolDescriptions: Record<string, ToolDescription> = {
  'word-counter': {
    title: 'Free Online Word Counter Tool',
    content:
      'Our free word counter tool lets you instantly count words, sentences, paragraphs, and characters in any text. Whether you are writing an essay, blog post, article, or social media caption, this tool gives you accurate statistics in real time. All processing happens in your browser — your text is never sent to a server, ensuring complete privacy. The tool also estimates reading time (based on 200 words per minute) and speaking time (130 words per minute), making it ideal for students, writers, bloggers, and content creators who need to meet specific word count requirements.',
    howToUse: [
      'Paste or type your text into the input area.',
      'Word count, character count, sentence count, and paragraph count update instantly.',
      'Use the reading time estimate to plan presentations or gauge article length.',
    ],
    features: [
      'Real-time word, character, sentence, and paragraph counting',
      'Reading time and speaking time estimates',
      'Works with any language that uses spaces between words',
      'No character or word limit — handles entire documents',
      '100% client-side processing for complete privacy',
    ],
  },

  'character-counter': {
    title: 'Free Character Counter for Social Media',
    content:
      'Count characters with and without spaces instantly using our free character counter. This tool is essential for anyone writing content with character limits — Twitter/X posts (280 characters), Instagram captions (2,200 characters), LinkedIn posts (3,000 characters), meta descriptions (155–160 characters), and SMS messages (160 characters). The counter updates in real time as you type or paste text, and includes word count, sentence count, and line count as additional metrics. Your text never leaves your device.',
    howToUse: [
      'Type or paste your text into the text area.',
      'Character counts (with and without spaces) update in real time.',
      'Check the platform-specific indicators to see if you are within limits.',
    ],
    features: [
      'Character count with and without spaces',
      'Platform-specific limit indicators (Twitter, Instagram, LinkedIn, SMS)',
      'Word, sentence, and line count included',
      'Real-time updates as you type',
      'No data stored — everything runs in your browser',
    ],
  },

  'case-converter': {
    title: 'Free Text Case Converter Online',
    content:
      'Convert text between different cases instantly with our free case converter tool. Supports UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and tOGGLE cASE. Whether you are formatting code variable names, fixing accidental caps lock text, or preparing content for publication, this tool handles it in one click. Ideal for developers, writers, students, and anyone who works with text regularly. No installation required — works directly in your browser.',
    howToUse: [
      'Paste or type your text in the input field.',
      'Click the desired case format button.',
      'Copy the converted result to your clipboard.',
    ],
    features: [
      '9 different text case conversions',
      'Supports programming cases (camelCase, PascalCase, snake_case, kebab-case)',
      'One-click conversion with instant results',
      'Handles multi-line text and paragraphs',
      'No character limit — works on any text length',
    ],
  },

  'text-reverser': {
    title: 'Free Online Text Reverser',
    content:
      'Reverse text characters, words, or lines instantly with our free text reverser tool. Choose between three modes: reverse all characters (hello → olleh), reverse word order (hello world → world hello), or reverse line order for multi-line text. This tool is useful for creating puzzles, checking palindromes, generating mirror text, debugging text processing logic, and creative writing experiments. Supports all languages and special characters.',
    howToUse: [
      'Enter or paste your text in the input area.',
      'Select the reversal mode: characters, words, or lines.',
      'View and copy the reversed result instantly.',
    ],
    features: [
      'Three reversal modes: characters, words, and lines',
      'Works with all languages and special characters',
      'Instant results with no processing delay',
      'Useful for palindromes, puzzles, and debugging',
      'Completely private — text never leaves your device',
    ],
  },

  'remove-duplicate-lines': {
    title: 'Free Duplicate Line Remover',
    content:
      'Remove duplicate lines from any text instantly with our free online tool. Perfect for cleaning up email lists, CSV data, log files, and any line-based content. Options include case-sensitive or case-insensitive matching, whitespace trimming, and preserving original order. The first occurrence of each line is always kept. Handles thousands of lines efficiently — all processing runs entirely in your browser for speed and privacy.',
    howToUse: [
      'Paste your text with duplicate lines into the input area.',
      'Configure options: case sensitivity and whitespace trimming.',
      'Click remove duplicates and copy the cleaned result.',
    ],
    features: [
      'Case-sensitive and case-insensitive duplicate detection',
      'Whitespace trimming option for flexible matching',
      'Preserves original line order',
      'Handles thousands of lines efficiently',
      'Ideal for email lists, CSVs, and log files',
    ],
  },

  'age-calculator': {
    title: 'Free Online Age Calculator',
    content:
      'Calculate your exact age in years, months, and days with our free age calculator. Enter your date of birth and optionally an "as of" date to find your precise age at any point in time. The calculator accounts for leap years and varying month lengths to give you an accurate result. It also shows your next birthday countdown, total days lived, and age in different units (weeks, hours, minutes). Perfect for filling out forms, verifying age requirements, or satisfying curiosity.',
    howToUse: [
      'Enter your date of birth.',
      'Optionally change the "age as of" date (defaults to today).',
      'View your exact age breakdown and next birthday countdown.',
    ],
    features: [
      'Exact age in years, months, and days',
      'Accounts for leap years and varying month lengths',
      'Next birthday countdown',
      'Age in weeks, days, hours, and minutes',
      'Calculate age at any specific date',
    ],
  },

  'date-difference-calculator': {
    title: 'Free Date Difference Calculator',
    content:
      'Find the exact difference between any two dates in years, months, days, weeks, hours, and minutes. Our free date difference calculator handles all the complexity of varying month lengths, leap years, and calendar irregularities. Use it to calculate project durations, days until events, contract periods, warranty timelines, or any duration between two calendar dates. The order of dates does not matter — the calculator automatically determines which is earlier.',
    howToUse: [
      'Enter the first date (start date).',
      'Enter the second date (end date).',
      'View the exact difference in multiple time units.',
    ],
    features: [
      'Difference in years, months, days, weeks, hours, and minutes',
      'Handles leap years and varying month lengths',
      'Date order does not matter — auto-detects earlier date',
      'Useful for project planning, countdowns, and durations',
      'Instant calculation with no page reload',
    ],
  },

  'percentage-calculator': {
    title: 'Free Percentage Calculator Online',
    content:
      'Perform common percentage calculations instantly with our free tool. Three calculation modes: find what percentage one number is of another, calculate a percentage of a number, or find the percentage change between two values. Essential for students, shoppers calculating discounts, financial analysts, and anyone who works with percentages regularly. Results display with up to two decimal places for precision.',
    howToUse: [
      'Select the calculation type you need.',
      'Enter the required numbers in the input fields.',
      'View the percentage result instantly.',
    ],
    features: [
      'Three calculation modes: % of number, number as % of another, % change',
      'Handles decimal values and negative numbers',
      'Useful for discounts, markups, grades, and financial analysis',
      'Results rounded to 2 decimal places',
      'No sign-up or installation required',
    ],
  },

  'bmi-calculator': {
    title: 'Free BMI Calculator with Health Categories',
    content:
      'Calculate your Body Mass Index (BMI) instantly using our free online calculator. Enter your height and weight to get your BMI score along with the corresponding health category: underweight (below 18.5), normal weight (18.5–24.9), overweight (25–29.9), or obese (30+). The BMI formula divides weight in kilograms by height in meters squared. While BMI is a useful screening tool, it does not account for muscle mass or body composition — always consult a healthcare professional for personalized health advice.',
    howToUse: [
      'Enter your height in centimeters.',
      'Enter your weight in kilograms.',
      'View your BMI score and health category classification.',
    ],
    features: [
      'Instant BMI calculation using the standard formula',
      'Color-coded health category classification',
      'Visual BMI scale indicator',
      'Healthy weight range for your height',
      'Educational information about BMI limitations',
    ],
  },

  'emi-calculator': {
    title: 'Free EMI Calculator for Home, Car & Personal Loans',
    content:
      'Calculate your monthly loan EMI (Equated Monthly Installment) instantly using our free calculator. Enter the loan amount, annual interest rate, and tenure in months to see your monthly payment, total interest payable, and total payment amount. Works for all loan types — home loans, car loans, personal loans, and education loans. The calculator uses the reducing balance method (the most common method used by banks) and displays a visual breakdown of principal vs. interest to help you understand your loan cost.',
    howToUse: [
      'Enter the loan principal amount.',
      'Enter the annual interest rate (e.g., 8.5%).',
      'Enter the loan tenure in months.',
      'Click Calculate to see EMI, total interest, and total payment.',
    ],
    features: [
      'Accurate EMI calculation using reducing balance method',
      'Visual breakdown of principal vs. interest',
      'Works for home loans, car loans, personal loans, and education loans',
      'Instant results — no page reload needed',
      'Free to use with no sign-up required',
    ],
  },

  'discount-calculator': {
    title: 'Free Discount Calculator — Find Sale Prices Instantly',
    content:
      'Calculate discounted prices and savings instantly with our free discount calculator. Enter the original price and discount percentage to see the final price you will pay and how much you save. Perfect for shopping during sales, comparing deals, verifying advertised discounts, and budgeting purchases. The calculator handles any discount percentage and shows both the savings amount and the effective price after discount.',
    howToUse: [
      'Enter the original price of the item.',
      'Enter the discount percentage (e.g., 20%).',
      'View the discounted price and total savings instantly.',
    ],
    features: [
      'Instant discount and savings calculation',
      'Shows final price and amount saved',
      'Works with any currency and discount percentage',
      'Perfect for comparing deals during sales',
      'No installation — runs directly in your browser',
    ],
  },

  'sip-calculator': {
    title: 'Free SIP Calculator — Plan Your Investments',
    content:
      'Plan your mutual fund investments with our free SIP (Systematic Investment Plan) calculator. Enter your monthly investment amount, expected annual return rate, and investment duration to see the projected wealth accumulation, total amount invested, and estimated returns. SIP investing helps build wealth through rupee cost averaging and the power of compounding. Use this calculator to set investment goals, compare different SIP scenarios, and understand how small monthly investments grow over time.',
    howToUse: [
      'Enter your planned monthly SIP investment amount.',
      'Enter the expected annual return rate (e.g., 12%).',
      'Enter the investment duration in years.',
      'View projected total value, invested amount, and estimated returns.',
    ],
    features: [
      'Compound interest calculation with monthly contributions',
      'Visual breakdown of invested amount vs. returns',
      'Flexible inputs for amount, rate, and duration',
      'Helps plan long-term wealth accumulation goals',
      'Educational information about SIP investing',
    ],
  },

  'cagr-calculator': {
    title: 'Free CAGR Calculator — Compound Annual Growth Rate',
    content:
      'Calculate the Compound Annual Growth Rate (CAGR) of any investment with our free online calculator. Enter the beginning value, ending value, and investment duration to find the equivalent annual growth rate that smooths out yearly fluctuations. CAGR is the industry standard for comparing investment returns across different time periods and asset classes. Use it to evaluate mutual fund performance, stock returns, business revenue growth, or any metric that changes over time.',
    howToUse: [
      'Enter the initial (beginning) investment value.',
      'Enter the final (ending) value.',
      'Enter the number of years.',
      'View the CAGR percentage and absolute return.',
    ],
    features: [
      'Accurate CAGR calculation using the standard formula',
      'Shows absolute return alongside annualized growth',
      'Compare investments of different durations',
      'Useful for stocks, mutual funds, real estate, and business metrics',
      'Instant results with no sign-up required',
    ],
  },

  'password-generator': {
    title: 'Free Strong Password Generator',
    content:
      'Generate cryptographically secure random passwords with our free password generator. Customize length (8–128 characters), character types (uppercase, lowercase, numbers, symbols), and options like excluding ambiguous characters. Passwords are generated using the Web Crypto API (crypto.getRandomValues) for true randomness. No passwords are ever stored or transmitted — generation happens entirely in your browser. A strong, unique password is your first line of defense against account breaches.',
    howToUse: [
      'Set your desired password length (12+ recommended).',
      'Select character types: uppercase, lowercase, numbers, symbols.',
      'Click Generate and copy the password to your clipboard.',
    ],
    features: [
      'Cryptographically secure random generation (Web Crypto API)',
      'Customizable length and character sets',
      'Option to exclude ambiguous characters (O/0, I/l/1)',
      'One-click copy to clipboard',
      'No passwords stored — 100% private',
    ],
  },

  'uuid-generator': {
    title: 'Free UUID Generator — Version 4',
    content:
      'Generate universally unique identifiers (UUIDs) instantly with our free UUID v4 generator. UUID v4 uses cryptographic randomness to produce identifiers with 122 bits of entropy, making collisions virtually impossible. Use generated UUIDs as database primary keys, API identifiers, session tokens, transaction IDs, or anywhere you need a unique identifier without central coordination. Generate single or bulk UUIDs with options for uppercase/lowercase and with/without hyphens.',
    howToUse: [
      'Click Generate to create a new UUID.',
      'Choose format options: hyphens or no hyphens, uppercase or lowercase.',
      'Generate multiple UUIDs at once for bulk needs.',
    ],
    features: [
      'UUID v4 (random) generation using Web Crypto API',
      'Standard format (8-4-4-4-12) with optional hyphen removal',
      'Bulk generation for multiple UUIDs at once',
      'One-click copy to clipboard',
      'Collision probability is astronomically low',
    ],
  },

  'qr-generator': {
    title: 'Free QR Code Generator — Create & Download QR Codes',
    content:
      'Create QR codes for URLs, text, WiFi credentials, and more with our free QR code generator. Customize foreground and background colors, adjust size, and download as high-quality PNG images. Generated QR codes are static (data is encoded directly) and never expire. Use them on business cards, flyers, presentations, product packaging, or websites. For best scanning reliability, maintain high contrast between foreground and background colors.',
    howToUse: [
      'Enter the URL, text, or data you want to encode.',
      'Customize colors and size as needed.',
      'Click Generate and download the QR code as PNG.',
    ],
    features: [
      'Encode URLs, text, WiFi credentials, and contact info',
      'Customizable foreground and background colors',
      'Multiple size options for digital and print use',
      'Download as high-quality PNG image',
      'QR codes never expire — data is encoded directly',
    ],
  },
};
