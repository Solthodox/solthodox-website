'use client'
import { ThemeProvider } from 'next-themes'
import { FC, ComponentPropsWithoutRef, ReactNode } from 'react'
interface Props extends ComponentPropsWithoutRef<typeof ThemeProvider> {
  children: ReactNode
}

const Providers: FC<Props> = props => {
  const { children } = props

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
export default Providers
