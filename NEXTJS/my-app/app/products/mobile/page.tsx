import Link from "next/link"



function Mobile() {
  return (<>
    <div>Mobile page</div>

    <Link href={"/products"}>Go To Products</Link>
    <Link href={"/"}>Go To Home</Link>
  </>
  )
}

export default Mobile