import Link from 'next/link'
import { type FC } from 'react'

export const Sections: FC = () => {
  return (
    <div>
      <Link className='mb-2' href='/'>
        <h1 className='text-xl font-bold text-primary-dark dark:text-primary-light md:text-3xl'>
          Solthodox
        </h1>
      </Link>
      <ul className='mr-4 flex space-x-1 text-secondary md:space-x-4'>
        <Link className='hover:underline' href='/'>
          <li className='text-sm'>Home</li>
        </Link>
        <span>|</span>
        <Link className='hover:underline' href='/articles'>
          <li className='text-sm'>Articles</li>
        </Link>
        <span>|</span>
        <Link className='hover:underline' href='/work'>
          <li className='text-sm'>Projects</li>
        </Link>
        <span>|</span>
        <Link className='hover:underline' href='/experience'>
          <li className='text-sm'>Experience</li>
        </Link>
      </ul>
    </div>
  )
}
