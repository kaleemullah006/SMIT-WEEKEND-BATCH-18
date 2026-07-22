import {Card , CardContent, Typography, Button, Box} from "@mui/material"


function StatCard({title, value}) {
  return (
    <Card sx={{minWidth:200, p:1}}>
<CardContent>
    <Typography variant="body2" color="text.secondary">
{title}
    </Typography>
    <Typography variant="h5" fontWeight="bold">
        {value}
    </Typography>
</CardContent>
    </Card>
  )
}

export default StatCard