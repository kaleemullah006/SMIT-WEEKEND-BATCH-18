import { Link } from "react-router-dom"

export default function Home() {
  const pages = [
    { name: "Day 1", path: "/day1" },   
    { name: "Day 2 — Grid Responsive", path: "/day2" },
    { name: "Day 2 — Exercise 2", path: "/exe2" },
    { name: "Day 3 — Hover Focus Active", path: "/day3" },
    { name: "Day 3 — Exercise 3", path: "/exe3" },
    { name: "Day 4 — formsNavbarDarkMood", path: "/day4" },
    { name: "Day 4 — Exercise 4", path: "/exe4" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Tailwind Practice Pages</h1>
      
      {pages.map((page) => (
        <Link
          key={page.path}
          to={page.path}
          className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white px-6 py-2 rounded-lg w-64 text-center"
        >
          {page.name}
        </Link>
      ))}
    </div>
  )
}