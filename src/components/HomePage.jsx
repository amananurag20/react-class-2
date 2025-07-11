import { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import Rating from "./Rating";


const HomePage = () => {
  const [count, setCount]=useState(1000);

  console.log("homepage")
  return (
    <div >
      <img src='https://homepageonline.co.uk/wp-content/uploads/2018/11/click-homepage-online-estate-agents-ni-limavady-derry-londonderry-property-sales-logo.jpg'></img>
      <h1>Count :{count}</h1>

      <button onClick={()=>{setCount(count+1000)}}>Click me</button>
      <Header></Header>
      
      <Product name={"aman"} >amananurag</Product>
    </div>
  )
}

export default HomePage
