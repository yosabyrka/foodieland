import './Footer.scss'
import Menu from '@/components/Menu'
import Logo from '@/components/Logo'
import Socials from '@/components/Socials'

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__main">
          <div className="footer__info">
            <Logo className="footer__logo" />
            <p className="footer__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <Menu className="footer__menu" mode="footer" />
        </div>
        <div className="footer__extra">
          <div className="footer__copyright">
            © 2026 Sabyrzhan Zhaslanuly. All rights reserved.
          </div>
          <Socials className="footer__socials" />
        </div>
      </div>
    </footer>
  )
}
