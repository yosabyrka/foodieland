import Button from '@/components/Button'
import './SubscribeCard.scss'

export default () => {
  return (
    <section
      className="subscribe-card container"
      aria-labelledby="subscribe-card-title"
    >
      <h2 className="subscribe-card__title" id="subscribe-card-title">
        Deliciousness to your inbox
      </h2>
      <div className="subscribe-card__description">
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <form className="subscribe-card__form">
        <label className="visually-hidden" htmlFor="email">
          Email
        </label>
        <input
          className="subscribe-card__input"
          id="email"
          name="email"
          type="email"
          placeholder="Your email address..."
          required
        />
        <Button className="subscribe-card__button" type="submit">
          Subscribe
        </Button>
      </form>
    </section>
  )
}
