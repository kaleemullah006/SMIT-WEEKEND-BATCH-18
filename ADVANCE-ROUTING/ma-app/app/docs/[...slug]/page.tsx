"use client "

import { useRouter } from "next/navigation";


type IProp={
    params: Promise<{slug:string[]}>
}

export default async function Page(props:IProp){
const params = await props.params;
const slug = params.slug
  
const route = useRouter()
   

    return(<>
    <h1>{slug.join(" / ")}</h1>

    <button onClick={()=>route.push("/api")}></button>
    
    </>)
}