import { useState } from "react";
import {Product} from "./Product.jsx"

import {HomePage} from "./HomePage.jsx";

export function App(){
  
  const [count, setCount]=useState(1000);

  let handleClick=()=>{
   setCount(count+1000); //2000
  }

  console.log("hiiii")


  return (
    <div>
       <h1 >aman {count}</h1>
       <h2>{count}</h2>
       <p>para</p>
       <button onClick={handleClick}>increase marks</button>

       <Product/>
        <Product/>
         <Product/>
         <Product></Product>

          <HomePage/>
          <HomePage></HomePage>
    </div>
  )
}
export default App;