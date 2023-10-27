import Link from 'next/link'
import React from 'react'

export async function Users (){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!data.ok) throw new Error ('User data not found')
    return data.json()
}

export default async function All_users() {
    const users = await Users()



  return (
    <div className='px-2'>
      <h1>All Users</h1>
      <br />
      <ul className='px-4'>
        {users.map((user:any)=>{
            return <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
                
                </li>
        })}
      </ul>
    </div>
  )
}
