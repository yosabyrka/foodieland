import clsx from 'clsx'
import SliderCard from '@/components/SliderCard'
import { sliderConfig, slides } from './slider.data'
import './Slider.scss'

export default ({ className }) => {
  return (
    <article
      className={clsx('slider swiper', className)}
      data-js-slider={sliderConfig}
    >
      <ul className="slider__list swiper-wrapper">
        {slides.map(({ id, ...slide }) => (
          <li className="slider__item swiper-slide" key={id}>
            <SliderCard {...slide} />
          </li>
        ))}
      </ul>
    </article>
  )
}
