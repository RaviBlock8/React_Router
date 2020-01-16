//This module is ignored


import React,{useState,useEffect} from 'react';
import './styles/nav.css'



function Shop() {

    
   
    
    let [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(users=data)
        })
    })
    const user_elemnt=users.map((user)=>{
        return (
            <div key={user.id} className="container" >
                
                    <p><strong>Name:</strong>{user.name}</p>
                    <p><strong>Username:</strong>{user.username}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                
            </div>
        )
        })
  return (
      <div>
          <h1>Shop</h1>
          {user_elemnt}
      </div>
    
        
  );
}

export default Shop;
