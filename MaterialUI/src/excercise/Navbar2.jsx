import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
function Navbar2() {
  return (
    <AppBar position="static" 
    sx={{color:"white", background:"blue", borderRadius:12
     , mt:1}}>
      <Toolbar >
        <Typography variant="h6" sx={{flexGrow:1}}>Quran Academy</Typography>

        <Stack direction="row" spacing={2} sx={{display:{xs:'none', md:'flex'}}}>
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Students</Button>
            <Button color="inherit">Logout</Button>
        </Stack>
        <IconButton sx={{display:{xs:'flex', md:'none' , color:'white'}}}>
            <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar2;
