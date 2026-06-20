export default function CardComponents({icon,number,label}){


    return(
        <>
       <div className="w-70 p-4 rounded-3xl shadow shadow-blue-400 hover:shadow-blue-600 border border-gray-300 hover:-translate-y-1 transition duration-300 items-center text-center ">

        <p className="font-bold ">{icon}{number}</p>
        <p className="font-bold ">{label}</p>
        
        
        
        </div> 
        
        
        
        
        
        </>
    )




}