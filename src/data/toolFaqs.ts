import type { FAQ } from './faqs';

export const toolFaqs: Record<string, FAQ[]> = {
  'word-counter': [
    {
      question: 'How does the word counter work?',
      answer: 'Our word counter splits your text by spaces and counts each word. It also detects sentences (by periods, exclamation marks, and question marks) and paragraphs (by double line breaks).',
    },
    {
      question: 'How is reading time calculated?',
      answer: 'Reading time is estimated at 200 words per minute (average adult reading speed). Speaking time uses 130 words per minute, which is the average pace for presentations.',
    },
    {
      question: 'Does the word counter work with all languages?',
      answer: 'Yes, it counts words separated by spaces in any language including English, Spanish, French, German, and more. For languages without spaces like Chinese or Japanese, it counts character groups.',
    },
    {
      question: 'Is there a character limit for the word counter?',
      answer: 'No, there is no limit. You can paste entire documents, essays, or articles. All processing happens in your browser so performance depends only on your device.',
    },
    {
      question: 'Can I use this for academic essays?',
      answer: 'Absolutely. Students commonly use our word counter to check essay word counts, verify assignment requirements, and estimate reading time for presentations.',
    },
  ],

  'character-counter': [
    {
      question: 'What is the difference between characters and characters without spaces?',
      answer: 'Characters count includes every character in your text — letters, numbers, spaces, punctuation, and symbols. Characters without spaces excludes all whitespace (spaces, tabs, line breaks).',
    },
    {
      question: 'What are the character limits for social media platforms?',
      answer: 'Twitter/X allows 280 characters per post, Instagram captions allow 2,200 characters, LinkedIn posts allow 3,000 characters, and Facebook posts allow 63,206 characters.',
    },
    {
      question: 'Does this tool count emojis as one character?',
      answer: 'Emojis may count as 1–4 characters depending on the emoji. Our tool counts them as JavaScript sees them. Social media platforms may count them differently.',
    },
    {
      question: 'Can I use this for SEO meta descriptions?',
      answer: 'Yes! Google typically displays 155–160 characters for meta descriptions. Use our character counter to ensure your meta descriptions fit within the recommended limit.',
    },
    {
      question: 'Is my text stored or sent anywhere?',
      answer: 'No. All counting happens entirely in your browser using JavaScript. Your text never leaves your device and is not stored anywhere.',
    },
  ],

  'case-converter': [
    {
      question: 'What text cases are supported?',
      answer: 'We support UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and tOGGLE cASE — covering both writing and programming needs.',
    },
    {
      question: 'What is the difference between camelCase and PascalCase?',
      answer: 'camelCase starts with a lowercase letter (e.g., myVariableName) and is used for variables and functions. PascalCase starts with an uppercase letter (e.g., MyClassName) and is typically used for class names.',
    },
    {
      question: 'What is snake_case used for?',
      answer: 'snake_case uses underscores between words and all lowercase letters. It is commonly used in Python, Ruby, database column names, and file naming conventions.',
    },
    {
      question: 'What is kebab-case used for?',
      answer: 'kebab-case uses hyphens between words and all lowercase letters. It is commonly used in URLs, CSS class names, HTML attributes, and file names for web projects.',
    },
    {
      question: 'Can I convert large blocks of text?',
      answer: 'Yes, there is no limit on text length. The converter works on single words, sentences, paragraphs, or entire documents instantly.',
    },
  ],

  'text-reverser': [
    {
      question: 'What are the different reverse modes?',
      answer: 'Reverse Characters flips every character (hello → olleh). Reverse Words keeps words intact but reverses their order (hello world → world hello). Reverse Lines reverses the order of lines in multi-line text.',
    },
    {
      question: 'What is text reversing used for?',
      answer: 'Text reversing is useful for creating puzzles, encoding messages, checking palindromes, generating mirror text for creative designs, and debugging text processing logic.',
    },
    {
      question: 'Does reversing work with special characters and emojis?',
      answer: 'Yes, all characters including special characters, numbers, and punctuation are reversed. However, complex emojis (composed of multiple code points) may not reverse as expected visually.',
    },
    {
      question: 'Can I reverse text in other languages?',
      answer: 'Yes, the text reverser works with any language including Arabic, Hindi, Chinese, Japanese, and more. It reverses based on character position regardless of language.',
    },
  ],

  'remove-duplicate-lines': [
    {
      question: 'How does duplicate detection work?',
      answer: 'The tool compares each line against all previous lines. If a line has already appeared, it is removed. The first occurrence is always kept, preserving your original order.',
    },
    {
      question: 'What does case-sensitive mode do?',
      answer: 'When case-sensitive is enabled, "Hello" and "hello" are treated as different lines. When disabled (default), they are considered duplicates and only the first occurrence is kept.',
    },
    {
      question: 'What does trim whitespace do?',
      answer: 'When trim whitespace is enabled (default), leading and trailing spaces on each line are ignored during comparison. This means "  hello  " and "hello" are treated as duplicates.',
    },
    {
      question: 'Can I use this to clean up email lists?',
      answer: 'Yes! This tool is perfect for cleaning up email lists, removing duplicate entries from CSV data, deduplicating log files, and cleaning any line-based data.',
    },
    {
      question: 'Is there a line limit?',
      answer: 'No hard limit. The tool processes everything in your browser, so it can handle thousands of lines efficiently depending on your device performance.',
    },
  ],

  'age-calculator': [
    {
      question: 'How accurate is the age calculation?',
      answer: 'Our calculator provides exact age in years, months, and days by accounting for varying month lengths and leap years. It is accurate to the day.',
    },
    {
      question: 'Can I calculate age between two specific dates?',
      answer: 'Yes! By default it calculates age from your birth date to today, but you can change the "Age as of" date to calculate age at any specific point in time.',
    },
    {
      question: 'How is the next birthday calculated?',
      answer: 'The tool finds your next upcoming birthday from the current date and shows how many days remain until then. If today is your birthday, it shows the next one.',
    },
    {
      question: 'Does it account for leap years?',
      answer: 'Yes, the calculator properly handles leap years. If you were born on February 29, the tool correctly calculates your age accounting for leap year occurrences.',
    },
    {
      question: 'Can I use this for official purposes?',
      answer: 'While our calculator is highly accurate, for legal or official purposes, always refer to your birth certificate or official government records for age verification.',
    },
  ],

  'date-difference-calculator': [
    {
      question: 'How is the date difference calculated?',
      answer: 'The tool calculates the exact difference between two dates in years, months, days, total days, total weeks, total hours, and total minutes, accounting for varying month lengths.',
    },
    {
      question: 'Does the order of dates matter?',
      answer: 'No, the calculator automatically determines which date is earlier and which is later, giving you the absolute difference regardless of input order.',
    },
    {
      question: 'Can I calculate business days between two dates?',
      answer: 'Currently, the tool calculates calendar days. For business days (excluding weekends and holidays), you would need to manually subtract non-working days from the total.',
    },
    {
      question: 'What is this useful for?',
      answer: 'Common uses include calculating project durations, days until an event, time between contract dates, pregnancy due dates, warranty periods, and subscription durations.',
    },
  ],

  'percentage-calculator': [
    {
      question: 'What calculations can I perform?',
      answer: 'Three types: "What is X% of Y?" (e.g., 20% of 500 = 100), "X is what % of Y?" (e.g., 25 is 12.5% of 200), and "Percentage change from X to Y" (e.g., 50 to 75 = +50%).',
    },
    {
      question: 'How is percentage change calculated?',
      answer: 'Percentage change = ((New Value - Old Value) / |Old Value|) × 100. A positive result means increase, negative means decrease.',
    },
    {
      question: 'Can I calculate discounts with this?',
      answer: 'Yes! Use "What is X% of Y?" to find the discount amount. For example, "What is 30% of 1000?" gives you 300 (the discount), so the sale price is 700.',
    },
    {
      question: 'Does it handle decimal percentages?',
      answer: 'Yes, you can enter decimal values like 7.5%, 12.25%, or any precision you need. Results are shown with up to 2 decimal places.',
    },
  ],

  'bmi-calculator': [
    {
      question: 'What is BMI?',
      answer: 'Body Mass Index (BMI) is a measurement that uses your height and weight to estimate whether you are underweight, normal weight, overweight, or obese. Formula: BMI = weight(kg) / height(m)².',
    },
    {
      question: 'What are the BMI categories?',
      answer: 'Underweight: below 18.5, Normal weight: 18.5–24.9, Overweight: 25–29.9, Obese Class I: 30–34.9, Obese Class II: 35–39.9, Obese Class III: 40 and above.',
    },
    {
      question: 'Is BMI accurate for everyone?',
      answer: 'BMI is a useful screening tool but has limitations. It does not account for muscle mass, bone density, age, sex, or body composition. Athletes may have high BMI but low body fat.',
    },
    {
      question: 'Should I use metric or imperial units?',
      answer: 'Our calculator uses metric units (kg for weight, cm for height). To convert: 1 pound = 0.453 kg, 1 inch = 2.54 cm, 1 foot = 30.48 cm.',
    },
    {
      question: 'Is this medical advice?',
      answer: 'No. This tool provides informational estimates only. Always consult a healthcare professional for medical advice about your weight, health, or fitness goals.',
    },
  ],

  'emi-calculator': [
    {
      question: 'What is EMI?',
      answer: 'EMI (Equated Monthly Installment) is a fixed payment you make every month to repay a loan. It includes both principal repayment and interest charges.',
    },
    {
      question: 'How is EMI calculated?',
      answer: 'EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P is principal amount, r is monthly interest rate (annual rate/12/100), and n is total number of months.',
    },
    {
      question: 'Does this work for home loans, car loans, and personal loans?',
      answer: 'Yes! The EMI formula is the same for all types of loans — home loans, car loans, personal loans, education loans, etc. Just enter the appropriate loan amount, rate, and tenure.',
    },
    {
      question: 'What is the difference between flat rate and reducing rate?',
      answer: 'Our calculator uses the reducing balance method (most common). Interest is charged on the outstanding principal, which decreases each month. Flat rate charges interest on the full original amount.',
    },
    {
      question: 'Can I see the full amortization schedule?',
      answer: 'Currently, we show the EMI amount, total interest, and total payment with a visual breakdown. A detailed month-by-month amortization schedule may be added in future updates.',
    },
  ],

  'discount-calculator': [
    {
      question: 'How does the discount calculator work?',
      answer: 'Enter the original price and discount percentage. The calculator shows the final price after discount, the amount you save, and the effective discount percentage.',
    },
    {
      question: 'Can I calculate successive discounts?',
      answer: 'For multiple discounts (e.g., 20% + 10%), calculate the first discount, then use the resulting price as the new original price for the second discount. Note: 20% + 10% ≠ 30%.',
    },
    {
      question: 'Does it include tax calculation?',
      answer: 'Currently, the calculator shows the price after discount without tax. To include tax, apply the discount first, then add your applicable tax rate to the final price.',
    },
    {
      question: 'Is this useful for shopping?',
      answer: 'Absolutely! Use it to quickly compare deals, calculate sale prices, verify if a discount is worth it, and determine actual savings during shopping events and sales.',
    },
  ],

  'sip-calculator': [
    {
      question: 'What is SIP?',
      answer: 'SIP (Systematic Investment Plan) is a method of investing a fixed amount regularly (usually monthly) in mutual funds. It helps in rupee cost averaging and building wealth over time through compounding.',
    },
    {
      question: 'How is SIP return calculated?',
      answer: 'The formula is: M × ((1+r)^n - 1) / r × (1+r), where M is monthly investment, r is monthly return rate (annual/12/100), and n is total months. It assumes returns are compounded monthly.',
    },
    {
      question: 'Are the returns guaranteed?',
      answer: 'No. SIP returns shown are estimates based on the expected annual return rate you enter. Actual mutual fund returns vary based on market performance and are not guaranteed.',
    },
    {
      question: 'What is a good expected return rate to use?',
      answer: 'Historically, Indian equity mutual funds have returned 12–15% annually over 10+ years. Debt funds return 6–8%. Use 12% for balanced estimates, but past performance does not guarantee future results.',
    },
    {
      question: 'Is SIP better than lump sum investing?',
      answer: 'SIP reduces timing risk through rupee cost averaging — you buy more units when prices are low and fewer when prices are high. It is ideal for salaried individuals investing regularly.',
    },
  ],

  'cagr-calculator': [
    {
      question: 'What is CAGR?',
      answer: 'CAGR (Compound Annual Growth Rate) is the mean annual growth rate of an investment over a specified period longer than one year. It smooths out volatility to show the equivalent steady growth rate.',
    },
    {
      question: 'How is CAGR different from absolute return?',
      answer: 'Absolute return shows total growth (e.g., 150% over 5 years) while CAGR shows the equivalent annual rate (e.g., 20.11% per year). CAGR is better for comparing investments of different durations.',
    },
    {
      question: 'What is the CAGR formula?',
      answer: 'CAGR = (Ending Value / Beginning Value)^(1/Years) - 1. It calculates the rate at which an investment would have grown if it grew at a steady rate annually.',
    },
    {
      question: 'What is a good CAGR?',
      answer: 'It depends on the asset class. Fixed deposits: 5–7%, Bonds: 6–9%, Large-cap stocks: 10–14%, Small-cap stocks: 14–20%. Compare CAGR against inflation (6–7%) to see real returns.',
    },
    {
      question: 'Does CAGR account for volatility?',
      answer: 'No, CAGR smooths out all yearly fluctuations and shows only the equivalent steady growth rate. It does not reflect the actual year-to-year volatility of your investment.',
    },
  ],

  'password-generator': [
    {
      question: 'How secure are the generated passwords?',
      answer: 'Very secure. We use the Web Crypto API (crypto.getRandomValues) for cryptographically strong random number generation. Passwords with 16+ characters using all character types are extremely difficult to crack.',
    },
    {
      question: 'What makes a strong password?',
      answer: 'A strong password is at least 12 characters long and includes uppercase letters, lowercase letters, numbers, and special symbols. Avoid dictionary words, personal info, and repeated patterns.',
    },
    {
      question: 'What does "exclude ambiguous characters" mean?',
      answer: 'It removes characters that look similar and cause confusion: O (letter) vs 0 (zero), I (letter I) vs l (letter L) vs 1 (one). Useful when you need to read or type passwords manually.',
    },
    {
      question: 'Are the passwords stored anywhere?',
      answer: 'No. Passwords are generated entirely in your browser and are never sent to any server. Once you close or refresh the page, the generated password exists only if you have copied it.',
    },
    {
      question: 'How long should my password be?',
      answer: '12 characters is the minimum recommendation. 16 characters is ideal for most accounts. For high-security accounts (banking, email), use 20+ characters.',
    },
  ],

  'uuid-generator': [
    {
      question: 'What is a UUID?',
      answer: 'UUID (Universally Unique Identifier) is a 128-bit label used to uniquely identify information in computer systems. The format is: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx (36 characters with hyphens).',
    },
    {
      question: 'What is UUID version 4?',
      answer: 'UUID v4 is randomly generated using cryptographic random numbers. The "4" in the third group indicates the version. It provides 122 bits of randomness, making collisions virtually impossible.',
    },
    {
      question: 'Can two UUIDs ever be the same?',
      answer: 'Theoretically yes, but practically no. The probability of generating a duplicate UUID v4 is astronomically low — you would need to generate 2.71 quintillion UUIDs to have a 50% chance of one collision.',
    },
    {
      question: 'What are UUIDs used for?',
      answer: 'UUIDs are used as database primary keys, API identifiers, session tokens, file names, transaction IDs, and anywhere you need a unique identifier without a central authority.',
    },
    {
      question: 'Should I include hyphens in UUIDs?',
      answer: 'The standard format includes hyphens (8-4-4-4-12 pattern) for readability. Some systems accept UUIDs without hyphens. Our tool lets you choose either format.',
    },
  ],

  'qr-generator': [
    {
      question: 'What can I encode in a QR code?',
      answer: 'You can encode URLs, plain text, WiFi credentials, email addresses, phone numbers, SMS messages, geographic coordinates, and more. Most commonly used for website links.',
    },
    {
      question: 'What size QR code should I use?',
      answer: 'For digital use (websites, emails): 200–300px is fine. For print (business cards, flyers): use 400–500px or higher. The QR code should be at least 2cm × 2cm when printed for reliable scanning.',
    },
    {
      question: 'Can I customize the colors?',
      answer: 'Yes! You can change both the foreground (dark modules) and background colors. Ensure sufficient contrast between them — dark foreground on light background works best for scanning reliability.',
    },
    {
      question: 'Will the QR code expire?',
      answer: 'No. QR codes generated here are static — they encode the data directly and never expire. However, if you encode a URL and that URL becomes inactive, the QR code will lead to a dead link.',
    },
    {
      question: 'How do I download the QR code?',
      answer: 'After generating, click the "Download PNG" button to save the QR code as a PNG image. You can then use it in documents, websites, presentations, or print materials.',
    },
  ],
};
