import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import Recipes from '@/sections/Recipes'
import LearnMoreBanner from '@/sections/LearnMore'
import InstagramFeed from '@/sections/InstagramFeed'
import SubscribeCard from '@/sections/SubscribeCard'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <LearnMoreBanner />
      <InstagramFeed />
      {/* MoreRecipes */}
      <SubscribeCard />
    </>
  )
}
