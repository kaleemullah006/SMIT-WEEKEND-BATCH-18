// import Image from "next/image"



// function ImagePage() {
//   return (<>
//     <div>page</div>
//    <Image src="/person.png" alt="person"
//    width={100} height={50}/>


//   </>
//   )
// }

// export default ImagePage
import Image from "next/image"



function ImagePage() {
  return (<>
    <div>page</div>

    <div className="flex ">
   <Image src="https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXNlfGVufDB8fDB8fHww" alt="Mouse"
   width={300} height={200}/>
   <Image src="https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXNlfGVufDB8fDB8fHww" alt="Mouse"
   width={300} height={200}/>
</div>

  </>
  )
}

export default ImagePage