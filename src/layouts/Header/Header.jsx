import './Header.scss'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Socials from '@/components/Socials'
import BurgerButton from '@/components/BurgerButton'

export default () => {
  return (
    <header className="header" data-js-mobile-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <Menu
          className="header__menu"
          mode="mobile-overlay"
          extraAttrs={{ 'data-js-mobile-menu-overlay': '' }}
        />
        <Socials className="header__socials" />
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{ 'data-js-mobile-menu-burger-button': '' }}
        />
      </div>
    </header>
  )
}
