'use client'
import classNames from 'classnames'
import { ComponentPropsWithoutRef, type FC } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import { FiMail, FiTwitter } from 'react-icons/fi'

interface Props extends ComponentPropsWithoutRef<'span'> {
  justifyIcons: string
  className: string
}

export const Share: FC<Props> = (props: Props) => {
  const { justifyIcons, className } = props
  const handleCopyClick: any = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const textToCopy = window.location.href
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert('Copied to clipboard')
      })
      .catch(error => {
        console.error('Failed to copy text to clipboard:', error)
      })
  }

  const handleTwitterShareClick: any = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const tweetText =
      'Check out this article by @solthodox : ' + window.location.href
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`
    window.open(twitterUrl, '_blank')
  }
  return (
    <span className={classNames('', [className])}>
      <h3 className='sm:text-md mb-2'>Share this article</h3>
      <div
        className={classNames('mb-4 flex items-center  space-x-2 text-xl', [
          justifyIcons
        ])}
      >
        <BsLink45Deg
          onClick={handleCopyClick}
          className='cursor-pointer hover:text-secondary'
        />
        <FiTwitter
          onClick={handleTwitterShareClick}
          className='cursor-pointer hover:text-secondary'
        />
        <FiMail className='cursor-pointer hover:text-secondary' />
      </div>
    </span>
  )
}
