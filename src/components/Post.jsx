import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
     

<Card  sx={{margin:5}} >
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: 'black',color:"lime" }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Jone Doe"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="200"
        image="https://images.pexels.com/photos/11427593/pexels-photo-11427593.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          
        <Checkbox   icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:"red"}} />} />
 

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
  
      </CardActions>
     
    </Card>
     
  )
}

export default Post