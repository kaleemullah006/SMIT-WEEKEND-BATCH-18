import { CREDENTIALS } from "../components/dummyData"
import {useRef} from "react"
import {useNavigate} from "react-router-dom"
import styles from "./signin.module.css"

export default function Signin(){

    const emailRef = useRef()
    const pwdRef = useRef()
    const navigate = useNavigate()

    function signClickHandler(){

        const email = emailRef.current.value 
        const password = pwdRef.current.value 


        if (email !== CREDENTIALS.email || password !== CREDENTIALS.password){
            alert("credential not found")
            return 
        }
        console.log("login successfull")
        alert("login successfull")
        navigate("/dashboard")

    }

    return(
        <div  className={styles.container}>
            <h1 className={styles.heading}>Signin</h1>
            <input className={styles.email} type="text" ref={emailRef}  placeholder="Enter Email...."/>
            <br />
            <br />
            <input className={styles.password} type="password" ref={pwdRef} placeholder="Enter Password...." />
            <br /><br />
            <button className={styles.signin} onClick={signClickHandler}>Signin</button>
        </div>
    )
}