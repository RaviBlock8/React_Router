import React, { Component } from 'react'

class ShopC extends Component {
    constructor(){
        super();
        this.state={users:[]}
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then((data)=>{console.log(data)
            this.setState({users:data})
            console.log('state updated')
        })
    }

    
    render() {
        const user_elemnt=this.state.users.map((user)=>{
        return (
            <div key={user.id} className="container" style={cstyle}>
                
                    <p><strong>Name:</strong>{user.name}</p>
                    <p><strong>Username:</strong>{user.username}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                
            </div>
        )
        })
        return (
            <div style={SCstyle}>

                <h1>Users List</h1>
                {user_elemnt}
                
            </div>
        )
    }
}

const SCstyle={
    padding:'1rem'
}

const cstyle={
    background:'#ebedeb',
    padding:'1rem',
    marginBottom:'10px'
}

export default ShopC
