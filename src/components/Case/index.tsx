import s from './Case.module.scss'

import caseImg from '../../assets/img/case.png'

import { Button } from '../Button'
import { Info } from 'phosphor-react'
import { Section } from '../Section'
import { Container } from '../Container'
import { Title } from '../Title'

export const Case = () => {
  return (
    <Section grid={true}>
      {/* <h2 className="section__title section__title-gradient">Case</h2> */}
      <Title>Case</Title>

      <Container containerClass={s.case__container}>
        <div>
          <img src={caseImg} className={s.case__img} alt="" />
        </div>

        <div className={s.case__data}>
          <p className={s.case__description}>
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durabillity forever.
          </p>

          <Button>
            <Info />
            More info
          </Button>
        </div>
      </Container>

      {/* <div className={`${s.case__container} container grid`}>
        <div>
          <img src={caseImg} className={s.case__img} alt="" />
        </div>

        <div className={s.case__data}>
          <p className={s.case__description}></p>

          <Button>
            <Info />
            More info
          </Button>
        </div>
      </div> */}
    </Section>
  )
}
