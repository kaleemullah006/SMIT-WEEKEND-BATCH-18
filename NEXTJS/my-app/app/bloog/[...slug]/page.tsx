type IProp ={
    params: Promise <{slug:string[]}>
}

const Slug2 = async (props:IProp)=> {
    const params = await props.params
    const resolvedParams = params.slug
    const slug = resolvedParams
     return (<>
     <h1>detaile of slug</h1>

     <p>slug : {slug.join(" / ")}</p>
     
     
     
     </>)
}

export default Slug2