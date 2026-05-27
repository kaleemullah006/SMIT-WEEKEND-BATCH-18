import { useRef } from "react"
import { CREDENTIALS } from "../components/dummyData"
import { useNavigate } from "react-router-dom"

export default function Signin() {

    const emailRef = useRef()
    const pwdRef = useRef()

    const navigate = useNavigate()

    function signinClickHandler() {

        const email = emailRef.current.value
        const password = pwdRef.current.value

        if (
            email !== CREDENTIALS.email ||
            password !== CREDENTIALS.password
        ) {
            alert("credential not found")
            return
        }

        alert("login successfully")

        navigate("/dashboard")
    }

    return (
        <div>
            <h1>Signin Page</h1>

            <input
                type="text"
                ref={emailRef}
                placeholder="Enter email"
            />

            <br />
            <br />

            <input
                type="password"
                ref={pwdRef}
                placeholder="Enter password"
            />

            <br />
            <br />

            <button onClick={signinClickHandler}>
                Signin
            </button>
        </div>
    )
}