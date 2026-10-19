// import Link from "next/link";

// export default function Home (){

//   return(<>
  
//   <h1>Home page</h1>

//   <Link href={"/signin"}>Signin</Link>
//   <Link href={"/signup"}>Signup</Link>
  
  
  
  
//   </>)
// } 

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

        {/* Heading */}
        <h1 className="mb-3 text-4xl font-bold text-gray-800">
          Welcome
        </h1>

        <p className="mb-8 text-gray-500">
          Welcome to our website
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">

          <Link
            href="/signin"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Signin
          </Link>

          <Link
            href="/signup"
            className="w-full rounded-lg border border-blue-600 px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Signup
          </Link>

        </div>

      </div>

    </div>
  );
}