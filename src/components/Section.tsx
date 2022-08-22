import { ReactNode } from 'react'

interface SectionProps {
  sectionClass?: any
  grid: boolean
  children: ReactNode
}

export const Section = ({ sectionClass, children, grid }: SectionProps) => {
  return (
    <section
      className={`${sectionClass ? sectionClass : ''} section ${
        grid ? 'grid' : ''
      }`}
    >
      {children}
    </section>
  )
}
