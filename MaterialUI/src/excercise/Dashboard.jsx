import { Box, Grid, Stack } from "@mui/material"
import Navbar2 from "./Navbar2"
import StatCard from "./StatCard"
import TeacherCard from "./TeacherCard"


function Dashboard() {
  return (<>

{/* NAVBAR  */}

  <Navbar2/>

{/* CARD  */}

<Box sx={{px:2}}>


  <Grid container spacing={2} sx={{mt:1} }>
    <Grid size={{xs:12, sm:6, md:3}}>
     <StatCard title="Total Students" value="20"/>   
    </Grid>
    <Grid size={{xs:12, sm:6, md:3}}>
     <StatCard title="Active Classes" value="4"/>   
    </Grid>
    <Grid size={{xs:12, sm:6, md:3}}>
     <StatCard title="This Month Revenue" value="20000"/>   
    </Grid>
    <Grid size={{xs:12, sm:6, md:3}}>
     <StatCard title="Pending Payment" value="9000"/>   
    </Grid>
  </Grid>


  {/* TEACHER CARD  */}

  <Stack direction="row" spacing={2} sx={{ flexWrap:"wrap", justifyContent:"center", mt:4}}>
    <TeacherCard name="Imran" subject="English"/>
    <TeacherCard name="Shahid" subject="Islamiat"/>
    <TeacherCard name="Subhan" subject="Physics"/>
  </Stack>
</Box>
  </>
  )
}

export default Dashboard