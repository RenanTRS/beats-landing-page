import { ReactNode } from 'react'

interface ContainerProps {
  containerClass?: any
  children: ReactNode
}

export const Container = ({ containerClass, children }: ContainerProps) => {
  return <div className={`${containerClass} container grid`}>{children}</div>
}
