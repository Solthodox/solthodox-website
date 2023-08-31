import './globals.css'
import Main from './main'
import Providers from './providers'
import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import Avatar from '../../public/avatar.png'
import { type Metadata } from 'next'
import { pages } from '../../statics'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Solthodox | Home',
  description: pages.about.description,
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
    title: 'Solthodox | Home',
    description: pages.about.description,
    images: [`https://solthodox-website.vercel.app${Avatar.src}`],
    type: 'website',
    siteName: 'solthodox-website'
  }
}

interface Props {
  children: ReactNode
}

export default function RootLayout(props: Props) {
  const { children } = props
  return (
    <html
      dir='ltr'
      lang='en'
      className='h-full w-full scroll-p-4 scroll-smooth font-poppins md:scroll-p-16'
    >
      <head>
        <meta charSet='utf-8'></meta>
      </head>
      <Providers>
        <body className='h-full min-h-full  scroll-smooth border-t-4 border-secondary bg-primary-light font-poppins text-primary-dark dark:bg-primary-dark  dark:text-primary-light '>
          <Main>{children}</Main>
        </body>
      </Providers>
    </html>
  )
}
