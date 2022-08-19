import s from './Main.module.scss'
import { Home } from '../Home'
import { Sponsors } from '../Sponsors'
import { Specifications } from '../Specifications'

export const Main = () => {
  return (
    <main className={s.main}>
      <Home />
      <Sponsors />
      <Specifications />
    </main>
  )
}
