import { Handbag } from 'phosphor-react'
import { Button } from '../Button'
import { Container } from '../Container'
import { Section } from '../Section'

import s from './Discount.module.scss'
import discountImg from '../../assets/img/discount.png'

export const Discount = () => {
  return (
    <Section grid={false}>
      <Container containerClass={s.discount__container}>
        <div className={s.discount__animate}>
          <h2 className={s.discount__title}>
            Immerse yourself in <br /> your music
          </h2>

          <p className={s.discount__description}>Get it now, up to 50% off.</p>

          <Button>
            <Handbag className="button__icon" />
            Shop now
          </Button>
        </div>

        <img src={discountImg} alt="" className={s.discount__img} />
      </Container>
    </Section>
  )
}
