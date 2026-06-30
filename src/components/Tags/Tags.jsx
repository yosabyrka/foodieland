import clsx from 'clsx'
import Icon from '@/components/Icon'
import './Tags.scss'

export default ({ tags, mode }) => {
  return (
    <div className={clsx('tags', `tags--${mode}`)}>
      <ul className="tags__list">
        {tags.map(({ icon, label }) => (
          <li className="tags__item" key={label}>
            <Icon className="tags__icon" name={icon} hasFill />
            <span className="tags__label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
