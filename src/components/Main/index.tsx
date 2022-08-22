import s from './Main.module.scss'
import { Home } from '../Home'
import { Sponsors } from '../Sponsors'
import { Specifications } from '../Specifications'
import { Case } from '../Case'
import { Discount } from '../Discount'

export const Main = () => {
  return (
    <main className={s.main}>
      <Home />
      <Sponsors />
      <Specifications />
      <Case />
      <Discount />
    </main>
  )
}
