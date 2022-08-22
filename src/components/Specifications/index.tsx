import s from './Specifications.module.scss'

import bluetoothImg from '../../assets/img/specs/specs-bluetooth.svg'
import batteryImg from '../../assets/img/specs/specs-battery.svg'
import plugImg from '../../assets/img/specs/specs-plug.svg'
import microphoneImg from '../../assets/img/specs/specs-microphone.svg'
import specsImg from '../../assets/img/specs/specs.png'
import { Section } from '../Section'
import { Container } from '../Container'
import { Title } from '../Title'

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
    <Section sectionClass={s.specs} grid={true}>
      {/* <h2 className="section__title section__title-gradient">Specs</h2> */}
      <Title>Specs</Title>

      <Container containerClass={s.specs__container}>
        <div className={`${s.specs__content} grid`}>
          {specsData.map((specData) => {
            return (
              <div key={specData.title} className={s.specs__data}>
                <img src={specData.img} className={s.specs__icon} alt="" />

                <h3 className={s.specs__title}>{specData.title}</h3>

                <span className={s.specs__subtitle}>
                  {specData.description}
                </span>
              </div>
            )
          })}
        </div>

        <div>
          <img src={specsImg} alt="" className={s.specs__img} />
        </div>
      </Container>
    </Section>
  )
}
