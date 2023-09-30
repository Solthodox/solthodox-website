import { useTheme } from 'next-themes'
import { type ComponentPropsWithoutRef, type FC } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { uniqueReactKey } from '@/utils'
interface Props extends ComponentPropsWithoutRef<'header'> {
  title: string
  metadata: { date: string; tags: string[] | null }
  description: string
  imgSourceLight: StaticImageData | null
  imgSourceDark: StaticImageData | null
}

export const PostHeader: FC<Props> = props => {
  const { title, metadata, description, imgSourceLight, imgSourceDark } = props
  const { theme, setTheme } = useTheme()
  return (
    <header>
      <h1 className='text-left'>{title}</h1>
      <h3>
        {metadata.date}{' '}
        {metadata.tags !== null && (
          <>
            |{' '}
            {(metadata.tags as string[]).map((tag: string, index: number) => (
              <Link
                href={`/articles/tag/${tag}`}
                className='mr-2 cursor-pointer underline hover:text-secondary'
                key={uniqueReactKey(tag, index)}
              >
                #{tag}
              </Link>
            ))}
          </>
        )}
      </h3>
      {imgSourceDark !== null && imgSourceLight !== null && (
        <Image
          alt='header-image'
          placeholder='blur'
          src={
            (theme === 'dark' ? imgSourceDark : imgSourceLight) as
              | string
              | StaticImageData
          }
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      )}
      <p>{description}</p>
    </header>
  )
}
