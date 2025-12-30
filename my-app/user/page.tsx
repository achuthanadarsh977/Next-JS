import React from 'react'

interface User{
    name:string;
    id:number;

}

const UserPage = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        {next: {revalidate:10}}
    )
    const users:User[] = await res.json()
    return(
        <main>
            <h1><center><b>Users</b></center></h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </main>
    )
}

export default UserPage
