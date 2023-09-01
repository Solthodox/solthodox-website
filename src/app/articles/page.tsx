import Link from 'next/link'
import { publications } from '../../../statics'
import { uniqueReactKey } from '@/utils'
import { type StaticImageData } from 'next/image'
import { type ReactElement } from 'react'
import { type Metadata } from 'next'
import Avatar from '../../../public/avatar.png'
import { ArticleTags } from '../components/article-tags/article-tags'

interface Post {
  title: string
  metadata: { date: string; tags: string[] | null }
  description: string
  imgSourceLight: StaticImageData | null
  imgSourceDark: StaticImageData | null
  mdx: ReactElement
}

export const metadata: Metadata = {
  title: 'Solthodox | Articles',
  description: `See Solthodox's articles`,
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
    title: 'Solthodox | articles',
    description: `See Solthodox's articles`,
    images: [`https://solthodox-website.vercel.app${Avatar.src}`],
    type: 'website',
    siteName: 'solthodox-website'
  }
}

export default function Articles(): JSX.Element {
  return (
    <section className='flex sm:py-16'>
      <ul className='prose prose-sm dark:prose-invert'>
        {publications.map((post: Post, index: number) => (
          <li key={uniqueReactKey(post.title, index)}>
            <Link href={`/articles/${post.title}`}>
              <h2 className=''>
                {post.title} - <span>{post.metadata.date}</span>
              </h2>
            </Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
      <ArticleTags className='hidden  md:block' />
    </section>
  )
}
