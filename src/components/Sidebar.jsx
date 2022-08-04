import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'

import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'

import React from 'react'

const Sidebar = ({ click, setMode,mode }) => {
  return ( 
    <Box flex={1} p={2} sx={{display:{xs:'none',sm:"block"}}}> 
    <Box position='fixed'  > 
    
    
    
    
    <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#helloSheikh' >
              <ListItemIcon>
                 <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
                 <ListItemIcon>  <Pages/>  </ListItemIcon> 
                  <ListItemText primary='Page'/>
            </ListItemButton>

          </ListItem> 


          <ListItem disablePadding>

             <ListItemButton>
               <ListItemIcon>  <Group/> </ListItemIcon>  
               <ListItemText  primary="Groups"/>  

             </ListItemButton>
          </ListItem> 

  <ListItem disablePadding>

    
<ListItemButton>
  <ListItemIcon>  <Storefront/> </ListItemIcon>  
  <ListItemText  primary="Marketplace"/>  

</ListItemButton> 

 

</ListItem>
<ListItem disablePadding>

<ListItemButton>
  <ListItemIcon>  <Person/> </ListItemIcon>  
  <ListItemText  primary="Friends"/>  

</ListItemButton>
</ListItem>
<ListItem disablePadding>

<ListItemButton>
  <ListItemIcon>  <Settings/> </ListItemIcon>  
  <ListItemText  primary="Settings"/>  

</ListItemButton>
</ListItem>
<ListItem disablePadding>

<ListItemButton>
  <ListItemIcon>  <AccountBox/> </ListItemIcon>  
  <ListItemText  primary="Profile"/>  

</ListItemButton>
</ListItem> 

     <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
           <ModeNight/>
        </ListItemIcon> 

        <Switch
           onChange={e=>setMode(mode === 'light' ? 'dark':'light')}
   
/>
      </ListItemButton>
     </ListItem>



        </List>
    
    
    
    </Box>  

    </Box>
  )
}

export default Sidebar