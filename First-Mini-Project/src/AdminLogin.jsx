import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      console.log("Login Response:", data);

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);

          alert("Login successful!");

          navigate("/admin/orders");
          
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Login Error:", error);
    }
  }

  return (
   
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4">
      <form
        onSubmit={handleLogin}
        className="
      flex w-80 flex-col gap-5
      rounded-3xl
      border border-white/20
      bg-gradient-to-br from-slate-800 to-slate-950
      p-8
      shadow-[0_15px_0_#020617,0_25px_50px_rgba(0,0,0,0.7)]
    "
      >
        {/* Heading */}
        <h1
          className="
        rounded-2xl
        border border-white/20
        bg-gradient-to-b from-slate-600 to-slate-800
        px-4 py-3
        text-center
        text-2xl font-bold text-white
        shadow-[0_7px_0_#1e293b,0_12px_20px_rgba(0,0,0,0.5)]
      "
        >
          Admin Login
        </h1>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="
        w-full
        rounded-2xl
        border border-white/20
        bg-gradient-to-b from-slate-700 to-slate-900
        px-5 py-4
        text-white
        placeholder:text-slate-300
        outline-none
        shadow-[inset_0_3px_6px_rgba(0,0,0,0.5),0_5px_0_#0f172a]
        focus:ring-2 focus:ring-blue-400
      "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
        w-full
        rounded-2xl
        border border-white/20
        bg-gradient-to-b from-slate-700 to-slate-900
        px-5 py-4
        text-white
        placeholder:text-slate-300
        outline-none
        shadow-[inset_0_3px_6px_rgba(0,0,0,0.5),0_5px_0_#0f172a]
        focus:ring-2 focus:ring-blue-400
      "
        />

        {/* Login Button */}
        <button
          type="submit"
          className="
        w-full
        rounded-2xl
        border border-blue-300/30
        bg-gradient-to-b from-blue-400 to-blue-700
        px-5 py-4
        font-bold text-white
        shadow-[0_8px_0_#1e3a8a,0_15px_25px_rgba(0,0,0,0.5)]
        transition-all duration-150
        hover:-translate-y-1
        hover:shadow-[0_11px_0_#1e3a8a,0_18px_30px_rgba(0,0,0,0.6)]
        active:translate-y-2
        active:shadow-[0_3px_0_#1e3a8a]
      "
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
