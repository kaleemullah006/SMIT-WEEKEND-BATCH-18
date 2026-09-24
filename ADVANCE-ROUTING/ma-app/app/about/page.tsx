"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import ProductCard from '../components/productCard'


function About() {
     const route = useRouter()
  return (<>

    <div>About</div>
    <button className='bg-green-600 px-4 py-2 ' onClick={()=> route.push("/dashboard")}>Go To Dashboard</button>

  <ProductCard title="laptop" />
  </>
  )
}

export default About