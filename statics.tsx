import { ReactElement } from 'react'
import UniswapV4DeepDive from './src/content/uniswapv4-deep-dive.mdx'
import About from './src/content/about.mdx'
import Work from './src/content/work.mdx'
import Experience from './src/content/experience.mdx'
import UnicornLight from '/public/unicorn-light.png'
import UnicornDark from '/public/unicorn-dark.png'

import { StaticImageData } from 'next/image'
interface Post {
  title: string
  metadata: { date: string; tags: string[] | null }
  description: string
  imgSourceLight: StaticImageData | null
  imgSourceDark: StaticImageData | null
  mdx: ReactElement
  contents: string[] | null
}

export const pages = {
  about: {
    title: 'About me',
    metadata: { date: 'Aug 23, 2023', tags: null },
    description:
      'Get to know Solthodox, a 21 y/o self-taught blockhain developer from Spain.',
    imgSourceLight: null,
    imgSourceDark: null,
    mdx: <About />,
    contents: null
  },
  experience: {
    title: 'Experience',
    metadata: { date: 'Aug 23, 2023', tags: null },
    description: 'See the projects Solthodox has worked on',
    imgSourceLight: null,
    imgSourceDark: null,
    mdx: <Experience />,
    contents: null
  },
  work: {
    title: 'Work',
    metadata: { date: 'Aug 23, 2023', tags: null },
    description: `Solthodox's work so far`,
    imgSourceLight: null,
    imgSourceDark: null,
    mdx: <Work />,
    contents: null
  }
}

export const publications: Post[] = [
  {
    title: 'Uniswap V4 deep-dive',
    metadata: { date: 'Aug 23, 2023', tags: ['technical', 'defi'] },
    description:
      'Uniswap V4 stands on the horizon, poised to captivate the DeFi community with its revolutionary advancements. For enthusiasts deeply engrossed in the realm of decentralized finance, a comprehensive grasp of the intricate features and mechanisms underlying this upgrade is nothing short of essential. From the innovative concept of hooks to the dynamic fee system, contract singleton, and the ERC1155 flash accounting...',
    imgSourceLight: UnicornLight,
    imgSourceDark: UnicornDark,
    mdx: <UniswapV4DeepDive />,
    contents: [
      '1.Introduction',
      '1.1 Introduction to Uniswap V4',
      '1.2 Significance of Uniswap in the DeFi Ecosystem',
      '1.3 Overview of Uniswap V4 codebase',
      '2.Key Features of Uniswap V4',
      '2.1 Singleton Contract',
      '2.1.1 Trading through smart contracts',
      '2.1.2 Full contract locking',
      '2.1.3 Implementation example',
      '2.2 Hooks',
      '2.2.1 Configuration',
      '2.2.2 Using addresses as bitmaps',
      '2.2.3 Deploying a hook with an address that meets this requirements',
      '2.3 Infinite Pools per Pair',
      '2.4 Native ETH Support',
      '3.Implications for Traders and Liquidity Providers',
      '3.1 Benefits and Drawbacks of AMMs',
      '3.1.1 Liquidity concentration',
      '3.1.2 Impermanent loss',
      '3.2 Enhanced pools for traders',
      '3.3.1 TWAMM',
      '3.3.2 Limit orders',
      '3.3.3 Full range liquidity',
      '3.3.4 Geomean oracle',
      '3.3.5 Volatility oracles',
      '3.4 Uniswap X',
      '4.Future Implications and Challenges',
      '4.1 Potential Competition and Innovations in Response',
      '4.2 Security and Smart Contract Audits',
      '5.Conclusion',
      '6.Glossary',
      '6.1 Key Terms and Concepts',
      '7.References',
      '7.1 List of Sources and Further Reading'
    ]
  }
]
