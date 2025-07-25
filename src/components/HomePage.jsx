import { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../store/cartSlice";


const HomePage = () => {
  const [count, setCount]=useState(1000);
  
  const dispatch= useDispatch();
  
  const handleStoreData=()=>{
     
    dispatch(addToCart("sensation"))

  }

  const handleClearCart=()=>{
    dispatch(clearCart())
  }


  return (
    <div >
      <img src='https://homepageonline.co.uk/wp-content/uploads/2018/11/click-homepage-online-estate-agents-ni-limavady-derry-londonderry-property-sales-logo.jpg'></img>
      <h1>Count :{count}</h1>

      <button onClick={handleStoreData}>Store data in redux</button>

      <button onClick={()=>{setCount(count+1000)}}>Click me</button>

      <button onClick={handleClearCart}>Clear cart</button>
      <Header></Header>
      
      <Product name={"aman"} >amananurag</Product>
    </div>
  )
}

export default HomePage
