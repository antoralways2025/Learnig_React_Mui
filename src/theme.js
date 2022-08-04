import { createTheme } from "@mui/material";


export const them= createTheme({
    palette:{
        primary:{
            light: "green" ,
            main:'#4caf50'
        },
        secondary:{
             light:"orage" ,
             main:"#76BA99",
             contrastText:"#5800FF"
        },

        otherColor:{
            light:"lime" ,
            main:"#7DCE13",
            contrastText: '#fff',

        }
        
    }
}) 