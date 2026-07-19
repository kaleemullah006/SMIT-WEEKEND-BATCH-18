import {useContext} from "react"
import { ThemeContext } from "../context/UserContext"


function Header(){

    const {theme} = useContext(ThemeContext)
    return(
        <div>
        <h2>welcome: {theme}</h2>
    </div>
)
}
export default Header