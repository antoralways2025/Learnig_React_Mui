 
 
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import Add from './components/Add'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
  
const App = () => {  

  const [mode,setMode]=useState('dark') 

  const [click,setClick]=useState('none')

  const darkTheme=createTheme({
    palette:{
      mode
    }
  })
  return ( 
    <ThemeProvider theme={darkTheme}>
       
    
    <Box bgcolor= "background.default"  color="text.primary"> 
 {/* navbar  */}  

 <Navbar  setClick={setClick} click={click} />
   
    <Stack direction='row'  spacing={2} justifyContent='space-between'>
    <Sidebar click={click}    setMode={setMode} mode={mode} />
      <Feed/>
      <Rightbar />
    </Stack>
     
     <Add/>

    </Box> 

    </ThemeProvider>
  ) 
}

export default App