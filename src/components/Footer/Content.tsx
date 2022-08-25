import s from './Footer.module.scss'

interface ContentProps {
  title: string
  content: string[]
}

const Products = ({ title, content }: ContentProps) => {
  return (
    <div className={s.footer__content}>
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
    </div>
  )
}

const Support = ({ title, content }: ContentProps) => {
  return (
    <div className={s.footer__content}>
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
    </div>
  )
}

export const Content = { Products, Support }
