// // import AttendenceCard from "../component/productCard";
// // // import ProductCard from "../component/productCard";

// // // export default function UseProductCard() {
// // //   return (
// // //     <>
// // //     <div>

// // //     <ProductCard title="khan" price="100" inStock="true" />
// // //     <ProductCard title="khan" price="100" inStock="false" />
// // //     <ProductCard title="khan" price="100" inStock="true" />

// // //     </div>

// // //     </>
// // //   )
// // // }

// // // export default function UseProductCard() {
// // //   const products = [
// // //     {id:1, title: "cola", price: 100, inStock: true },
// // //     {id:2, title: "hola", price: 10, inStock: false },
// // //     {id:3, title: "marinda", price: 70, inStock: true },
// // //   ];

// // //   function handleMarkPaid(title) {
// // //     console.log("Added to cart:", title);
// // //   }
// // //   return (
// // //     <>
// // //       <div>
// // //         {products.map((product) => (
// // //           <ProductCard
// // //             key={product.id}
// // //             title={product.title}
// // //             price={product.price}
// // //             inStock={product.inStock}
// // //             onMarkPaid={() => handleMarkPaid(product.title)}
// // //           />
// // //         ))}
// // //       </div>
// // //     </>
// // //   );
// // // }

// // function UseProductCard() {
// //   const students = [
// //     {id:1, name: "ibrahim1", time: "11:00", isPresent: true },
// //     {id:2, name: "ibrahim2", time: "6:00", isPresent: false },
// //     {id:3, name: "ibrahim3", time: "8:00", isPresent: true },
// //     {id:4, name: "ibrahim4", time: "2:00", isPresent: false },
// //   ];

 

// //   return <div>
// //     {students.map((student)=>(

// //       <AttendenceCard key={student.id} name={student.name} time={student.time} isPresent={student.isPresent} />
 

// // ))}

// //   </div>;
// // }

// // export default UseProductCard;

// // import ProductCard from "../component/productCard"

// // export default  function UseProductCard(){
  

// //   return (
//   //     <>
  
  
//   //     <ProductCard
//   //     productName="laptop" price="5000" />
  
//   //     <ProductCard
//   //     productName="mobile" price="3000" />
  
//   //     <ProductCard
//   //     productName="keyboard" price="5000" />
  
  
//   //     </>
//   //   )
//   // }
  
  import ProductCard from "../component/productCard"
  
  export default  function UseProductCard(){
    const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    price: 30000
  },
  {
    id: 3,
    name: "Keyboard",
    price: 5000
  }
];
    
  
    return (
      <div>
      {products.map((product)=>(
        
        
        <ProductCard key={product.id}
        name={product.name} price={product.price} />
        
      
      ))}
       
      </div>
      
      
      
     
    )
  }
// import ProductCard from "../component/productCard"

// export default function UseProductCard(){

//   const products = [
//     {
//       id: 1,
//       name: "Laptop",
//       price: 50000
//     },
//     {
//       id: 2,
//       name: "Mobile",
//       price: 30000
//     },
//     {
//       id: 3,
//       name: "Keyboard",
//       price: 5000
//     }
//   ];

//   return (
//     <div>

//       {products.map((product)=>(

//         <ProductCard
//           key={product.id}
//           name={product.name}
//           price={product.price}
//         />

//       ))}

//     </div>
//   )
// }