import s from './Sponsor.module.scss'

import { motion } from 'framer-motion'

import amazonImg from '../../../assets/img/sponsors/amazon.svg'
import appleImg from '../../../assets/img/sponsors/apple.svg'
import spotfyImg from '../../../assets/img/sponsors/spotfy.svg'
import youtubeImg from '../../../assets/img/sponsors/youtube.svg'
import { Section } from '../../Section'
import { Container } from '../../Container'

export const Sponsors = () => {
  const sponsors = [appleImg, spotfyImg, amazonImg, youtubeImg]

  return (
    <Section grid={false}>
      <Container containerClass={s.sponsor__container}>
        {sponsors.map((sponsor, key) => {
          return (
            <motion.img
              src={sponsor}
              alt=""
              key={key}
              className={s.sponsor__img}
              initial={{ y: -60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.2
              }}
            />
          )
        })}
      </Container>
    </Section>
  )
}
