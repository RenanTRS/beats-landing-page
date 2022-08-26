import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

import s from './Footer.module.scss'

export const FooterSocial = () => {
  return (
    <div className={s.footer__social}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={s.footer__social_link}
      >
        <FacebookLogo />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className={s.footer__social_link}
      >
        <InstagramLogo />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        className={s.footer__social_link}
      >
        <TwitterLogo />
      </a>
    </div>
  )
}
