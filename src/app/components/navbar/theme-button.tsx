'use client'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { ComponentPropsWithoutRef, FC, useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

interface Props extends ComponentPropsWithoutRef<'button'> {}
export const ThemeButton: FC<Props> = props => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { className } = props

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchTheme: any = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <button className={classNames('', [className])} onClick={switchTheme}>
      {theme === 'dark' ? (
        <FiSun className='mr-2 h-6 w-6' />
      ) : (
        <FiMoon className='mr-2 h-6 w-6' />
      )}
    </button>
  )
}
