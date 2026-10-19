"use client"

import { useRouter } from "next/navigation"

function Contact() {

    const route = useRouter()
  return (<>
    <div>Contact</div>
    <button onClick={()=> route.push("/about")}>Go to About</button>

  </>
  )
}

export default Contact