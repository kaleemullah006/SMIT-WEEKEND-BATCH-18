import { redirect } from "next/navigation";

redirect
function Login() {

    const isLoggedIn = false;

    if(!isLoggedIn){
redirect("/redirect/dashboard")
    }
  return (
    <div>Login</div>
  )
}

export default Login