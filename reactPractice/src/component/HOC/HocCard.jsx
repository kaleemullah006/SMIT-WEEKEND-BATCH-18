import StudentCard from "./StudentCard"
import TeacherCard from "./TeacherCard"

function Hoc(props) {
    const Components = props.cmp
  return (<>
    <div className="border-2 border-blue-400 rounded-3xl shadow-lg shadow-blue-600 w-40 text-center mt-8 space-y-1 font-bold ">
        <Components {...props}/>
    </div>
  </>
  )
}

function HOC1(){
    return(<>
    <div className="flex justify-center items-center gap-4 p-4 ">

    <Hoc  cmp={StudentCard} name="kaleem" age={15}/>
    <Hoc cmp={StudentCard} name="Salaar" age={29}/>
    <Hoc cmp={TeacherCard} name="kaleem" subject="islamiat"/>
    </div>
    
    
    </>)
}

export default HOC1

