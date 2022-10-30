import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


import { Typography } from '@mui/material';

const ListItemm = () => {
  return (  
    <List sx={{ overflow: 'auto', maxHeight: 200}}>
        <ListItem>
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"/>
              </ListItemIcon> 
              <ListItemText>
                <Typography variant={'subtitle2'}>Learn programming by 12am</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        <ListItem>
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"/>
              </ListItemIcon> 
              <ListItemText>
                <Typography variant={'subtitle2'}>Learn how to cook by 1pm</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        <ListItem>
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"/>
              </ListItemIcon> 
              <ListItemText>
                <Typography variant={'subtitle2'}>Pick up the kids by 2pm</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        <ListItem>
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"/>
              </ListItemIcon> 
              <ListItemText>
                <Typography variant={'title'}>Have lunch by 3pm</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        <ListItem>
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"/>
              </ListItemIcon> 
              <ListItemText>
                <Typography variant={'title'}>Go visit mom by 4pm</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
    </List>   
);
}
 
export default ListItemm ;