import {Routes, Route} from "react-router-dom"


export default function Day1(){
    return(
        <>
        <div className="min-h-screen flex bg-gray-100 items-center justify-center">
  <div className="bg-white w-80">
  <div className="w-18 h-18 rounded-full bg-red-500 flex mx-auto items-center  justify-center">
    <span className="font-bold text-white text-2xl">K</span>
  </div>
  <p className="text-center text-3xl font-bold">Kaleem Ullah</p>
  <p className="text-center ">Quran Teacher🕌</p>
  <p className="text-red-400 text-center mb-2">📍 karachi, Pakistan </p>
 <div className="   flex justify-center gap-2">
   <button className="left-0  px-4 py-2 rounded-3xl bg-red-950 text-white">Message</button>
  <button  className=" px-4 py-2 rounded-3xl bg-red-950 text-white">Follow</button>
  </div>
  </div>
  </div>

        
        
        </>
    )
}