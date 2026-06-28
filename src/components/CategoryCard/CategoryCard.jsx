import { Image } from 'minista'
import './CategoryCard.scss'

export default ({ title, imgSrc, color }) => {
  return (
    <article className="category-card">
      <div
        className="category-card__body"
        style={{ '--categoryCardColor': color }}
      >
        <div
          className="category-card__image-wrapper"
          style={{ '--categoryCardImage': `url('${imgSrc}')` }}
        >
          <Image className="category-card__image" src={imgSrc} />
        </div>
        <h3 className="category-card__title">{title}</h3>
      </div>
    </article>
  )
}
