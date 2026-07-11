

function Card({children}) {
  return (
  <div className='flex justify-center m-2'>

  <div className="flex  flex-col  gap-2 items-center bg-blue-200 rounded-3xl border w-80 ">

{children}

  </div>
  </div>
  
  
  
  
    
  )
}

export default Card