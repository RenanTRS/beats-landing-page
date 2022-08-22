import s from './Sponsor.module.scss'

import amazonImg from '../../assets/img/sponsors/amazon.svg'
import appleImg from '../../assets/img/sponsors/apple.svg'
import spotfyImg from '../../assets/img/sponsors/spotfy.svg'
import youtubeImg from '../../assets/img/sponsors/youtube.svg'
import { Section } from '../Section'
import { Container } from '../Container'

export const Sponsors = () => {
  const sponsors = [amazonImg, appleImg, spotfyImg, youtubeImg]

  return (
    <Section grid={false}>
      <Container containerClass={s.sponsor__container}>
        {sponsors.map((sponsor, key) => {
          return (
            <img src={sponsor} alt="" key={key} className={s.sponsor__img} />
          )
        })}
      </Container>
    </Section>
  )
}
