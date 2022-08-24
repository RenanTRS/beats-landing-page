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

const NormalButton = ({ styleButton, children }: ButtonProps) => {
  return (
    <button className={`${styleButton ? styleButton : 'button'} button__flex`}>
      {children}
    </button>
  )
}

export const Button = { LinkButton, NormalButton }
