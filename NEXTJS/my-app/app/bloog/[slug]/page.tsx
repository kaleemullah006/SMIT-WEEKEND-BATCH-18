type IProp ={
    params: Promise <{slug:string}>
}

const Slug = async (props:IProp)=> {
    const params = await props.params
    const resolvedParams = params.slug
    const slug = resolvedParams
     return (<>
     <h1>detaile of slug</h1>

     <p>slug : {slug}</p>
     
     
     
     </>)
}

export default Slug