type IProp={
    params:Promise <{id:string}>
}

const ID = async (props:IProp)=>{
    const params = await props.params
    const resolvedParams = params.id
    const id =resolvedParams

    return(<>
    <h1>Product detaile</h1>

    <p>Product ID : {id}</p>
    
    
    </>)
}

export default ID