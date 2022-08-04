import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';





const Add = () => { 


 const [open,setOpen]=useState(false) ;

 
  const StyledModal=styled(Modal)(({theme})=>({

    display:'flex',
    alignItems:'center' ,
    justifyContent:'center' ,


  })) 
 
  const UserBox=styled(Box)({
    display:'flex',
    alignItems:'center' ,
     gap:'10px',
     marginBottom:'10px'
  })

  return (
    < >  
      <Box sx={{position:'fixed' , bottom:50,left:30}}> 
    <Tooltip onClick={(e)=>setOpen(true)} title="Add"  
    enterDelay={300} leaveDelay={4000}
      >

        <Fab  sx={{background:"black",color:"lime",'&:hover':{color:"greenyellow",background:"black"}}} aria-label="add" >

 
            <AddIcon/>
        </Fab> 



    </Tooltip> 
    


      
<StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box     sx={{width:{xm:350,md:400} , height:{xm:200,md:280}} }  bgcolor= "background.default"    color="text.primary" borderRadius={5} p={3}  >
     
     <Typography variant='h6' color="gray" textAlign='center'> Create Post </Typography> 

      <UserBox>
        <Avatar src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600' sx={{width:30,height:30}}/>

        <Typography variant='span' fontWeight={500}>Jon Doe</Typography>



      </UserBox> 



      <TextField
          id="standard-multiline-static"
         sx={{width:"100%"}}
          multiline
          rows={4}
          placeholder="What's on your Mind?"
          variant="standard"
        />
   
          <Stack direction='row' gap={1} mt={2} mb={3}>
                  <EmojiEmotions color='primary' sx={{cursor:"pointer"}}/> 
                  <Image color='secondary' sx={{cursor:"pointer"}}/>
                  <VideoCameraBack color='success' sx={{cursor:"pointer"}}/>
                  <PersonAdd color='error' sx={{cursor:"pointer"}} />
          </Stack> 
          <ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
            <Button>Post</Button> 
            <Button sx={{width:'100px'}}> <DateRange/>   </Button>
          </ButtonGroup>
  </Box>
</StyledModal> 

</Box>


    </>
  )
}

export default Add