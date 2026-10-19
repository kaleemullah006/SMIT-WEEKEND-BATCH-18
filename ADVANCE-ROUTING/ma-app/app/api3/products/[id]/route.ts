import { NextResponse } from "next/server";

type IProp = {
    params: Promise<{ id: string }>
}

// export async function GET(request:Request, {params}:IProp){
//     const {id} = await params ;

//     return NextResponse.json({
//         message:"product Found",
//         ProductId: id
//     })

// }

// export async function GET(request: Request, { params }: IProp) {
//     const { id } = await params;

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

//     if (!res.ok) {
//         return NextResponse.json(
//             {
//                 message: "user not found",
//             },
//             {status:404}
//         )

//     }
//     const data = await res.json()

//     return NextResponse.json(data)

// }


export async function POST(request: Request, { params }: IProp) {
    const { id } = await params;




    const data = await request.json()
    

    return NextResponse.json({
        message:"Data received",
        productId: id,
        data: data
    })

}
