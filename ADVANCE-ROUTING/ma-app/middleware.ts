import { NextResponse } from "next/server";

export function middleware(request:Request){
    const isLoggedIn = false;

    if(!isLoggedIn){
        return NextResponse.redirect( new URL("/about2", request.url))
    }

   


    return NextResponse.next()
}

 export const config = {
    matcher:"/dashboard"
 }

// import { NextResponse } from "next/server";

// export function proxy(request: Request) {
//   console.log("PROXY RUNNING");

//   return NextResponse.redirect(
//     new URL("/about2", request.url)
//   );
// }

// export const config = {
//   matcher: "/dashboard",
// };