import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { Outlet, useNavigate } from 'react-router-dom';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { AccountContext } from '../../context/account-context';
import LogoutIcon from '@mui/icons-material/Logout';
const iconStyle = {
    cursor: "pointer",
    backgroundColor:'#3f4040'
}


export default function Layout() {
 const [meIcon, setMeIcon] = React.useState(false);
 const [channels, setChannels] = React.useState(false);
 const [add, setAdd] = React.useState(false);
 const [logout,setLogout] = React.useState(false);
//TODO: name 받아오기

    const navi = useNavigate();
    const ctx = React.useContext(AccountContext);

    //토큰 유효성 검사 해주기
    React.useEffect(()=>{
        
        if(ctx.status === "unauthenticated"){
            navi("/");
        }

    },[ctx.status])

    
    return (
    <Box sx={{display:'flex',  height: '100%' ,bgcolor:'#606363' }}>
        <List sx={{ width: '100%', maxWidth: 80, display:'flex', flexDirection:'column', alignItems:'center',bgcolor:'#232424' }}>
            <ListItem
                onMouseOver={() => { setMeIcon(true) }}
                onMouseLeave={() => {setMeIcon(false) }}
                onMouseDown={() => {navi('/channels/@me')}}
            >
                <ListItemAvatar>
                    <Avatar  style={{ ...iconStyle }}>
                        <InsertCommentIcon style={{ ...iconStyle }} />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>

            <ListItem
                onMouseOver={() => { setChannels(true) }}
                onMouseLeave={() => {setChannels(false) }}
                onMouseDown={() => {/**채널의 아이디로 보내주기 */}}
            >
                <ListItemAvatar>
                    <Avatar style={{ ...iconStyle }}>
                
                        <PermIdentityIcon/>
                    </Avatar>
                </ListItemAvatar>

            </ListItem>


            <ListItem
                onMouseOver={() => { setAdd(true) }}
                onMouseLeave={() => {setAdd(false) }}
                onMouseDown={() => {/**클릭 이벤트 */}}
            >
                <ListItemAvatar>
                    <Avatar style={{ ...iconStyle }}>
                        <AddIcon />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>


            
            <ListItem
                onMouseOver={() => { setLogout(true) }}
                onMouseLeave={() => {setLogout(false) }}
                onMouseDown={() => {ctx.Logout(); navi('/login');}}
            >
                <ListItemAvatar>
                    <Avatar style={{ ...iconStyle }}>
                        <LogoutIcon />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
        </List>

{meIcon&& 
        <Typography sx={{position:'absolute', top:'23px', left:'65px', backgroundColor:'steelblue', padding:'3px', borderRadius:'10px', color:'white', paddingLeft:'10px', paddingRight:'10px', zIndex:100}}>다이렉트 메세지</Typography>
}

{channels && ctx.data ?
    <Typography sx={{position:'absolute', top:'75px', left:'65px', backgroundColor:'steelblue', padding:'3px', borderRadius:'10px', color:'white', paddingLeft:'10px', paddingRight:'10px', zIndex:100}}>{ctx.data?.user?.name}님의 서버</Typography>:<></>
}

{add &&
    <Typography sx={{position:'absolute', top:'135px', left:'65px', backgroundColor:'steelblue', padding:'3px', borderRadius:'10px', color:'white', paddingLeft:'10px', paddingRight:'10px', zIndex:100}}>서버 추가하기</Typography>
}
        

{logout &&
    <Typography sx={{position:'absolute', top:'190px', left:'65px', backgroundColor:'steelblue', padding:'3px', borderRadius:'10px', color:'white', paddingLeft:'10px', paddingRight:'10px', zIndex:100}}>로그아웃하기</Typography>
}
        

<Outlet/>
    
    </Box>

    
    
    
    );
}
