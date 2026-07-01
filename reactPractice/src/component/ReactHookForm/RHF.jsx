// import {useForm} from "react-hook-form"
// import { useState } from "react"



// function RHF() {
// const {register, handleSubmit} = useForm()
// const [submitedData, setSubmitedData] = useState(null)
// const onSubmit = (data)=>{
//     console.log(data)
//     setSubmitedData(data)
// }

//   return (<>
  
//   <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6">

//     <input {...register ("name")} placeholder="Naam Likhen"
//     className="border-2 border-blue-400 rounded-3xl px-4 py-2" />

//     <input {...register("email")}
//     placeholder="Email Likhen"
//     className="border-2 border-blue-400 rounded-3xl px-4 py-2"/>

//     <button type="submit" className="bg-blue-400 px-4 py-2 rounded-3xl"> Submit</button>



//   </form>
//   {
//     submitedData && (
//         <div className="mt-6 bg-gray-800 text-white p-4 rounded-3xl flex justify-center flex-col items-center gap-2">
//             <h2 className="text-xl font-bold mb-2">SubmittedData:</h2>
//             <p>Naam: {submitedData.name}</p>
//             <p>Email: {submitedData.email}</p>
//         </div>
//     )
//   }

  
  
  
  
//   </>

//   )
// }

// export default RHF

import {useForm} from "react-hook-form"
import { useState } from "react"
import schema from "./Zod/ZodValidation"
import {zodResolver} from "@hookform/resolvers/zod"



function RHF() {
  const [submittedData, setSubmittedData] = useState()
  const {register, handleSubmit , formState:{errors}} = useForm({
        resolver:zodResolver(schema)})

    const onSubmit = (data)=>{
        console.log(data)
        setSubmittedData(data)
    }

  return (<>

  <form onSubmit={handleSubmit(onSubmit)}
  className=" min-h-screen flex flex-col justify-center items-center
  bg-gray-900
  ">
  <h1 className="rounded-3xl px-4 py-2 mb-6 w-60 text-white flex justify-center items-center border-2 font-bold border-white bg-red-800">SUBMISSION FORM</h1>
   <input {...register("firstName")}
   placeholder="FirstName...." 
   className="border-2 rounded-3xl px-4 py-2 m-1 border-white placeholder:text-white text-white "
   />
    {errors.firstName && (
          <p className="text-red-400 text-sm px-2">{errors.firstName.message}</p>
        )}
  
   <input {...register("secondName")}
   placeholder="secondName...." 
   className="border-2 rounded-3xl px-4 py-2 m-1 border-white placeholder:text-white text-white "
   />
   <input {...register("email")}
   placeholder="email...." 
   className="border-2 rounded-3xl px-4 py-2 m-1 border-white placeholder:text-white text-white "
  />
   {errors.email && (
          <p className="text-red-400 text-sm px-2">{errors.email.message}</p>
        )}
   <input {...register("password")}
   placeholder="password...." 
   className="border-2 rounded-3xl px-4 py-2 m-1 border-white placeholder:text-white text-white "
   />
   <input {...register("city")}
   placeholder="city...." 
   className="border-2 rounded-3xl px-4 py-2 m-1 border-white placeholder:text-white text-white "
   button/>

   <button type="submit" className="px-4 py-1 text-white font-bold mt-4  shadow:bg-white border-2 border-white rounded-3xl bg-red-800 shadow-lg shadow-red-400 hover:-translate-y-1 transition duration-300">Submit</button>
  </form>

  {submittedData && (
    <div className=" bg-gray-900 text-white gap-4 flex flex-col text-center  items-center border-2 w-full ">
        <h2 >SubmittedData:</h2>
       
       <table className="border border-white border-collapse"> <thead><tr>
            <th>FirstName</th>
            <th>SrcondName</th>
            <th>Email</th>
            <th>Password</th>
            <th>City</th>
            </tr></thead>
            <tbody><tr><td>{submittedData.firstName}</td>
            <td>{submittedData.secondName}</td>
            <td>{(submittedData.email.length)}</td>
            <td>{"*".repeat(submittedData.password.length)}</td>
            <td>{submittedData.city}</td></tr></tbody>
            </table>
           
    </div>
  )}
  
   
  
  </>
   
  )
}

export default RHF