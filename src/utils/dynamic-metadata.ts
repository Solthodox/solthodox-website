import { Metadata } from 'next'
import { StaticImageData } from 'next/image'

export const dynamicMetadata = (
  title: string,
  description: string,
  imgSource: StaticImageData | null
): Metadata => {
  return {
    title: `${title} · Solthodox`,
    description: description,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico'
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5
    },
    openGraph: {
      title: `${title} · Solthodox`,
      description: description,
      images: [
        imgSource !== null
          ? `https://solthodox-website.vercel.app${imgSource.src}`
          : ''
      ],
      type: 'website',
      siteName: 'solthodox-website'
    }
  }
}
