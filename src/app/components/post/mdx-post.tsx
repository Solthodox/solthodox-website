'use client'
import classNames from 'classnames'
import { ComponentPropsWithoutRef, FC, ReactElement } from 'react'
import { PostHeader } from './post-header'
import { type StaticImageData } from 'next/image'

interface Props extends ComponentPropsWithoutRef<'article'> {
  statics: {
    title: string
    metadata: { date: string; tags: string[] | null }
    description: string
    imgSourceLight: StaticImageData | null
    imgSourceDark: StaticImageData | null
    mdx: ReactElement
    contents: string[] | null
  }
}

export const Post: FC<Props> = props => {
  const { statics, ...resProps } = props
  const { className } = resProps
  return (
    <>
      <article
        className={classNames(
          'underline-secondary prose prose-sm overflow-auto text-justify dark:prose-invert',
          [className]
        )}
      >
        <PostHeader
          title={statics.title}
          metadata={statics.metadata}
          description={statics.description}
          imgSourceDark={statics.imgSourceDark}
          imgSourceLight={statics.imgSourceLight}
        />
        {statics.mdx}
      </article>
    </>
  )
}
