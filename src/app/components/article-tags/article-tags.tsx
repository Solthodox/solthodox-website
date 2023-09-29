import classNames from 'classnames'
import Link from 'next/link'
import { type ComponentPropsWithoutRef, type FC } from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
interface Props extends ComponentPropsWithoutRef<'aside'> {}
export const ArticleTags: FC<Props> = props => {
  const { className } = props
  return (
    <aside className={classNames('pt-8', [className])}>
      <h3 className='mb-2 flex items-center font-bold'>
        <BiPurchaseTag className='mr-2 text-lg' />
        Tags
      </h3>
      <div className='flex flex-wrap'>
        <Link
          className='mr-1 cursor-pointer text-sm text-gray-500 hover:text-secondary'
          href='/articles/tag/non-technical'
        >
          #non-technical
        </Link>
        <Link
          className='mr-1 cursor-pointer text-sm text-gray-500 hover:text-secondary'
          href='/articles/tag/technical'
        >
          #techical
        </Link>
        <Link
          className='mr-1 cursor-pointer text-sm text-gray-500 hover:text-secondary'
          href='/articles/tag/defi'
        >
          #defi
        </Link>
        <Link
          className='mr-1 cursor-pointer text-sm text-gray-500 hover:text-secondary'
          href='/articles/tag/solidity'
        >
          #solidity
        </Link>
        <Link
          className='mr-1 cursor-pointer text-sm text-gray-500 hover:text-secondary'
          href='/articles/tag/economics'
        >
          #economics
        </Link>
      </div>
    </aside>
  )
}
