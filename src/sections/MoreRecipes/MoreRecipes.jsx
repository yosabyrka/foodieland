import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import RecipeCard from '@/components/RecipeCard'
import { moreRecipes } from './more-recipes.data'

export default () => {
  return (
    <Section
      title="Try this delicious recipe to make your day"
      titleId="more-recipes-title"
      titleMode="justify-between"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
    >
      <Grid columns={4}>
        {moreRecipes.map(({ id, ...recipe }) => (
          <RecipeCard key={id} mode="alt" {...recipe} />
        ))}
      </Grid>
    </Section>
  )
}
