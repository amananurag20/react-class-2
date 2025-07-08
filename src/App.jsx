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

console.log({storeData})
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
     {storeData.map((item)=>{
      return <div key={item.id}  style={{width:"300px",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",
        backgroundColor:"red",margin:"5px"
      }} >
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>Price : RS {item.price}</h3>
        <img src={item.image} style={{width:"200px"}}></img>
      </div>
     })}
    </div>
  )
}

export default App
