import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FriendsListFindAPI } from "../../util/relationship";

import NoFriends from "./no-friend";
import Pending from "./pending";
import YesFriends from "./yes-friend";

export default function FriendsMain() {

    

    return ( <Box sx={{bgcolor:'#606363'}}>
        <Pending/>
        <Divider/>
        {/** 친구가 없을 때 */}
        <NoFriends/>

        {/**친구가 있을 때 */}
        <YesFriends/>
    </Box> );
}