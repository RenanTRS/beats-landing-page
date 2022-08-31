import homeImg from '../../../assets/img/home.png'
import s from './Home.module.scss'

import { motion } from 'framer-motion'

import { Handbag } from 'phosphor-react'
import { Button } from '../../Button'
import { Container } from '../../Container'

export const Home = () => {
  return (
    <section className={`section`} id="home">
      <Container containerClass={s.home__container}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
        >
          <img src={homeImg} alt="" className={s.home__img} />
        </motion.div>

        <div className={s.home__data}>
          <motion.div
            className={s.home__header}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
          >
            <h1 className={s.home__title}>On ear</h1>

            <h2 className={s.home__subtitle}>Beats 3</h2>
          </motion.div>

          <motion.div
            className={s.home__footer}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          >
            <h3 className={s.home__title_description}>Overview</h3>

            <p className={s.home__description}>
              Enjoin award-winning Beats sound with wireless listening freedom
              and a sleek, streamlined design with comfortable padded earphones,
              delivering first-rate playback.
            </p>

            <Button.LinkButton>
              <span className={`button__flex button__icon`}>
                <Handbag /> Add to Bag
              </span>

              <span className={s.home__price}>$299</span>
            </Button.LinkButton>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
