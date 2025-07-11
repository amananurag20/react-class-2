import React, { useState } from 'react'
import Mobile from './Mobile'
import Rating from './Rating'

const Product = (props) => {
  console.log({props})

    const [count, setCount]= useState(1000)
  return (
    <div>
      <Mobile/>
      <Rating count={count} setCount={setCount}/>
    </div>
  )
}

export default Product
