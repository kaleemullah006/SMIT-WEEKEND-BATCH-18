import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function TeacherCard({name, subject}) {
  return (
   <Card sx={{minWidth:200, p:1, display:"flex" , flexWrap: "wrap"}}>
    <CardContent>
<Typography variant="h5" color="text.secondary">{name}</Typography>
<Typography variant="body1">{subject}</Typography>
    </CardContent>
   </Card>
  )
}

export default TeacherCard