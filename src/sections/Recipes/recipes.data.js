import recipe1 from '@/assets/images/recipes/1.png'
import recipe2 from '@/assets/images/recipes/2.png'
import recipe3 from '@/assets/images/recipes/3.png'
import recipe4 from '@/assets/images/recipes/4.png'
import recipe5 from '@/assets/images/recipes/5.png'
import recipe7 from '@/assets/images/recipes/7.png'
import recipe8 from '@/assets/images/recipes/8.png'
import recipe9 from '@/assets/images/recipes/9.png'

export const recipes = [
  {
    id: 1,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    imgSrc: recipe1,
    isLiked: true,
    tags: [
      { icon: 'clock', label: '30 Minutes' },
      { icon: 'cutlery', label: 'Snack' },
    ],
  },
  {
    id: 2,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    imgSrc: recipe2,
    isLiked: false,
    tags: [
      { icon: 'clock', label: '30 Minutes' },
      { icon: 'cutlery', label: 'Fish' },
    ],
  },
  {
    id: 3,
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    imgSrc: recipe3,
    isLiked: false,
    tags: [
      { icon: 'clock', label: '30 Minutes' },
      { icon: 'cutlery', label: 'Breakfast' },
    ],
  },
  {
    id: 4,
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    imgSrc: recipe4,
    isLiked: true,
    tags: [
      { icon: 'clock', label: '30 Minutes' },
      { icon: 'cutlery', label: 'Healthy' },
    ],
  },
  {
    id: 5,
    title: 'Chicken Meatballs with Cream Cheese',
    imgSrc: recipe5,
    isLiked: false,
    tags: [
      { icon: 'clock', label: '30 Minutes' },
      { icon: 'cutlery', label: 'Meat' },
    ],
  },
  {
    id: 6,
    isBanner: true,
  },
  {
    id: 7,
    title: 'Fruity Pancake with Orange & Blueberry',
    imgSrc: recipe7,
    isLiked: true,
    tags: [
      { icon: 'clock', label: '30 Minutes' },
      { icon: 'cutlery', label: 'Sweet' },
    ],
  },
  {
    id: 8,
    title: 'The Best Easy One Pot Chicken and Rice',
    imgSrc: recipe8,
    isLiked: false,
    tags: [
      { icon: 'clock', label: '30 Minutes' },
      { icon: 'cutlery', label: 'Snack' },
    ],
  },
  {
    id: 9,
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: recipe9,
    isLiked: false,
    tags: [
      { icon: 'clock', label: '30 Minutes' },
      { icon: 'cutlery', label: 'Noodles' },
    ],
  },
]
