// type IProp = {
//     params: Promise<{id : string}>
// }

// const ID =async (props:IProp)=> {
// const params = await props.params
// const resolvedParams = params.id

// const id = resolvedParams


//   return (<>
//     <h1>Products detaile</h1>

//     <p>Product ID: {id}</p>








//   </>
//   )
// }

// export default ID

type IProp ={
    params: Promise <{slug:string}>
}

const Slug = async (props:IProp)=>{
    const params = await props.params
    const resolvedPrams = params.slug
    const slug = resolvedPrams

    return(<>
    
    <h1>Blog Detaile</h1>

    <p>slug of {slug}</p>
    
    
    </>)
}

export default Slug