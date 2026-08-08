const base = import.meta.env.BASE_URL

export const projects = [
  {
    id: 'crypto-tracker',
    title: 'CryptoTracker',
    tagline: 'Top-10 Crypto Prices',
    description:
      'Live prices for the top-10 cryptocurrencies with real-time updates and a built-in USD to crypto converter.',
    image: `${base}projects/crypto-tracker.png`,
    demo: `${base}demos/crypto-tracker/`,
    github: 'https://github.com/z3rovik/crypto-tracker',
    tags: ['React', 'Crypto', 'API', 'UI/UX'],
  },
  {
    id: 'crypto-wallet',
    title: 'CryptoWallet',
    tagline: 'Portfolio Dashboard',
    description:
      'Portfolio dashboard with send, receive and swap flows, balances and a full transaction history.',
    image: `${base}projects/crypto-wallet.png`,
    demo: `${base}demos/crypto-wallet/`,
    github: 'https://github.com/z3rovik/crypto-wallet-dashboard',
    tags: ['React', 'Router', 'Crypto', 'UI/UX'],
  },
  {
    id: 'roi-calculator',
    title: 'Crypto ROI Calculator',
    tagline: 'Investment Simulator',
    description:
      'Investment payoff calculator with interactive sliders, scenario tables and growth charts built with Recharts.',
    image: `${base}projects/roi-calculator.png`,
    demo: `${base}demos/roi-calculator/`,
    github: 'https://github.com/z3rovik/crypto-roi-calculator',
    tags: ['React', 'Recharts', 'Crypto', 'UI/UX'],
  },
]

export const skills = [
  'React',
  'JavaScript',
  'UI/UX Design',
  'Crypto Knowledge',
  'Web Design',
  'TypeScript',
  'Tailwind CSS',
  'Data Visualization',
]

export const socials = {
  telegram: 'https://t.me/heyz3ra',
  github: 'https://github.com/z3rovik',
}
