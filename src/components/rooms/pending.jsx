import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FaDiscord } from 'react-icons/fa';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

function Pending({datas}) {
    
    console.log(datas,'datas')
    //TODO: datas가 친구 리스트임 뿌려주자

    
    return ( <>
      <List sx={{ width: '100%' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaDiscord />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="네임" secondary="받은친구요청" />

        <IconButton>
            <ClearIcon sx={{color:'white'}}/>
        </IconButton>

        <IconButton>
            <CheckIcon sx={{color:'white'}}/>
        </IconButton>

      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaDiscord />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="네임" secondary="보낸친구요청" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaDiscord />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="네임" secondary="July 20, 2014" />
      </ListItem>
    </List>
    
    </> );
}

export default Pending;