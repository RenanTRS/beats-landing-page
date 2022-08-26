import { ReactNode } from 'react'

interface ButtonProps {
  isAbsolute?: boolean
  children: ReactNode
}

const LinkButton = ({ children }: ButtonProps) => {
  return (
    <a href="#" className={`button button__flex`}>
      {children}
    </a>
  )
}

const NormalButton = ({ isAbsolute, children }: ButtonProps) => {
  return (
    <button
      className={`${isAbsolute ? 'absolute' : ''} normalButton button__flex`}
    >
      {children}
    </button>
  )
}

export const Button = { LinkButton, NormalButton }
