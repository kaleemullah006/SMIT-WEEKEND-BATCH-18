// import DeleteProduct from "./useeffect"
// import UseEffect from "./useeffect"
// import Data from "./useeffect"
// import CreatePost from "./useeffect"
// import Posts from "./useeffect"
// import Practice from "./useeffect"
import {lazy, Suspense} from "react"

const Profile = lazy(()=>import("./profile")) 


function Dashboard() {
  return (<>
  <h1 className="flex justify-center bg-black px-4 py-2 font-bold text-white ">React Lazy Demo</h1>
    {/* // <Data/>
    // <UseEffect/>
    // <DeleteProduct/> */}
<Suspense
  fallback={
    <div className="text-center text-blue-500 text-xl">
      Loading Profile...
    </div>
  }
>
  
 <Profile/>

</Suspense>

  </>
  )
}

export default Dashboard