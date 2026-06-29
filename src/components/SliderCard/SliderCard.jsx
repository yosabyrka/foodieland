import { Image } from 'minista'
import Category from '@/components/SlideCardCategory'
import Tags from '@/components/Tags'
import AuthorCard from '@/components/AuthorCard'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import './SliderCard.scss'

export default ({
  category,
  title,
  description,
  tags,
  author,
  badgeImgSrc,
  slideImgSrc,
}) => {
  return (
    <div className="slider-card">
      <div className="slider-card__body">
        <div className="slider-card__main">
          <Category {...category} />
          <h2 className="slider-card__title h1">{title}</h2>
          <p className="slider-card__description">{description}</p>
          <Tags tags={tags} />
        </div>
        <div className="slider-card__extra">
          <AuthorCard {...author} />
          <Button href="/" size="lg">
            <span>View Recipes</span>
            <Icon name="play" hasFill />
          </Button>
        </div>
      </div>
      <Image className="slider-card__badge" src={badgeImgSrc} />
      <Image className="slider-card__image" src={slideImgSrc} />
    </div>
  )
}
