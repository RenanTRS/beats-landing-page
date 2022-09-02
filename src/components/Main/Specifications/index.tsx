import s from './Specifications.module.scss'

import bluetoothImg from '../../../assets/img/specs/specs-bluetooth.svg'
import batteryImg from '../../../assets/img/specs/specs-battery.svg'
import plugImg from '../../../assets/img/specs/specs-plug.svg'
import microphoneImg from '../../../assets/img/specs/specs-microphone.svg'
import specsImg from '../../../assets/img/specs/specs.png'
import { Section } from '../../Section'
import { Container } from '../../Container'
import { Title } from '../../Title'

import { motion } from 'framer-motion'

export const Specifications = () => {
  const specsData = [
    {
      img: bluetoothImg,
      title: 'Connection',
      description: 'Bluetooth v5.2'
    },
    {
      img: batteryImg,
      title: 'Battery',
      description: 'Duration 40h'
    },
    {
      img: plugImg,
      title: 'Load',
      description: 'Fast charge 4.2-AAC'
    },
    {
      img: microphoneImg,
      title: 'Microphone',
      description: `Supports Apple Siri and Google`
    }
  ]
  return (
    <Section sectionClass={s.specs} grid={true} id={'specs'}>
      <Title>Specs</Title>

      <Container containerClass={s.specs__container}>
        <div className={`${s.specs__content} grid`}>
          {specsData.map((specData) => {
            return (
              <motion.div
                key={specData.title}
                className={s.specs__data}
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: 0.2
                }}
              >
                <img src={specData.img} className={s.specs__icon} alt="" />

                <h3 className={s.specs__title}>{specData.title}</h3>

                <span className={s.specs__subtitle}>
                  {specData.description}
                </span>
              </motion.div>
            )
          })}
        </div>

        <div>
          <motion.img
            src={specsImg}
            alt=""
            className={s.specs__img}
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.2
            }}
          />
        </div>
      </Container>
    </Section>
  )
}
