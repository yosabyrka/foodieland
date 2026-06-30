import clsx from 'clsx'
import { Image } from 'minista'
import Tags from '@/components/Tags'
import likedIcon from '@/assets/icons/liked.svg'
import unlikedIcon from '@/assets/icons/unliked.svg'
import './RecipeCard.scss'

export default ({ mode, title, imgSrc, isLiked, tags }) => {
  return (
    <article className={clsx('recipe-card', `recipe-card--${mode}`)}>
      <div className="recipe-card__image-wrapper">
        <Image
          className="recipe-card__liked-icon"
          src={isLiked ? likedIcon : unlikedIcon}
        />
        <Image className="recipe-card__image" src={imgSrc} />
      </div>
      <div className="recipe-card__body">
        <h3 className="recipe-card__title h5">{title}</h3>
        <Tags tags={tags} mode="transparent" />
      </div>
    </article>
  )
}
