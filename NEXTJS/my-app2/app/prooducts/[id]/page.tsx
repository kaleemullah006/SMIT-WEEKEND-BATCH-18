import Link from "next/link"

type IProps= {
    params: Promise<{id:string}>
}

const Id = async (props:IProps)=>{
    const params = await props.params
    const resolvedParams = params.id
    const id = resolvedParams

    const products = [
        {id:1, name:"laptop"},
        {id:2, name:"keyboard"},
        {id:3, name:"mobile"}
    ]

    return (<>
    <h1>product detaile</h1>
    

{/* {products.map((product)=> (
    <Link href={`/prooducts/${product.id}`} key={product.id}></Link>
    {product.id}{product.name}
))} */}

{/* {products.map((product) => (
  <Link href={`/prooduct/${product.id}`} key={product.id}>
    {product.id} {product.name}
  </Link>
))}
     */}

     {products.map((product)=> (
        <Link href={`/prooducts/${product.id}`} key={product.id}>{product.name}{product.id}</Link>
     ))}
    
    
    
    </>)

}
export default Id