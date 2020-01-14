import React,{useState,useEffect} from 'react';
import './styles/nav.css'



function Shop() {

    
   
    const fetchData=async ()=>{
        const data=await fetch('https://jsonplaceholder.typicode.com/users')
        items=await data.json()
        // console.log(items)
        
    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
      <div>
          {/* {items.map((item)=>{
          return(<h1 key={item.id}>{item.name}</h1>)
          })} */}
      </div>
    
        
  );
}

export default Shop;
