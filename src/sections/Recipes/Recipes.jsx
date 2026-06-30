import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import RecipeCard from '@/components/RecipeCard'
import PromoBanner from '@/components/PromoBanner'
import { recipes } from './recipes.data'
import './Recipes.scss'

export default () => {
  return (
    <Section
      className="recipes"
      title="Simple and tasty recipes"
      titleId="recipes-title"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
    >
      <Grid columns={3}>
        {recipes.map(({ id, isBanner, ...recipe }) =>
          isBanner ? (
            <PromoBanner key={id} />
          ) : (
            <RecipeCard key={id} {...recipe} />
          )
        )}
      </Grid>
    </Section>
  )
}
