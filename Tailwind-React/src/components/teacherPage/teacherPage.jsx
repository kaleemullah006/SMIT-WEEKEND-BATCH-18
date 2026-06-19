import TeacherComponent from "../teacher/teacherComponent";
import DarkMood from "../darkMood/darkMood";

export default function TeacherPage(){

    const teachers = [
        {name:"kaleem ullah", subject:"Hadees", experienceBadge:"5 years", statusBadge:"Available"},
        {name:"Saleem ullah", subject:"Quran Majeed", experienceBadge:"3 years", statusBadge:"Busy"},
        {name:"Sana ullah", subject:"islam or others", experienceBadge:"6 years", statusBadge:"Available"},
        {name:"Jar ullah", subject:"islamic studies", experienceBadge:"8 years", statusBadge:"Busy"}
    ]

    return(
        <>
        <div className="min-h-screen flex justify-center items-center ">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  shadow shadow-blue-400">

    {teachers.map((teacher)=>(
      <TeacherComponent
      name={teacher.name}
      subject={teacher.subject}
      experienceBadge={teacher.experienceBadge}
      statusBadge={teacher.statusBadge }
      
      />  
    ))}





  </div>





        </div>
        
        
        
        </>
    )


}