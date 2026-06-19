import { useState } from "react"

export default function DarkMood() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen p-6">
        
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 text-white dark:bg-yellow-400 dark:text-black px-4 py-2 rounded-lg"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1 className="text-2xl font-bold mt-4">Quran Academy</h1>
        <p className="text-gray-600 dark:text-gray-300">Welcome to lessons</p>

      </div>

    </div>
  )
}