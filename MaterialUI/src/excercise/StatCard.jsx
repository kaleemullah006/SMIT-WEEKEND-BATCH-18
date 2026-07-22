import { Card, CardContent, Typography } from "@mui/material"


function StatCard({title,value}) {
  return (
    <>
    <Card sx={{minWidth:200, p:1}}>
        <CardContent>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="h5">{value}</Typography>
        </CardContent>
    </Card>
    
    
    
    
    
    
    </>
  )
}

export default StatCard