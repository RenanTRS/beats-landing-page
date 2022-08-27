import { useState } from 'react'
import classNames from 'classnames'

import { Link } from 'react-scroll'

import s from './Header.module.scss'
import { X, SquaresFour } from 'phosphor-react'
import logoImg from '../../assets/img/logo.svg'

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)

  const items = ['Home', 'Specs', 'Case', 'Products']

  const handlerMenu = (value: boolean) => {
    setIsShowMenu(value)
  }

  const scrollHeaderY = () => {
    const y = window.scrollY

    if (y < 50) {
      setIsScrollDown(false)
    } else {
      setIsScrollDown(true)
    }
  }
  window.addEventListener('scroll', scrollHeaderY)

  return (
    <header
      className={`${s.header} ${isScrollDown ? s.scrollHeader : ''}`}
      id="header"
    >
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
                <li className="nave__item" key={item}>
                  <Link
                    to={`${item.toLowerCase()}`}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={s.link}
                    onClick={() => handlerMenu(false)}
                  >
                    {item}
                  </Link>
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
