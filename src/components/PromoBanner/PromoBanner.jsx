import { Image } from 'minista'
import title from '@/assets/images/promo-banner-title.svg'
import dishImage from '@/assets/images/dish.png'
import './PromoBanner.scss'

export default () => {
  return (
    <article className="promo-banner">
      <h3 className="promo-banner__title">
        <Image src={title} />
      </h3>
      <Image className="promo-banner__image" src={dishImage} />
      <a className="promo-banner__link" href="/">
        www.foodieland.com
      </a>
    </article>
  )
}
