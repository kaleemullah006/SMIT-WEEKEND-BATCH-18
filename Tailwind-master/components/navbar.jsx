export default function Navbar({ }) {
  return (
    <>
      <nav className="flex flex-wrap  justify-between items-center bg-blue-200 px-4 py-2 shadow shadow-blue-400 gap-2">
        <div className="font-bold shadow shadow-blue-400 rounded-3xl px-2 hover:bg-blue-400 hover:text-white">
          MyApp
        </div>

        <div className="flex gap-6 bg-blue-300 rounded-3xl px-4 py-1 ">
          <a
            className="font-bold hover:text-white shadow shadow-blue-400 px-2 rounded-3xl hover:bg-blue-400"
            href=""
          >
            Home
          </a>
          <a
            className="font-medium shadow shadow-blue-400 rounded-3xl px-2  hover:bg-blue-400 hover:text-white"
            href=""
          >
            About
          </a>
          <a
            className="font-medium hover:text-white shadow shadow-blue-400 rounded-3xl px-2 hover:bg-blue-400"
            href=""
          >
            Contact
          </a>
        </div>

        <button className="bg-blue-400 px-4 py-2 rounded-3xl hover:bg-blue-600 font-bold hover:text-white">
          Login
        </button>

       
      </nav>
    </>
  );
}
