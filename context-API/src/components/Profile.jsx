// import { useContext, useState } from "react"
// import { ThemeContext } from "../context/UserContext"


// function Profile() {
//     const {theme , setTheme} = useContext(ThemeContext)
//   function changeName() {
//     setTheme(theme === "dark" ? "light" : "dark")

//   }
//   return (<>
  
  
  
//   <button className="bg-blue-400 px-4 py-2 rounded-3xl font-bold" onClick={changeName}>change name</button>
  
  
//   </>


    
//   )
// }

// export default Profile

import {
  Button,
  Typography,
  TextField,
  Container,
} from "@mui/material";

function Profile() {
  return (
    <Container>

      <Typography variant="h4">
        Login Form
      </Typography>

      <TextField
        label="Email"
        fullWidth
      />

      <Button
        variant="contained"
      >
        Login
      </Button>

    </Container>
  );
}

export default Profile;