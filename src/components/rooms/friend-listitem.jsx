import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FaDiscord } from 'react-icons/fa';
import { IconButton, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { useContext, useEffect, useState } from 'react';
import { FriendAccAPI } from '../../util/relationship';
import { RelactionContext } from '../../context/relation-context';
function FriendListItem({ item }) {
    const [accState, setAccState] = useState(false)
    //받은 친구 요청 4
    //보낸 친구 요청 3

    //취소하면 디비 삭제해주기.
    const handleDelete = () => {

    }

    //친구 허용 디비 생성해주기.
    const handleAccess = async () => {
        if (item.type === 4) {
            let req = await FriendAccAPI(item.user);
            console.log(await req.json())
        }
    }


    return (<>
        {item.type === 3 || item.type === 4 ? <List sx={{ margin: 0.5, borderRadius: 2 }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: '#f54949' }}>
                        <FaDiscord />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.user} sx={{ color: '#fff' }} secondary={item.type === 4 ? "받은친구요청" : "보낸친구요청"} />
                {/* <IconButton onClick={handleDelete}>
                    <ClearIcon sx={{ color: 'white' }} />
                </IconButton> */}

                {item.type == 4 &&
                    <IconButton onClick={handleAccess} >
                        <CheckIcon sx={{ color: 'white' }} />
                    </IconButton>
                }

            </ListItem>
        </List> : <></>}
    </>);
}

export default FriendListItem;