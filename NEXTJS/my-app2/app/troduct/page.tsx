import Link from "next/link"

const products = [
    {id: 1, name:"laptop"},
    {id:2, name:"mobile"},
    {id:3, name:"computer Mouse"},
    {id: 4, name:"laptop"},
    {id:5, name:"mobile"},
    {id:6, name:"computer Mouse"},

]
function Products() {
  return (<>
    <div>Products</div>
    {products.map((product)=>(
        <div key={product.id}>
            <Link href={`/troduct/${product.id}`}>{product.id}  {product.name}</Link>
        </div>
    ))}
  </>
  )
}


export default Products