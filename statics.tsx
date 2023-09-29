import { ReactElement } from 'react'
import UniswapV4DeepDive from './src/content/uniswapv4-deep-dive.mdx'
import ExploringBitManipulationInSmartContracts from './src/content/exploring-bit-manipulation-in-smart-contracts.mdx'
import AnalysingNextBullrun from './src/content/analysing-the-next-bullrun.mdx'
import About from './src/content/about.mdx'
import Work from './src/content/work.mdx'
import Experience from './src/content/experience.mdx'
import UnicornLight from '/public/unicorn-light.png'
import UnicornDark from '/public/unicorn-dark.png'
import MagicianLight from '/public/magician-light.png'
import MagicianDark from '/public/magician-dark.png'
import BearLight from '/public/bear-light.png'
import BearDark from '/public/bear-dark.png'

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
    description: `Some of Solthodox's projects  `,
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
      'Uniswap V4 stands on the horizon, poised to captivate the DeFi community with its revolutionary advancements. For enthusiasts deeply engrossed in the realm of decentralized finance, a comprehensive grasp of the intricate features and mechanisms underlying this upgrade is nothing short of essential. From the innovative concept of hooks to the dynamic fee system, contract singleton, and the ERC1155 accounting...',
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
      '2.5 ERC1155 Liquidity Accounting',
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
  },
  {
    title: 'Exploring bit manipulation in smart contracts',
    metadata: { date: 'Sept 18, 2023', tags: ['technical', 'solidity'] },
    description:
      'Discover the fundamentals of bits in Solidity and how they play a pivotal role in efficient data storage and manipulation. This article breaks down complex concepts into easy-to-understand sections, guiding you through essential bitwise operations, compact data storage techniques, and real-world gas optimization strategies.',
    imgSourceLight: MagicianLight,
    imgSourceDark: MagicianDark,
    mdx: <ExploringBitManipulationInSmartContracts />,
    contents: [
      '1.Introduction',
      '2.Understanding Bits in Solidity',
      '2.1.Bits explained',
      '2.2.Why Bit Manipulation in Solidity',
      '3.Basic Bitwise Operations',
      '3.1.Bitwise & and | oeprations',
      '3.2.Bitwise << and >> oeprations',
      '3.3.Bitwise ~ operatoions',
      '4.Bit Manipulation Techniques',
      '4.1.Accessing a specific set of bits',
      '4.2.Modifying a specific set of bits',
      '5.Conclusion',
      '6.References:'
    ]
  },
  {
    title: 'Analysing the next bullrun',
    metadata: { date: 'Sept 26, 2023', tags: ['non-technical', 'economics'] },
    description:
      "In this comprehensive article, we delve deep into the cryptocurrency market, exploring the factors that could trigger the next crypto bull run and shape its magnitude. From economic influences like inflation and institutional investment to the impact of evolving regulations, we dissect the dynamics at play. We also unravel the relationship between Bitcoin's cycles and broader crypto trends and analyze historical patterns for insights.",
    imgSourceLight: BearLight,
    imgSourceDark: BearDark,
    mdx: <AnalysingNextBullrun />,
    contents: [
      '1.Introduction',
      '2.Understanding Bits in Solidity',
      '2.1.Bits explained',
      '2.2.Why Bit Manipulation in Solidity',
      '3.Basic Bitwise Operations',
      '3.1.Bitwise & and | oeprations',
      '3.2.Bitwise << and >> oeprations',
      '3.3.Bitwise ~ operatoions',
      '4.Bit Manipulation Techniques',
      '4.1.Accessing a specific set of bits',
      '4.2.Modifying a specific set of bits',
      '5.Conclusion',
      '6.References:'
    ]
  }
]
