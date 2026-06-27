import clsx from 'clsx'
import './Menu.scss'
import { menuItems } from './menu.items'

export default ({ className }) => {
  return (
    <nav className={clsx('menu', className)}>
      <ul className="menu__list">
        {menuItems.map(({ label, href }) => (
          <li className="menu__item" key={href}>
            <a className="menu__link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
