import Icon from '@/components/Icon'
import './Tags.scss'

export default ({ tags }) => {
  return (
    <div className="tags">
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
