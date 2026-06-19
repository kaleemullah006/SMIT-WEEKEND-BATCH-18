 export default function HoverFocusActive(){
    return(
        <>
        <div className="min-h-screen flex flex-wrap justify-center gap-2 items-center">

        {/* <button className=" bg-blue-500 hover:bg-blue-700 transition duration-300 text-white px-4 py-2 rounded-lg">Primary button</button>

        <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 px-4 py-2 rounded-lg">Outline button</button>

        <button className="border-2 border-red-500 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 rounded-lg px-4 py-2">Danger button</button> */}
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
  Active
</span>
        
   <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
  Active
</span>
<span className="bg-blue-100 text-blue-700 rounded-full ...">New</span>
<span className="bg-red-100 text-red-700 rounded-full ...">Urgent</span>
<span className="bg-yellow-100 text-yellow-800 rounded-full ...">Pending</span>
<span className="bg-gray-100 text-gray-700 rounded-full ...">Draft</span>


        
        </div>
        
        
        </>
    )
 }