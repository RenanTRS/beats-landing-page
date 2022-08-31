import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface TitleProps {
  titleStyle?: any
  children: ReactNode
}

export const Title = ({ titleStyle, children }: TitleProps) => {
  return (
    <motion.h2
      className={`section__title section__title-gradient ${
        titleStyle ? titleStyle : ''
      } `}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      {children}
    </motion.h2>
  )
}
