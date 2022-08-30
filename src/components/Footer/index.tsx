import { Container } from '../Container'
import s from './Footer.module.scss'

import logoImg from '../../assets/img/logo.svg'
import { PaperPlaneTilt } from 'phosphor-react'
import { Button } from '../Button'
import { FooterSocial } from './FooterSocial'
import { Content } from './Content'

export const Footer = () => {
  const products = ['Headphones', 'Earphones', 'Earbuds', 'Accesories']

  const suports = ['Product help', 'Register', 'Updates', 'Provides']

  return (
    <footer className={`${s.footer} section`}>
      <Container containerClass={s.footer__container}>
        <a href="#" className={s.footer__logo}>
          <img src={logoImg} alt="" className={s.footer__img} />
        </a>

        <Content.Products title={'Products'} content={products} />

        <Content.Support title={'Suport'} content={suports} />

        <div className={s.footer__content}>
          <form action="" className={s.footer__form}>
            <input
              type="email"
              className={s.footer__input}
              placeholder="Email"
            />

            <Button.NormalButton>
              <PaperPlaneTilt className={'button__icon'} />
              Subscribe
            </Button.NormalButton>
          </form>

          <FooterSocial />
        </div>
      </Container>

      <p className={s.footer__copy}>
        <a
          href="https://www.youtube.com/c/Bedimcode/"
          target="_blank"
          className={s.footer__copy_link}
        >
          &#169; Bedimcode. All right reserved
        </a>
      </p>
    </footer>
  )
}
