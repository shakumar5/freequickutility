export interface FAQ {
  question: string;
  answer: string;
}

export const homeFaqs: FAQ[] = [
  {
    question: 'Are all tools on FreeQuickUtility completely free?',
    answer: 'Yes, every tool is 100% free with no hidden charges, no premium tiers, and no usage limits. We believe useful utilities should be accessible to everyone.',
  },
  {
    question: 'Do I need to create an account to use the tools?',
    answer: 'No registration required. All tools work instantly in your browser without sign-up, login, or any personal information.',
  },
  {
    question: 'Is my data safe? Do you store anything I enter?',
    answer: 'Your privacy is our priority. All processing happens directly in your browser using JavaScript. No data is sent to our servers, stored, or shared with third parties.',
  },
  {
    question: 'Do the tools work on mobile devices?',
    answer: 'Absolutely. Every tool is fully responsive and works seamlessly on smartphones, tablets, and desktops. You can even install it as a Progressive Web App for offline access.',
  },
  {
    question: 'Can I suggest a new tool or report a bug?',
    answer: 'We welcome feedback! Visit our Contact page to suggest new tools, report issues, or share ideas. We actively develop new utilities based on user requests.',
  },
  {
    question: 'How is FreeQuickUtility different from other tool websites?',
    answer: 'We focus on speed, privacy, and design quality. Our tools are built with modern technology (Astro + static generation) for instant loading, process everything client-side for privacy, and feature a clean, professional interface designed for everyday use.',
  },
];
