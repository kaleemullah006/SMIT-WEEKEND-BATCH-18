
import { useEffect } from 'react'
import './App.css'

function App() {
//  useEffect(()=>{
//   fetch("http://localhost:5000/api/products")
//   .then((res)=>res.json())
//   .then((data)=>{
//     console.log(data)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
//  },[])


useEffect(()=>{
//   fetch("http://localhost:5000/api/products")
//   .then((res)=>res.json())
//   .then((data)=>{
//     console.log(data)
//   })
//  .catch((error)=>{
//   console.log(error)
//  })

async function getData(){
  const res = await fetch("http://localhost:5000/api/products")
   const data = await res.json()
   console.log(data)
}

getData()
},[])


  return (
    <>
      <h1 className="bg-green-400 font-bold items-center flex justify-center rounded-3xl py-2">Frontend</h1>

    </>
  )
}

export default App
