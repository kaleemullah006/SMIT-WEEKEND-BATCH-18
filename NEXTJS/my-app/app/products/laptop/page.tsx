import Link from "next/link"

Link
function Laptop() {
  return (<>
    <div>Laptop page</div>


    <Link href={"/products"}>Go to products</Link>
    <Link href={"/"}>Goto Home</Link>
  </>
  )
}

export default Laptop