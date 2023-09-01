import { Post } from '@/app/components/post'
import { type StaticImageData } from 'next/image'
import { type ReactElement } from 'react'
import { publications } from '../../../../statics'
import { type Metadata } from 'next'
import { dynamicMetadata } from '@/utils'
import { ArticleSidebar } from '@/app/components/article-sidebar'
import { Share } from '@/app/components/article-sidebar/share'

interface Post {
  title: string
  metadata: { date: string; tags: string[] | null }
  description: string
  imgSourceLight: StaticImageData | null
  imgSourceDark: StaticImageData | null
  mdx: ReactElement
  contents: string[] | null
}

export function generateMetadata({
  params
}: {
  params: { slug: string }
}): Metadata {
  const parsed_slug: string = params.slug.replace(/%20/g, ' ')
  const statics: Post = publications.find(
    p => p.title === parsed_slug
  ) as unknown as Post
  return dynamicMetadata(
    statics.title,
    statics.description,
    statics.imgSourceDark
  )
}

export default function Page({ params }: { params: { slug: string } }) {
  const parsed_slug: string = params.slug.replace(/%20/g, ' ')
  const statics: Post = publications.find(
    p => p.title === parsed_slug
  ) as unknown as Post
  return (
    <section>
      <div className='mb-12 flex sm:py-16'>
        <Post statics={statics} />
        <ArticleSidebar
          className='hidden sm:block'
          contents={statics.contents as string[]}
        />
      </div>
      <Share className=' sm:hidden' justifyIcons='justify-start' />
    </section>
  )
}
