import * as yup from "yup"

const signinSchema = yup.object({
    email:yup.string().email("Enter a valid Email").required("Email is Required"),
    password:yup.string().min(6,"password must be at least 6 characters").required("Password is required")
})

export default signinSchema