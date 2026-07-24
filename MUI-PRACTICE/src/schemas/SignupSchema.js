import * as yup from "yup"

const signupSchema2 = yup.object({
    name:yup.string().required("Name is Required"),
    email:yup.string().email("Enter a valid email").required("Email is Required"),
   password:yup.string().min(6,"Password must be at least 6 characters").required("Password is Required"),
})

export default signupSchema2