import * as React from 'react';
import Box from '@mui/material/Box';
import { FaUserFriends } from 'react-icons/fa';
import { Typography } from '@mui/material';
import FriendsTop from '../rooms/friends-top';
import FriendsMain from '../rooms/friends-main';
export default function FriendsRight() {
  return (<Box>
   <FriendsTop/>
   <FriendsMain/>
  </Box>);
};