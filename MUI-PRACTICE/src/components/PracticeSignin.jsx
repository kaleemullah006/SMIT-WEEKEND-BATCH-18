import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import signinSchema from "../schemas/SigninSchema";
import supabase from "../supabase/supabaseClient";
import { useNavigate } from "react-router-dom";

function PracticeSignin() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
}
async function handleSubmit(event) {
  event.preventDefault();

  try {
    await signinSchema.validate(formData,{
        abortEarly:false
    })
    
    
  } catch (error) {
    
    const validationErrors ={}

    error.inner.forEach((item)=>{
        validationErrors[item.path] = item.message
    })
    setErrors(validationErrors)
    return
    
  }
  
  const {data,error} = await supabase.auth.signInWithPassword({
      email:formData.email,
      password:formData.password,
    })
    if(error){
        alert(error.message)
        console.log(data)
        return;
    }

    alert("Login successfull")

    navigate("/dashboard")


    
}

  return (
    <>
      <Container sx={{ maxWidth: "sm", p: 2 }}>
        <Box sx={{ color:"black"}}>
          <Typography variant="h4">LOGIN</Typography>
          <Stack spacing={2}
           component="form"
           onSubmit={handleSubmit}
            >
            <TextField 
            label="Email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
            helperText={errors.password}
            />
            <Typography>if don't have account <a href="/signup">signup</a></Typography>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default PracticeSignin;
