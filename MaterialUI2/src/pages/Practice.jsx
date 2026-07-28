// import { Box, Stack, Button, Container, Typography, Grid, FormControl, InputLabel, MenuItem, Select, FormControlLabel, Checkbox, Radio, RadioGroup, Switch, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText  } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
//   import AddIcon from "@mui/icons-material/Add";

// function Practice() {
//   return (
//     <>
//     <Drawer
//   open={open}
//   onClose={function () {
//     setOpen(false);
//   }}
// >
//   <Box sx={{ width: 250 }}>
//     <List>
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText primary="Home" />
//         </ListItemButton>
//       </ListItem>

//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText primary="Profile" />
//         </ListItemButton>
//       </ListItem>

//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText primary="Settings" />
//         </ListItemButton>
//       </ListItem>
//     </List>
//   </Box>
// </Drawer>
//     {/* <IconButton>
//   <DeleteIcon />

// </IconButton>
//     <Button    variant="contained" color="error" size="large" >click me</Button>
//     <FormControlLabel
//   control={<Switch />}
//   label="Dark Mode"
// />
//     <RadioGroup>
//   <FormControlLabel
//     value="male"
//     control={<Radio />}
//     label="Male"
//   />

//   <FormControlLabel
//     value="female"
//     control={<Radio />}
//     label="Female"
//   />
// </RadioGroup>
//     <FormControlLabel
//   control={<Checkbox />}
//   label="I agree to Terms & Conditions"
// />
// <FormControl fullWidth>
//   <InputLabel>Select Country</InputLabel>

//   <Select
//     label="Select Country"
//   >
//     <MenuItem value="pakistan">
//       Pakistan
//     </MenuItem>

//     <MenuItem value="india">
//       India
//     </MenuItem>

//     <MenuItem value="usa">
//       USA
//     </MenuItem>
//   </Select>
// </FormControl> */}
//     {/* <Stack
//   direction={{
//     xs: "column",
//     sm: "row",
//   }}
//   spacing={2}
// >
//   <Button>Login</Button>
//   <Button>Signup</Button>
// </Stack> */}
//       {/* <Box>
//         <Container>
//           <Typography>Dashboard</Typography>
//           <Grid container spacing={2} sx={{mt:6}}>
//             <Box sx={{ border: 1, p: 3 }}>
//               <Typography>Students</Typography>
//               <Typography>120</Typography>
//             </Box>

//             <Box sx={{ border: 1, p: 3 }}>
//               <Typography>Students</Typography>
//               <Typography>120</Typography>
//             </Box>

//             <Box sx={{ border: 1, p: 3 }}>
//               <Typography>Students</Typography>
//               <Typography>120</Typography>
//             </Box>
//           </Grid>
//         </Container>
//       </Box> */}

//       {/* <Box
//         sx={{ backgroundColor: "black", color: "white", minHeight: "100vh",display:"flex",justifyContent:"center", alignItems:"center"}}
//       >
//         <Container maxWidth="sm" sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
//           <Stack  spacing={2} sx={{ color: "white",  border:1, height:200, width:180, borderRadius:6, background:"red",boxShadow:24,display:"flex",justifyContent:"center", alignItems:"center" }}>
//             <Typography >Kaleem ullah</Typography>
//             <Typography >kohatiii006@gmail.com</Typography>
//             <Button
//               variant="contained"
//               sx={{ background: "yellow", color: "black", fontWeight: "bold" }}
//             >
//               View Profile
//             </Button>
//           </Stack>
//         </Container>
//       </Box> */}
//     </>
//   );
// }

// export default Practice;

// import { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import { IconButton } from "@mui/material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import {
//   Drawer,
//   Button,
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Menu,
// } from "@mui/material";
// import menuIcon from "../assets/menuIcon.gif"

// function MyDrawer() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//     <Box sx={{pt:1}}>
//       <img  src={menuIcon} alt="menu"  onClick={function () {
//         setOpen(true);
//       }} />
//       </Box>
//       {/* <IconButton
//         onClick={function () {
//           setOpen(true);
//         }}
//       >
//         <MenuIcon />
//       </IconButton> */}

//       <Drawer
//         open={open}

//       >
//         <Box sx={{ width: 250 }}>

//           <IconButton sx={{pl:28}}
//             onClick={function () {
//               setOpen(false);
//             }}
//           >
//             <ChevronLeftIcon />
//           </IconButton>

//           <List>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemText primary="Home" />
//               </ListItemButton>
//             </ListItem>

//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemText primary="Profile" />
//               </ListItemButton>
//             </ListItem>

//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemText primary="Settings" />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

// export default MyDrawer;

import {
  Drawer,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
} from "@mui/material";
import menuIcon from "../assets/menuIcon.gif";
import { useState } from "react";

import React from "react";

function MyDrower() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{pt:1}}>
        <img
          src={menuIcon}
          alt="menu"
          onClick={function () {
            setOpen(true);
          }}
        />
      </Box>

      <Drawer open={open}
      onClose={function(){
        setOpen(false)
      }}>
          <Box sx={{width:245}}>

            <Box sx={{pl:26, pt:2}}>
              <img src={menuIcon} alt="" onClick={function(){
                setOpen(false)
              }} />
            </Box>
        <List>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
        </List>
          </Box>
      </Drawer>
    </>
  );
}

export default MyDrower;
