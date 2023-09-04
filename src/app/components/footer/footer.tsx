import Link from 'next/link'
import { type FC } from 'react'
import { FiTwitter, FiMail, FiGithub } from 'react-icons/fi'

export const Footer: FC = () => {
  return (
    <footer className='flex items-center justify-between py-2'>
      <p className='text-sm'>Copyright &copy; 2023 Solthodox</p>
      <ul className='flex space-x-2'>
        <Link href='https://github.com/Solthodox' target='blank'>
          <FiGithub />
        </Link>
        <Link href='https://twitter.com/solthodox' target='blank'>
          <FiTwitter />
        </Link>
        <Link href='/'>
          <FiMail />
        </Link>
      </ul>
    </footer>
  )
}
