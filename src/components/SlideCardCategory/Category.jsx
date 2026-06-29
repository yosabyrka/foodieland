import { Image } from 'minista'
import './Category.scss'

export default ({ imgSrc, label }) => {
  return (
    <div className="category">
      <Image src={imgSrc} />
      <span>{label}</span>
    </div>
  )
}
