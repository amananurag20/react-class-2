
const Mobile = ({name, price=30000}) => {
   
  return (
    <div>
      <h3>{name}</h3>
      <h4>Price: RS {price}</h4>
      <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70" alt="mobile-img"
      style={{width:"200px"}}></img>
    </div>
  )
}

export default Mobile
