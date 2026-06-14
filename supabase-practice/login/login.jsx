import { useRef } from "react"
import { supabase } from "../src/supabase"
import {useNavigate} from  "react-router-dom"

export default function Login(){
    const emailRef = useRef()
    const pwdRef = useRef()
    const navigate = useNavigate()

function loginHandler(){
    const emailValue = emailRef.current.value
    const pwdValue = pwdRef.current.value

    const {data, error} = supabase.auth.signInWithPassword({
        email:emailValue,
        password:pwdValue,


    })
    if(error){
        alert(error.message)
    }else{
        alert("login successful")
    }
    emailRef.current.value = "";
    pwdRef.current.value = "";
    navigate ("/home")

}


    return(
        <>
        <h1>Login</h1>
      <input type="email" ref={emailRef} placeholder="Enter Email" />  
      <br /><br />
      <input type="password" ref={pwdRef} placeholder="Enter Password" />
      <br /><br />
      <button onClick={loginHandler}>Login</button>
        
        
        
        </>
    )
}