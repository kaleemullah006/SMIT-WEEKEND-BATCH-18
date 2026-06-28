import {useState} from 'react'

function HOC() {
    console.log("counter")
  return (<>
  <h1 className='text-center w-40 font-bold bg-orange-300 rounded-3xl px-4  py-2'>HOC</h1>
  <Hoc cmp={Counter}/>
  
  
  
  
  </>
    
  )
  
}
function Hoc(props){
    return(
        <>
        <div className='bg-blue-300 font-bold w-40 rounded-e-3xl text-center'>Blue:<props.cmp/></div>
        <div className='bg-green-300 font-bold w-40 rounded-e-3xl text-center'>Green:<props.cmp/></div>
        <div className='bg-yellow-300 font-bold w-40 rounded-e-3xl text-center'>Yellow:<props.cmp/></div>
        </>
    )
}
function Counter (){
    const [count , setCount] = useState(0)
    console.log("counter")
    return(
    <>
    

    <p className='text-center'>{count}</p>
    <button className='border-2 px-4 py-2 rounded-3xl' onClick={()=> setCount(count + 1)}>Count</button>
   
    
    
    
    </>)
}



export default HOC