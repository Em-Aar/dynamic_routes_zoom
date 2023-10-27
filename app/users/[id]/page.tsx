import React from 'react'
import { Users } from '../page'



type Params = {
    params:{
        id:string
    }

}
export default async function User_data({params}:Params) {
    const user_id = parseInt(params.id)
    const users = await Users()
    const user = users.find((user:any)=>user?.id===user_id)

  

  return (
    <div className='px-3 py-3'>
      <ul className='px-4 py-4'>
        <li key={user.id}>
            <p>User Name: {user.name}</p>
            <p>User username: {user.username}</p>
            <p>User Email: {user.email}</p>
            <p>User Phone: {user.phone}</p>
        </li>
      </ul>
    </div>
  )
}
