import Link from "next/link"

function Products() {
  return (<>
    <div className="bg-blue-600 font-bold rounded-3xl flex justify-center ">Products</div>

     <Link href={"/"}>go to home</Link>
  </>
  )
}

export default Products