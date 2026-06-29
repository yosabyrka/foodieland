import { Image } from 'minista'
import Button from '@/components/Button'
import bgImage from '@/assets/images/backgrounds/learn-more-bg.png'
import './LearnMoreBanner.scss'

export default () => {
  return (
    <section className="learn-more container">
      <div className="learn-more__body">
        <h2 className="learn-more__title">
          Everyone can be a chef in their own kitchen
        </h2>
        <p className="learn-more__description">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <Button href="/" size="md">
          Learn More
        </Button>
      </div>
      <Image src={bgImage} />
    </section>
  )
}
