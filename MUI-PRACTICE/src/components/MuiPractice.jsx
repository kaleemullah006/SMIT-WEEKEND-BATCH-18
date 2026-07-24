import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function MuiPractice() {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          color: "white",
          background: "blue",
          fontWeight: "bold",
          borderRadius: 14,
          display: "flex",
          justifyContent: "center",
        }}
      >
        click me
      </Button>

      <Box
      sx={{
        background:"lightblue",
        padding:3,
        margin:2,
        borderRadius: 8,
        fontWeight:"bold",
        color:"black"
      }}
      >Hello</Box>


      <Container
       sx={{
        background:"purple",
        color:"white",
        fontWeight:"bold",
        padding:3,
        margin:2,
        borderRadius: 8
      }}
      >Hello</Container>


      <Typography variant="h4">Create Account</Typography>

      <TextField label="Email" type="" sx={{ mt: 1 }} />

      <Button variant="contained" sx={{ mt: 1, mb: 1 }}>
        sign Up
      </Button>

      <Stack spacing={2}>
        <TextField label="Email" />
        <TextField label="Password" />
        <Button variant="outlined">submit</Button>
      </Stack>

      <Card>
        <CardContent>
            Signup Form
        </CardContent>
      </Card>
    </>
  );
}

export default MuiPractice;
