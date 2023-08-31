import { ComponentPropsWithoutRef, FC } from 'react'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

interface Props extends ComponentPropsWithoutRef<'main'> {}

const Main: FC<Props> = props => {
  const { children } = props
  return (
    <main className='mx-auto max-w-screen-sm px-4 pt-2 sm:px-6 sm:pt-16'>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
export default Main
