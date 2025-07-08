import { useEffect, useState } from "react";
import Mobile from "./components/Mobile.jsx"

const App = () => {

  const [storeData, setStoreData]=useState([]);
  const [count, setCount]=useState(0);

  const fetchData=async()=>{
    
    const response= await fetch("https://fakestoreapi.com/products");

    const data= await response.json();
  
    setStoreData(data)

  }

  useEffect(()=>{
    fetchData()
  },[])

console.log(storeData)
  return (
    <div>
      <Mobile name={"vivo-t4-5g"} price={14000}
     />
      <Mobile name={"samsung-5g"} price={21000}/>
    </div>
  )
}

export default App
