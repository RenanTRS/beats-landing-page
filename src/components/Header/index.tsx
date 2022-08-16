import { useState } from 'react'
import classNames from 'classnames'

import s from './Header.module.scss'
import { X, SquaresFour } from 'phosphor-react'
import logoImg from '../../assets/img/logo.svg'

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false)

  const items = ['Home', 'Specs', 'Case', 'Products']

  const handlerMenu = (value: boolean) => {
    setIsShowMenu(value)
  }

  return (
    <header className={s.header} id="header">
      <nav className={`container ${s.nav}`}>
        <a href="#" className={s.logo}>
          <img src={logoImg} alt="" />
        </a>

        <div
          className={classNames(s.menu, {
            [s.showmenu]: isShowMenu
          })}
          id="nav-menu"
        >
          <ul className={s.list}>
            {items.map((item) => {
              return (
                <li className="nave__item">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={s.link}
                    onClick={() => handlerMenu(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className={s.close} onClick={() => handlerMenu(false)}>
            <X />
          </div>
        </div>

        <div className={s.toggle} onClick={() => handlerMenu(true)}>
          <SquaresFour />
        </div>
      </nav>
    </header>
  )
}
