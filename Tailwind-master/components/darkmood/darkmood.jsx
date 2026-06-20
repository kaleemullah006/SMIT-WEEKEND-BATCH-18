import { useState } from "react"

export default function TestDarkMode() {
  const [bulbOn, setBulbOn] = useState(false)

  return (
    <div className={bulbOn ? "bg-black text-white" : "bg-white text-black"}>
      <h1>Bulb is: {bulbOn ? "ON" : "OFF"}</h1>
      
      <button onClick={() => setBulbOn(!bulbOn)}>
        Toggle Bulb
      </button>
    </div>
  )
}