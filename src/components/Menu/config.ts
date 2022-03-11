import { MenuEntry } from '@apeswapfinance/uikit'

export const BASE_APP_URL = 'https://winery-dex.web.app';

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: BASE_APP_URL,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    // href: '/swap'
    items: [
      {
        label: 'Exchange',
        href: '/trade/swap',
      },
      {
        label: 'Liquidity',
        href: '/trade/pool',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: `${BASE_APP_URL}/info/overview`
      },
      {
        label: 'Tokens',
        href: `${BASE_APP_URL}/info/tokens`
      },
      {
        label: 'Pools',
        href: `${BASE_APP_URL}/info/pools`
      }
    ]
  },
  {
    label: 'Earn',
    icon: 'EarnIcon',
    items: [
      {
        label: 'Oak barrel',
        href: `${BASE_APP_URL}/earn/farms`
      },
      {
        label: 'Champagne',
        href: `${BASE_APP_URL}/earn/pools`
      }
    ]
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: `${BASE_APP_URL}/pools`,
  // },
  {
    label: 'Win',
    icon: 'WinIcon',
    href: `${BASE_APP_URL}/burn`,
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: `${BASE_APP_URL}/iao`
  },
  // {
  //   label: 'Settings',
  //   icon: 'SettingsIcon',
  //   href: `/settings`,
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/winery-land',
      },
      {
        label: 'Docs',
        href: 'https://winery.gitbook.io/internal-wiki/',
      },
      {
        label: 'Blog',
        href: 'https://winery-official.medium.com',
      },
      {
        label: 'Privacy Policy',
        href: `${BASE_APP_URL}/WineryPrivacyPolicy.pdf`
      },
      {
        label: 'Terms Of Service',
        href: `${BASE_APP_URL}/WineryTermsOfServices.pdf`
      }
    ],
  },
]

export default config
