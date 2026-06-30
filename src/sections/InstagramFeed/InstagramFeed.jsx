import { Image } from 'minista'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Grid from '@/components/Grid'
import { posts } from './instagram-feed.data'
import './InstagramFeed.scss'

export default () => {
  return (
    <section className="instagram-feed">
      <div className="instagram-feed__inner">
        <header className="instagram-feed__header">
          <h2 className="instagram-feed__title" id="instagram-view-title">
            Check out @foodieland on Instagram
          </h2>
          <div className="instagram-feed__description">
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
        </header>
        <div className="instagram-feed__body">
          <Grid columns={4}>
            {posts.map((post) => (
              <Image className="instagram-feed__image" src={post} key={post} />
            ))}
          </Grid>
          <Button className="instagram-feed__button">
            <span>Visit Our Instagram</span>
            <Icon name="instagram" hasFill />
          </Button>
        </div>
      </div>
    </section>
  )
}
