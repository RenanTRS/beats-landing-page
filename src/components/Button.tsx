import { ReactNode } from 'react'

interface ButtonProps {
  styleButton?: any
  children: ReactNode
}

const LinkButton = ({ children }: ButtonProps) => {
  return (
    <a href="#" className={`button button__flex`}>
      {children}
    </a>
  )
}

const NormalButton = ({ children }: ButtonProps) => {
  return <button className={`normalButton button__flex`}>{children}</button>
}

export const Button = { LinkButton, NormalButton }
