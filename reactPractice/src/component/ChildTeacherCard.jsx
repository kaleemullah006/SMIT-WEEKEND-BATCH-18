


// function ChildTeacherCard({name,subject,experience,text, changeColor, color}) {
//   return (
//     <div className="flex justify-center items-center gap-6  py-2">

//     <div className="w-50  flex flex-wrap items-center justify-center   p-4 gap-6  border border-blue-400 rounded-3xl space-y-1 hover:-translate-y-1 text-center">
// <h2 className="font-bold ">{name}</h2>
// <p>subject:{subject}</p>
// <p >Experience:{experience}</p>

// <button className={color} onClick={changeColor}>{text}</button>



//     </div>
//     </div>
//   )
// }

// export default ChildTeacherCard
function MyButton({text,color,onclick}) {
  return (
   <>
   <div className=" w-full flex justify-center items-center px-4 py-2 rounded-3xl hover:-translate-y-1 hover:transition duration-300 border gap-6 space-y-4 ">
<div>

    <button  onClick={onclick} className={`${color} rounded-3xl px-4 py-2 `}>{text}</button>
</div>
   
   </div>
   
   </>
  )
}
export default MyButton

