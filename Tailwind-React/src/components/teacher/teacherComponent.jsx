export default function TeacherComponent({name, subject, experienceBadge, statusBadge, }){
    const statusColor = statusBadge === "Available" ? 
    "bg-green-500" : "bg-red-500";
    return(
        <>
        <div className="space-y-2 bg-white w-64  hover:shadow-blue-400 rounded-lg hover:-translate-y-1 text-center shadow shadow-blue-500 border border-blue-200">
             

             <h2 className="font-bold ">{name}</h2>
            <span className="text-medium font-semibold text-gray-600">{subject}</span>

            <p className="text-sm text-gray-600 text-center ">{experienceBadge}</p>

            <p className={`text-sm ${statusColor} rounded-lg  `}>{statusBadge}</p>

                          
        </div>
        
        
        
        
        </>
    )
}