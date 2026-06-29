import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import SubscribeCard from '@/sections/SubscribeCard'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <SubscribeCard />
    </>
  )
}
