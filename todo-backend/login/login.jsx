import { useRef, useState, useEffect } from "react";
import { supabase } from "../src/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  async function logInHandler() {
    const emailValue = emailRef.current.value;
    const pwdValue = pwdRef.current.value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailValue,
      password: pwdValue,
    });
    if (error) {
      alert(error.message);
    } else {
      setUser(data.user);
      alert("login successful");
      navigate("/home")
    }

    // console.log(data.user)
    // console.log(data.session)

    emailRef.current.value = "";
    pwdRef.current.value = "";
  }

  async function signOutHandler() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null);
    } else {
      console.log("logout successful");
      navigate("/login");
    }
  }

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getSession();

      if (data.session) {
        setUser(data.session.user);
      }
    }
    getUser();
  }, []);

  return (
    <>
      <h1>Login</h1>
      {user ? (
        <h2>welcome {user.email}</h2>
      ) : (
        <>
          <input type="email" ref={emailRef} placeholder="Enter Email" />
          <br />
          <br />
          <input type="password" ref={pwdRef} placeholder="Enter password" />
          <br />
          <br />
          <button onClick={logInHandler}>Login</button>
        </>
      )}
      <button onClick={signOutHandler}>Logout</button>
    </>
  );
}
