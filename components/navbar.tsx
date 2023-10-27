import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
    <header>

            <div className='bg-indigo-950'>
                <ul className='flex justify-start space-x-4 px-3 py-2 bg-indigo-900 font-semibold text-gray-100'>
                    <li><Link href={'/'}>Home</Link></li>
                      <li><Link href={'/about'}>About</Link></li>
                      <li><Link href={'/users'}>Users</Link></li>
                     <li><Link href={'/blog'}>Blog</Link></li>
    
                </ul>
   
            </div>
      
    </header>
  )
}
