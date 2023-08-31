import classNames from 'classnames'
import { ThemeButton } from './theme-button'
import { type ComponentPropsWithoutRef, type FC } from 'react'
import { Pfp } from './pfp'
import { Sections } from './sections'
interface Props extends ComponentPropsWithoutRef<'nav'> {}
export const Navbar: FC<Props> = props => {
  const { className } = props
  return (
    <nav
      className={classNames(
        ' sticky top-0 z-30 flex items-center justify-between bg-primary-light py-6  dark:bg-primary-dark',
        [className]
      )}
    >
      <div className='relative flex'>
        <Pfp />
        <Sections />
      </div>
      <ThemeButton />
    </nav>
  )
}
