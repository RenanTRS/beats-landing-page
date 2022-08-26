import { ReactNode } from 'react'

interface TitleProps {
  titleStyle?: any
  children: ReactNode
}

export const Title = ({ titleStyle, children }: TitleProps) => {
  return (
    <h2
      className={`section__title section__title-gradient ${
        titleStyle ? titleStyle : ''
      } `}
    >
      {children}
    </h2>
  )
}
