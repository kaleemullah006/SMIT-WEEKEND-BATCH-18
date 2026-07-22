// import { Box, Grid, Stack } from "@mui/material"
// import Navbar from "./component/Navbar"
// import StatCard from "./component/Card"

import { ThemeProvider } from "@emotion/react";
import Dashboard from "./excercise/Dashboard";
import { Box, Button, CssBaseline } from "@mui/material";
import { useState } from "react";
import GetTheme, { getTheme } from "./theme.js";

// // function App() {

// //   return (
// //     <>
// //       <Navbar/>
// //     <Box sx={{display: 'flex', flexWrap:'wrap', gap: 2, p: 2}}>
// //       <Box sx={{ width: { xs: '100%', sm: '48%', md: '23%' } }}>
// //     <StatCard title="Quran Teacher" value="Online quran academy" />
// //   </Box>
// //       <Box sx={{ width: { xs: '100%', sm: '48%', md: '23%' } }}>
// //     <StatCard title="Quran Teacher" value="Online quran academy" />
// //   </Box>
// //       <Box sx={{ width: { xs: '100%', sm: '48%', md: '23%' } }}>
// //     <StatCard title="Quran Teacher" value="Online quran academy" />
// //   </Box>
// //       <Box sx={{ width: { xs: '100%', sm: '48%', md: '23%' } }}>
// //     <StatCard title="Quran Teacher" value="Online quran academy" />
// //   </Box>

// //   </Box>
// //      {/* <StatCard title="Quran Teacher" value="Onlion quran academy"/>

// //      <StatCard title="Math Teacher" value="Onlion math academy"/>
// //      <StatCard title="physics Teacher" value="Onlion physics academy"/>
// //      <StatCard title="english Teacher" value="Onlion english academy"/>  */}
// // {/* <Stack direction="row"  spacing={2} sx={{mt:4}}>
// //   <StatCard title="Math Teacher" value="Onlion math academy"/>
// //      <StatCard title="physics Teacher" value="Onlion physics academy"/>
// //      <StatCard title="physics Teacher" value="Onlion physics academy"/>
// //      <StatCard title="physics Teacher" value="Onlion physics academy"/>
// // </Stack> */}

// //     </>
// //   )
// // }

// // export default App

// function App() {
//   return (
//   <>

//     <Grid size={{sx:12, sm:6, md:3}}>
//   <Navbar/>
//   </Grid>

//   <Grid container spacing={2} sx={{mt:4}}>
//     <Grid size={{sx:12, sm:6, md:3}}>
//       <StatCard value="quran teacher" title="quran Academy" />

//     </Grid>
//     <Grid size={{sx:12, sm:6, md:3}}>
//       <StatCard value="quran teacher" title="quran Academy" />

//     </Grid>
//     <Grid size={{sx:12, sm:6, md:3}}>
//       <StatCard value="quran teacher" title="quran Academy" />

//     </Grid>
//     <Grid size={{sx:12, sm:6, md:3}}>
//       <StatCard value="quran teacher" title="quran Academy" />

//     </Grid>

//   </Grid>

//   </>
//   )
// }

// export default App

function App() {
  const [mode, setMode] = useState("light");
  const theme = GetTheme(mode);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            variant="outlined"
          >
            {mode ==="light" ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </Button>
        </Box>
        
      <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
