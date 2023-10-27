import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <ul>
   
      <li><Link href={'/users'}>Users</Link></li>

    </ul>
 
  )
}
