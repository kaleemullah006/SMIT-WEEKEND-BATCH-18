import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import signupSchema2 from "../schemas/SignupSchema2";
import { useState } from "react";
import supabase from "../supabase/supabaseClient";

import { useNavigate } from "react-router-dom";


function PracticeSignup() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

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
      await signupSchema2.validate(formData, {
        abortEarly: false,
      });

      setErrors({});
    } catch (error) {
      const validationErrors = {};

      error.inner.forEach((item) => {
        validationErrors[item.path] = item.message;
      });

      setErrors(validationErrors);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    console.log("Form is valid");
    console.log(formData);

    alert("Account Created Successfuly");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    navigate("/signin")
  }

  return (
    <>
      <Container sx={{ maxWidth: "sm" }}>
        <Box sx={{ color:"black"}}>
          <Typography variant="h4">Create Account</Typography>

          <Stack spacing={2} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
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
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
            />
            <Typography>
                if you have an account <a href="/signin">Login</a>
            </Typography>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default PracticeSignup;
