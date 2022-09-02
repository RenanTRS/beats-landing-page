import s from './Case.module.scss'

import { motion } from 'framer-motion'

import caseImg from '../../../assets/img/case.png'

import { Button } from '../../Button'
import { Info } from 'phosphor-react'
import { Section } from '../../Section'
import { Container } from '../../Container'
import { Title } from '../../Title'

export const Case = () => {
  return (
    <Section grid={true} id="case">
      <Title>Case</Title>

      <Container containerClass={s.case__container}>
        <div>
          <motion.img
            src={caseImg}
            className={s.case__img}
            alt=""
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.2
            }}
          />
        </div>

        <motion.div
          className={s.case__data}
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.2
          }}
        >
          <p className={s.case__description}>
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durabillity forever.
          </p>

          <Button.LinkButton>
            <Info />
            More info
          </Button.LinkButton>
        </motion.div>
      </Container>
    </Section>
  )
}
