// import {
//   Box,
//   Button,
//   Container,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";

// function Signup() {
//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           marginTop: 5,
//         }}
//       >
//         <Typography variant="h4">
//           Create Account
//         </Typography>

//         <Stack spacing={2} sx={{ marginTop: 3 }}>
//           <TextField
//             label="Name"
//           />

//           <TextField
//             label="Email"
//           />

//           <TextField
//             label="Password"
//             type="password"
//           />

//           <Button
//             variant="contained"
//           >
//             Sign Up
//           </Button>
//         </Stack>
//       </Box>
//     </Container>
//   );
// }

// export default Signup;

import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import signupSchema2 from "../schemas/SignupSchema";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signupSchema2.validate(formData, {
        abortEarly: false,
      });
      console.log("Form is valid");
      console.log(formData);

      setErrors({});
    } catch (error) {
      console.log(error);

      const validationErrors = {};

      error.inner.forEach((item) => {
        validationErrors[item.path] = item.message;
      });
      setErrors(validationErrors);
    }
  };
  return (
    <>
      <Container sx={{ background: "lightblue", color: "black" }}>
        <Box
          sx={{
            marginTop: 5,
          }}
        >
          <Typography variant="h4">Create Account</Typography>

          <Stack
            component="form"
            spacing={2}
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
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

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Signup;
