import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FaDiscord } from 'react-icons/fa';

function YesFriends() {


    //온라인 몇명
    //온라인인 사람만 띄워주기

    return (<Box sx={{ padding: 8 }}>

        <Typography sx={{ color: 'white', fontSize: 'small' }}>온라인-1명</Typography>

        <Divider sx={{ marginBottom: 3, marginTop: 2, background: 'white' }}></Divider>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <Avatar sx={{ marginRight: 1, background: 'red' }}>
                <FaDiscord size={25} />
            </Avatar>
            <Box>
                <Typography sx={{ color: 'white' }}>유유유</Typography>
                <Typography sx={{ color: 'white', fontSize: 10 }}>온라인</Typography>
            </Box>
        </Box>
    </Box>);
}

export default YesFriends;