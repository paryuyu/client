import { Box, Typography } from "@mui/material";
import * as React from 'react';

import Friends from "../../components/friends/friends-left";
import FriendsRight from "../../components/friends/friends-right";


export default function Mepage() {



    return (<>
        <Box sx={{ display: 'flex', 'flexDirection': 'row' }}>
            <Friends />
            <Box>
            <FriendsRight/>
            </Box>
        </Box>



        <></>


    </>)
}