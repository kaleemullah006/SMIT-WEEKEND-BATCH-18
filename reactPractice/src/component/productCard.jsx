// // export default function ProductCard({ title, price, inStock, onMarkPaid }) {

// //     return (
// //         <>
// //             <div className="card">
// //                 <h2>{title}</h2>
// //                 <p>{price}</p>
// //                 <p style={{color: inStock ? "green" :"red"}}>{inStock ? "Available" : "Out of Stock"}</p>
// //                 <button onClick={onMarkPaid}>click me</button>
// //             </div>
// //         </>
// //     );
// // }


//   import { useState } from "react";


// export default function AttendenceCard({
//   name,
//   time,
//   isPresent,
//   AttendenceShow,
// }) {
//   const [present, setPresent] = useState(isPresent);
//   function toggleAttendence(){
//     setPresent((prev)=> !prev)
//   }
//   return (
//     <>
//     <div style={{background: present ? "lightgreen": "lightcoral"}}>
//       <h2>{name}</h2>
//       <p>{time}</p>
//       <p >{present? "Present" : "Absent"}</p>
//       <button onClick={toggleAttendence}>{present? "Mark Absent" : "Mark Present"}</button>
//     </div>
//     </>
//   );
// }


// import {useState} from "react"


// export default function ProductCard({name, course}) {
//     const [likes, setLikes] = useState(0)




//   return (
//     <div>
// <p>{name}</p>
// <p>{course}</p>
// <p>{likes}</p>

// <button onClick={()=> setLikes(likes + 1) }>Plus value</button>


//     </div>
    
//   )
// }
// import {useState} from "react"


// export default function ProductCard({productName, price }) {
//     const [quantity, setQuantity] = useState(1)
// function decreaseHandler(){
//     if(quantity > 1){
//         setQuantity(quantity - 1)
//     }
// }


//   return (
//     <div>
// <p>Name:{productName}</p>
// <p>Price:{price}</p>
// <p>Quantity:{quantity}</p>
// <p>Total:{quantity * price}</p>

// <button onClick={()=> setQuantity(quantity + 1) }>+</button>
// <button onClick={decreaseHandler} >-</button>



//     </div>
    
//   )
// }
import {useState} from "react"


export default function ProductCard({name, price }) {




  return (
    <div>
<p>{name}</p>
<p>{price}</p>







    </div>
    
  )
}

