import type {Metadata} from "next"

// export const metadata:Metadata = {
//   title: "dashboard page",
//   description: "this is dashboard page in my page"
// }

// export async function generateMetadata(){
//   return{
//     title: "my sweet page page"
//   }
// }

// import { redirect } from "next/navigation"



function page() {
    // const isLoggedIn = false;

    // if(!isLoggedIn){
    //     redirect("/about")
    // }

  return (<>
    <div>Dashboard</div>

  </>
  )
}

export default page