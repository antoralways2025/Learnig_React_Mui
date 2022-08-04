import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
// import { PetsIcon } from '@mui/icons-material';

const StyledToolbar= styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
  margin:0,
  padding:0
  
}) 



const Search=styled('div')(({theme})=>({
   backgroundColor:"white",
   padding:"0 10px " ,
   borderRadius:theme.shape.borderRadius ,
   width:"40%",
    
})) 


const Icons=styled('Box')(({theme})=>({
   display:"none"
   ,gap:"20px",
   alignItems:"center",
   [theme.breakpoints.up('sm')]:{
    display:"flex"
   }
  
}))


 const UserBox=styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center' ,
  gap:"10px",
  [theme.breakpoints.up('sm')]:{
    display:"none"
   }
 }))

const Navbar = ({setClick,click}) => { 

   const  [open,setOpen]=useState(false) ; 



   const handleToggle=(e)=>{ 

         console.log("IT's clicked")
    setClick(click==='none'? 'block':'none')
   }

  return (
    <AppBar position='sticky' > 

      <StyledToolbar> 
        
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"},textTransform:"uppercase"}}> Antor Sheikh </Typography> 

         <Pets  onClick={handleToggle} sx={{display:{xm:"block",sm:"none"}}} />  
 

         <Search> 
 
         <InputBase  placeholder='Search..'     />
         </Search>
            <Icons> 

            <Badge badgeContent={2} color="error"> 

                      <Mail  color="inherit" /> 
                      
             </Badge> 

 

            <Badge badgeContent={5} color="error"> 


            <Notifications  color='inherit' />


            </Badge>


            <Avatar 
             
            
            sx={{width:30,height:30}} src="https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-1/278972668_531984895117943_8886794824222764797_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH42VQD-mtg7bLy63vTChkwjY4zBj-_4DyNjjMGP7_gPA7e2nmplOTgTaX4Z-sxuv1Q6FsgIwiL5C61xA9CC0dN&_nc_ohc=usxHwGLmvK4AX9QlKDs&_nc_ht=scontent.fdac2-1.fna&oh=00_AT8FowShARfZtF6-JsNLsFHi1_ZBlxRoCkKaBwpDv0qp7A&oe=62E898EB" 
            
             onClick={e=>setOpen(true)}
            />
 


            </Icons> 


            <UserBox onClick={e=>setOpen(true)}>
            <Avatar sx={{width:30,height:30}} src="https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-1/278972668_531984895117943_8886794824222764797_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH42VQD-mtg7bLy63vTChkwjY4zBj-_4DyNjjMGP7_gPA7e2nmplOTgTaX4Z-sxuv1Q6FsgIwiL5C61xA9CC0dN&_nc_ohc=usxHwGLmvK4AX9QlKDs&_nc_ht=scontent.fdac2-1.fna&oh=00_AT8FowShARfZtF6-JsNLsFHi1_ZBlxRoCkKaBwpDv0qp7A&oe=62E898EB"/>
            </UserBox>

           {/* <Typography variant='span'>  Jone  </Typography> */}

      </StyledToolbar> 

      <Menu  
      // id='demo-positioned-menu' 
      // aria-labelledby='demo-positioned-button' 
      open={open} 
      onClose={e=>setOpen(false)}
      
      anchorOrigin={
        {
          vertical:"top",
          horizontal:'right'
        }
      } 

      transformOrigin={{
        vertical:'top',
        horizontal:'right'
      }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>


    </AppBar>
  )
}

export default Navbar