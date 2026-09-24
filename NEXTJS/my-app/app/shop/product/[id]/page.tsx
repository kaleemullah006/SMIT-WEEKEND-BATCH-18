type IProp={
    params: Promise<{id:string}>
}

const DynamicProductPage =async (props:IProp)=> {
    const params = await props.params
    const resolvedParams = params.id
    const id = resolvedParams
  return (<>
    <div>DynamicProductPage</div>
<p> product id: {id}</p>
   
  </>
  )
}

export default DynamicProductPage