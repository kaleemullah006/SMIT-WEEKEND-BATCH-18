import { supabase } from "../src/supabase";
import { useRef } from "react";
import {useNavigate} from "react-router-dom"

export default function Signup() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate()

  function addHandler() {
    const emailValue = emailRef.current.value;
    const pwdValue = pwdRef.current.value;

    const {data, error} = supabase.auth.signUp({
      email:emailValue,
      password:pwdValue,

    
    })
    if(error){
      alert(error.message)
    }else{
      alert("Signupn Successful")
      navigate("/login")
    }
  }

  return (
    <>
    <h1>SignUP</h1>
      <input type="email" ref={emailRef} placeholder="Enter Email" />
      <br />
      <br />
      <input type="password" ref={pwdRef} placeholder="Enter Password" />
      <br />
      <br />
      <button onClick={addHandler}>Add</button>
    </>
  );
}
