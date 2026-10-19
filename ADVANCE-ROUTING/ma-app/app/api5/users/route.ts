export async function GET(){
    return Response.json({
        name:"kaleem",
        role:"teacher"
    })


}
export async function POST(request:Request){
   
    const data = await request.json()

    return NextResponse.json({
        message: "user created successfully",
        body: data
    })
}
export async function PUT(request:Request){
   
    const data = await request.json()

    return NextResponse.json({
        message: "user created successfully",
        body: data
    })
}
import { NextResponse } from "next/server"
export async function DELETE(){
   
  
    return NextResponse.json({
        message: "user DELETED successfully",
     
    })
}