import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <a href="#" className={`button button__flex`}>
      {children}
    </a>
  )
}
