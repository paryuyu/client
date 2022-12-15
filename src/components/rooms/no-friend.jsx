import { Box, Button, Typography } from "@mui/material";

function NoFriends() {
    return ( <> <Box sx={{padding:8}}>       
        <Typography sx={{color:'white', fontSize:25}}>친구추가하기</Typography>
        <Typography sx={{color:'#ddd'}}>사용자의 이메일 주소를 사용하여 친구를 추가할 수 있어요.</Typography>
    
    
        <Button>친구 추가하기</Button>
        </Box></> );
}

export default NoFriends;