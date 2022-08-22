import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <h2 className="section__title section__title-gradient">{children}</h2>
}
