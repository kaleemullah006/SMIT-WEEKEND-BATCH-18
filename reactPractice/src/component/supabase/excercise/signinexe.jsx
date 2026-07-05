
import { supabase } from "../supabase"
import { useState } from "react";

export default function Signinexe() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
     
    });

    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/Dashboardexe";
    }
    setLoading(false);
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <p className="text-white text-xl animate-pulse">⏳ Creating Account...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      {/* Card */}
      <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🎓</div>
          <h1 className="text-3xl font-bold text-white">Login</h1>
          <p className="text-gray-400 text-sm mt-1">Student Portal mein khush aamdeed!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

         

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-300 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="ahmed@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-gray-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-gray-500"
            />
          </div>

          
          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-xl px-4 py-3">
              <p className="text-red-400 text-sm">❌ {error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition duration-300 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 mt-2"
          >
            Create Account 🚀
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-400 text-sm">
            Account Not Available?{" "}
            
             <a href="/Signupexe" className="text-indigo-400 hover:text-indigo-300 font-semibold transition">
              Signup
            </a>        
          </p>

        </form>
      </div>
   </div>
  );
}

