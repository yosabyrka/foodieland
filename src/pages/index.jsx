import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import LearnMoreBanner from '../sections/LearnMoreBanner'
import SubscribeCard from '@/sections/SubscribeCard'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <LearnMoreBanner />
      <SubscribeCard />
    </>
  )
}
