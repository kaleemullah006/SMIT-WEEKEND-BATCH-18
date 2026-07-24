import * as yup from "yup"

const signupSchema = yup.object({
    name:yup.string().required("Name is Required"),
    email: yup.string().email("enter a valid email").required("email is required"),
    password:yup.string().min(6,"password must be at least 6 characters").required("password is required"),
    confirmPassword:yup.string().oneOf([yup.ref("password")],"Passwords must match").required("Confirm Password is required")

})

export default signupSchema