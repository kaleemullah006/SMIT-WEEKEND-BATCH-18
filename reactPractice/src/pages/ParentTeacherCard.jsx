// import ChildTeacherCard from "../component/ChildTeacherCard";
import MyButton from "../component/ChildTeacherCard"



// function ParentTeacherCard() {
//   return (
//     <div>
// <ChildTeacherCard name="kaleem ullah" subject="quran" experience="5 years"/>
// <ChildTeacherCard name="jar ullah" subject="hadees" experience="7 years"/>
// <ChildTeacherCard name="ijaz ullah" subject="math" experience="3 years"/>
//  
//     </div>
//   )
// }

// export default ParentTeacherCard


// function ParentTeacherCard() {
// function change1(){
//   console.log("change1")
// }
// function change2(){
//   console.log("change2")
// }
// function change3(){
//   console.log("change3")
// }
//   return(

// <>
// <div className="rounded-3xl flex justify-center items-center ">

// <MyButton text="change1" color="bg-green-400" onclick={change1}  />
// <MyButton text="change2" color="bg-blue-400" onclick={change2}  />
// <MyButton text="change3" color="bg-yellow-400" onclick={change3}  />

// </div>



// </>


//   )


//   }
//   export default ParentTeacherCard

function ParentTeacherCard() {
  function changeGreen(){
    console.log("green color")
  }
  function changeRed(){
    console.log("Red color")
  }
  function changeYellow(){
    console.log("yellow color")
  }


const buttons = [
  {id:1, text:"save", color:"bg-green-400", onclick:changeGreen},
  {id:2, text:"delete", color:"bg-red-400", onclick:changeRed},
  {id:3, text:"pending", color:"bg-yellow-400", onclick:changeYellow},
]



  return(
<>
{buttons.map((button)=>(
  <MyButton key={button.id}
   text={button.text} 
   color={button.color}
   onclick={button.onclick}/>
))}


</>


  )


  }
 


export default ParentTeacherCard