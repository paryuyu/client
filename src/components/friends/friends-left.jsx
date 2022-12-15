import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { FaUserFriends } from 'react-icons/fa';
import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, Typography } from '@mui/material';



function Friends() {
    return (<> <List sx={{ width: '100%',  maxWidth: 350, bgcolor: '#535454', padding: 1.5 }}>
        <ListItem sx={[{ bgcolor: '#333', cursor: 'pointer', borderRadius: 5 }, { "&:hover": { bgcolor: '#575958' } }]}>
            <ListItemAvatar>
                <FaUserFriends size={30} color={'white'} />
            </ListItemAvatar>
            <Typography sx={{ color: 'white', fontWeight: 500 }}>친구</Typography>
        </ListItem>

        <Divider sx={{ marginTop: 1 }}></Divider>

        <ListItem sx={{ "display": 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between' }}>

            <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 13 ,width:200}}>다이렉트 메세지</Typography>
            <AddIcon size={13} style={{ color: 'white', cursor: 'pointer' }} />
        </ListItem>
    </List></>);
}

export default Friends;