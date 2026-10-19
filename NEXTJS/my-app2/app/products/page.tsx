// import Image from "next/image"



// async function products(){
//     await new Promise ((resolve)=> setTimeout(resolve, 3000))

//     return <p>pakistan zindabad</p>

// }

// export default products


// "use client"

// function Products(){
//     throw new Error("something went wrong")
    

//     return(

//         <p>pakistan zindabad</p>
//     )

// }

// export default Products





import { notFound } from "next/navigation";

export default async function Products({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id !== "1") {
    notFound();
  }

  return <h1>Product ID: {id}</h1>;
}