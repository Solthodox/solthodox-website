import { Post } from '../components/post'
import { pages } from '../../../statics'
import { type Metadata } from 'next'
import Avatar from '../../../public/avatar.png'

export const metadata: Metadata = {
  title: 'Solthodox | Experience',
  description: `See Solthodox's experience`,
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
    title: 'Solthodox | experience',
    description: `See Solthodox's experience`,
    images: [`https://solthodox-website.vercel.app${Avatar.src}`],
    type: 'website',
    siteName: 'solthodox-website'
  }
}
export default function Page(): JSX.Element {
  return (
    <section className='sm:py-16'>
      <Post statics={pages.experience} />
    </section>
  )
}
