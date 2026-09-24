type IProp={
    params: Promise<{id:string}>
}

export default async function Page(props:IProp){
const params = await props.params;
const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    console.log(data, "===")

    return(<>
    <h1>API DATA {data.title} </h1>
    <h1>API DATA {data.body} </h1>
    <h1>API DATA {data.id} </h1>
    
    </>)
}