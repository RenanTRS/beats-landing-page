import s from './Sponsor.module.scss'

import amazonImg from '../../assets/img/sponsors/amazon.svg'
import appleImg from '../../assets/img/sponsors/apple.svg'
import spotfyImg from '../../assets/img/sponsors/spotfy.svg'
import youtubeImg from '../../assets/img/sponsors/youtube.svg'

export const Sponsors = () => {
  const sponsors = [amazonImg, appleImg, spotfyImg, youtubeImg]

  return (
    <section className={`${s.sponsor} section`}>
      <div className={`${s.sponsor__container} container grid`}>
        {sponsors.map((sponsor, key) => {
          return (
            <img src={sponsor} alt="" key={key} className={s.sponsor__img} />
          )
        })}
      </div>
    </section>
  )
}
