import clsx from 'clsx'
import Icon from '@/components/Icon'
import { socialItems } from './socials.data'
import './Socials.scss'

export default ({ className }) => {
  return (
    <div className={clsx('soc1als', className)}>
      <ul className="soc1als__list">
        {socialItems.map(({ label, icon }) => (
          <li className="soc1als__item" key={label}>
            <a className="soc1als__link" href="/">
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
