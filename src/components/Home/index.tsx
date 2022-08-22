import homeImg from '../../assets/img/home.png'
import s from './Home.module.scss'

import { Handbag } from 'phosphor-react'
import { Button } from '../Button'
import { Container } from '../Container'

export const Home = () => {
  return (
    <section className={`section`}>
      <Container containerClass={s.home__container}>
        <div>
          <img src={homeImg} alt="" className={s.home__img} />
        </div>

        <div className={s.home__data}>
          <div className={s.home__header}>
            <h1 className={s.home__title}>On ear</h1>

            <h2 className={s.home__subtitle}>Beats 3</h2>
          </div>

          <div className={s.home__footer}>
            <h3 className={s.home__title_description}>Overview</h3>

            <p className={s.home__description}>
              Enjoin award-winning Beats sound with wireless listening freedom
              and a sleek, streamlined design with comfortable padded earphones,
              delivering first-rate playback.
            </p>

            <Button>
              <span className={`button__flex button__icon`}>
                <Handbag /> Add to Bag
              </span>

              <span className={s.home__price}>$299</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
