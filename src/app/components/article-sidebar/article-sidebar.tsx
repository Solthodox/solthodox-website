'use client'
import { type ComponentPropsWithoutRef, type FC } from 'react'
import classNames from 'classnames'
import { Share } from './share'
import { Contents } from './contents'

interface Props extends ComponentPropsWithoutRef<'aside'> {
  contents: string[]
}
export const ArticleSidebar: FC<Props> = props => {
  const { contents, ...resProps } = props
  const { className } = resProps

  return (
    <aside className={classNames('pl-4 text-right', [className])}>
      <Share className='' justifyIcons='justify-end' />
      <Contents contents={contents} />
    </aside>
  )
}
