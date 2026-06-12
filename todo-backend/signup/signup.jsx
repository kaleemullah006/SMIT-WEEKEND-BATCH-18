import { supabase } from "../src/supabase";
import {useRef} from "react"
import { useNavigate } from "react-router-dom";

export default function Signup(){
const emailRef = useRef();
const pwdRef = useRef();
const navigate = useNavigate()


async function signUpHandler(){
    

    const emailValue = emailRef.current.value ;
    const pwdValue = pwdRef.current.value ;

 const {data,error} = await supabase.auth.signUp({
    email:emailValue,
    password:pwdValue,
 })
if (error) {
    alert(error.message)
} else {
    alert("sign up succcessful")
    navigate("/login")
}
 
}

    

    return(
        <>
        <h1>sign up</h1>
       <input type="text" ref={emailRef} placeholder="Enter Email" /> 
       <br /><br />
       <input type="password" ref={pwdRef} placeholder="Enter Password" />
       <br /><br />

       <button onClick={signUpHandler} >Sign Up</button>
        
        
        
        </>
    )



}