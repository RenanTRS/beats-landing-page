import { CaretDoubleUp } from 'phosphor-react'
import { useState } from 'react'

import s from './ScrollUp.module.scss'

export const ScrollUp = () => {
  const [isDown, setIsDown] = useState<boolean>(false)

  const showScrollButton = () => {
    const scrollY = window.scrollY

    if (scrollY < 200) {
      setIsDown(false)
      return
    }
    setIsDown(true)
  }

  window.addEventListener('scroll', showScrollButton)
  return (
    <a href="#" className={`${s.scrollup} ${isDown ? s.scrollup__show : ''}`}>
      <CaretDoubleUp className={s.scrollup__icon} />
    </a>
  )
}
