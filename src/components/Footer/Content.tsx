import s from './Footer.module.scss'
import { motion } from 'framer-motion'

interface ContentProps {
  title: string
  content: string[]
}

const Products = ({ title, content }: ContentProps) => {
  return (
    <motion.div
      className={s.footer__content}
      initial={{ y: -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: 0.2
      }}
    >
      <h3 className={s.footer__title}>{title}</h3>

      <ul className={s.footer__links}>
        {content.map((product, key) => {
          return (
            <li key={key}>
              <a href="#" className={s.footer__link}>
                {product}
              </a>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

const Support = ({ title, content }: ContentProps) => {
  return (
    <motion.div
      className={s.footer__content}
      initial={{ y: -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: 0.2
      }}
    >
      <h3 className={s.footer__title}>{title}</h3>

      <ul className={s.footer__links}>
        {content.map((suport, key) => {
          return (
            <li key={key}>
              <a href="#" className={s.footer__link}>
                {suport}
              </a>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

export const Content = { Products, Support }
