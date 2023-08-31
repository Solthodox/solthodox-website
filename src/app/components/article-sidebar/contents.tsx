import { uniqueReactKey } from '@/utils'
import Link from 'next/link'
import { type ComponentPropsWithoutRef, type FC } from 'react'

interface Props extends ComponentPropsWithoutRef<any> {
  contents: string[]
}

export const Contents: FC<Props> = (props: Props) => {
  const { contents } = props
  return (
    <>
      <h3>Table of contents</h3>
      <ul>
        {contents.map((content: string, index: number) => (
          <li
            className='cursor-pointer text-gray-500 hover:text-secondary'
            key={uniqueReactKey(content, index)}
          >
            # {''}
            <Link
              href={`#${content.toLowerCase().replace(/[\s.]/g, '-')}`}
              className='text-xs'
            >
              {content}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
