import { Post } from '@/app/components/post'
import { type StaticImageData } from 'next/image'
import { type ReactElement } from 'react'
import { publications } from '../../../../../statics'
import Link from 'next/link'
import { uniqueReactKey } from '@/utils'

interface Post {
  title: string
  metadata: { date: string; tags: string[] | null }
  description: string
  imgSourceLight: StaticImageData | null
  imgSourceDark: StaticImageData | null
  mdx: ReactElement
}

export default function Tag({
  params
}: {
  params: {
    tag: string
  }
}): JSX.Element {
  const parsed_tag: string = params.tag.replace(/%20/g, ' ')
  const posts: any = publications.filter(p =>
    p.metadata.tags?.includes(parsed_tag)
  ) as unknown as Post
  return (
    <section className='sm:py-16'>
      <h1 className='text-2xl font-bold'>Tag: {parsed_tag}</h1>
      <ul className='prose prose-sm  dark:prose-invert'>
        {posts.map((post: Post, index: number) => (
          <>
            <Link
              href={`/articles/${post.title}`}
              key={uniqueReactKey(post.title, index)}
            >
              <h2 className=''>
                {post.title} - <span>{post.metadata.date}</span>
              </h2>
            </Link>
            <p>{post.description}</p>
          </>
        ))}
      </ul>
    </section>
  )
}
