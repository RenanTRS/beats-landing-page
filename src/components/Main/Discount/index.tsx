import { Handbag } from 'phosphor-react'
import { Button } from '../../Button'
import { Container } from '../../Container'
import { Section } from '../../Section'

import { motion } from 'framer-motion'

import s from './Discount.module.scss'
import discountImg from '../../../assets/img/discount.png'

export const Discount = () => {
  return (
    <Section grid={false}>
      <Container containerClass={s.discount__container}>
        <motion.div
          className={s.discount__animate}
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.2
          }}
        >
          <h2 className={s.discount__title}>
            Immerse yourself in <br /> your music
          </h2>

          <p className={s.discount__description}>Get it now, up to 50% off.</p>

          <Button.LinkButton>
            <Handbag className="button__icon" />
            Shop now
          </Button.LinkButton>
        </motion.div>

        <motion.img
          src={discountImg}
          alt=""
          className={s.discount__img}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.2
          }}
        />
      </Container>
    </Section>
  )
}
