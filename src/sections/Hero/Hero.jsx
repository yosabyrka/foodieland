import Slider from '@/components/Slider'
import './Hero.scss'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        Foodieland
      </h1>
      <Slider />
    </section>
  )
}
