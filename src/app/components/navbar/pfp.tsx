import { type FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '/public/avatar.png'

export const Pfp: FC = () => {
  return (
    <Link className='mr-4 hidden sm:flex' href='/'>
      <Image
        height={70}
        width={70}
        className='transform rounded-md transition-transform duration-300 hover:scale-110'
        alt='avatar'
        src={Avatar}
      />
    </Link>
  )
}
