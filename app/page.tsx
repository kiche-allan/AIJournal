import Link from 'next/link'
import React from 'react'
import { auth } from '@clerk/nextjs'

export default async function page() {
  const {userId} =  await auth()

  let href = userId ? '/journal' : '/new-user'

  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
      <div className='w-full max-w-[600px] mx-auto'>
        <h1 className='text-6xl'>The best Journal App</h1>
        <p className='text-2xl text-white/60'> This is the best app to track your mood throughout your life. All you have to do is to be honest</p>
        <div>
          <Link href ={href}>
          <button className='bg-blue-600 p-4 rounded-lg text-xl'>Get Started</button></Link>
        </div>
      </div>
    </div>
    

  )
}
