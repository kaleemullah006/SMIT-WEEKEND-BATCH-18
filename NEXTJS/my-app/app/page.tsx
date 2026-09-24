import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-amber-500 rounded-3xl ">

    <Link className="inline-block" href={"/about"}>go to about</Link>
    <Link className="block" href={"/products"}>go to products</Link>
    </div>
    
    </>
    
  );
}
