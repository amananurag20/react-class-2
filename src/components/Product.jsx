
import Mobile from './Mobile'

import { useParams } from 'react-router-dom'

const Product = () => {
  const data= useParams();
  console.log(data)
  return (
    <div>
      <Mobile/>    
    </div>
  )
}

export default Product
