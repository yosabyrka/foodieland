import clsx from 'clsx'
import Button from '@/components/Button'
import Grid from '@/components/Grid'
import CategoryCard from '@/components/CategoryCard'
import { categories } from './categories.data'
import './Categories.scss'

export default ({ className }) => {
  return (
    <section
      className={clsx('categories container', className)}
      aria-labelledby="categories-title"
    >
      <header className="categories__header">
        <h2 className="categories__title" id="categories-title">
          Categories
        </h2>
        <Button className="categories__button" size="lg" mode="cyan" href="/">
          View All Categories
        </Button>
      </header>
      <div className="categories__body">
        <Grid columns={6}>
          {categories.map((category) => (
            <CategoryCard {...category} key={category.title} />
          ))}
        </Grid>
      </div>
    </section>
  )
}
