import { createTheme } from '@mui/material'


export const getTheme = (mode) => 
  createTheme({
    palette:{
        mode:mode,
        primary:{
            main:'#1565C0',
        }
    }
  })


export default getTheme