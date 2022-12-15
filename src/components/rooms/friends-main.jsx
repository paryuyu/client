import { Box, Button, Container, Divider, Typography } from "@mui/material";
import NoFriends from "./no-friend";
import YesFriends from "./yes-friend";

export default function FriendsMain() {
    
    
    
    
        
    

    return ( <Box sx={{bgcolor:'#606363', height:'94.6vh'}}>
        <Divider/>
        {/** 친구가 없을 때 */}
        <NoFriends/>

        {/**친구가 있을 때 */}
        <YesFriends/>
    </Box> );
}