import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Login ho gaye!");
       window.location.href = "/signupdashboard"
    }
    setLoading(false);
  };

  return (
    <>
      <main className="bg-white md:h-screen dark:bg-neutral-900">
        <div className="grid md:grid-cols-2 items-center w-full h-full">
          <div className="max-md:order-1 p-4">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:max-w-3/4 w-full h-full aspect-square object-contain block mx-auto"
              alt="login-image"
            />
          </div>

          <div className="flex items-center px-8 py-12 bg-[#0C172C] w-full h-full lg:p-12 dark:bg-neutral-800">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-10">
                <h1 className="text-2xl font-bold text-slate-50">
                  Login 
                </h1>
              </div>

              <form onSubmit={handleLogin} className="space-y-6 w-full">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 text-slate-50 font-medium text-sm inline-block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@readymadeui.com"
                    required
                    className="px-3 py-2.5 text-sm text-slate-50 rounded-md bg-gray-800 w-full outline-1 -outline-offset-1 outline-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:bg-neutral-700 dark:outline-neutral-600"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 text-slate-50 font-medium text-sm inline-block"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    className="px-3 py-2.5 text-sm text-slate-50 rounded-md bg-gray-800 w-full outline-1 -outline-offset-1 outline-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:bg-neutral-700 dark:outline-neutral-600"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                <a className="text-white font-bold " href="/Signup">No account ? <span className="bg-blue-500 px-4 py-1 rounded-3xl text-white">SignUp</span> </a></div>
              
                

                <button
                  type="submit"
                  className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {loading ? "Loading" : "Login"}
                </button>
                {message && (
                  <p
                    className="text-center text-sm mt-2"
                    style={{
                      color: message.includes("✅") ? "#4ade80" : "#f87171",
                    }}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
