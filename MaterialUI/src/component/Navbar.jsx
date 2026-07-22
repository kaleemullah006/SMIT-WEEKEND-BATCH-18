import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'

function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          borderRadius: "12px",
          background: "black",

          mt: 2,
          width: "auto",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Quran Academy
          </Typography>
          <Stack direction="row" spacing={2}
          sx={{display:{xs:'none', md: 'flex'}}}>
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Students</Button>
            <Button color="inherit">Logout</Button>
          </Stack>

<IconButton
color="inherit"
sx={{display:{xs:'flex', md:'none'}}}>
    <MenuIcon/>

</IconButton>


        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
