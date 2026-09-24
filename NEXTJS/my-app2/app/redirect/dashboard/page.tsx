import { redirect } from "next/navigation"



function Dashboard() {
const isLoggedIn = false;

if(!isLoggedIn){
    redirect("/redirect/login")
}

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard