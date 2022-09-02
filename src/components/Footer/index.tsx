import { Container } from '../Container'
import s from './Footer.module.scss'

import logoImg from '../../assets/img/logo.svg'
import { PaperPlaneTilt } from 'phosphor-react'
import { Button } from '../Button'
import { FooterSocial } from './FooterSocial'
import { Content } from './Content'

import { motion } from 'framer-motion'

export const Footer = () => {
  const products = ['Headphones', 'Earphones', 'Earbuds', 'Accesories']

  const suports = ['Product help', 'Register', 'Updates', 'Provides']

  return (
    <footer className={`${s.footer} section`}>
      <Container containerClass={s.footer__container}>
        <motion.a
          href="#"
          className={s.footer__logo}
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.2
          }}
        >
          <img src={logoImg} alt="" className={s.footer__img} />
        </motion.a>

        <Content.Products title={'Products'} content={products} />

        <Content.Support title={'Suport'} content={suports} />

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
        </motion.div>
      </Container>

      <motion.p
        className={s.footer__copy}
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          delay: 0.2
        }}
      >
        <a
          href="https://www.youtube.com/c/Bedimcode/"
          target="_blank"
          className={s.footer__copy_link}
        >
          &#169; Bedimcode. All right reserved
        </a>
      </motion.p>
    </footer>
  )
}
