import { ReactNode } from 'react'

interface SectionProps {
  sectionClass?: any
  grid: boolean
  children: ReactNode
  id?: string
}

export const Section = ({ sectionClass, children, grid, id }: SectionProps) => {
  return (
    <section
      className={`${sectionClass ? sectionClass : ''} section ${
        grid ? 'grid' : ''
      }`}
      id={id}
    >
      {children}
    </section>
  )
}
