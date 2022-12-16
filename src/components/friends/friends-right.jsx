import * as React from 'react';
import Box from '@mui/material/Box';
import { FaUserFriends } from 'react-icons/fa';
import { Divider, Typography } from '@mui/material';
import FriendsTop from '../rooms/friends-top';
import FriendsMain from '../rooms/friends-main';
import Pending from '../rooms/pending';
import { FriendsListFindAPI } from '../../util/relationship';
import NoFriends from '../rooms/no-friend';

export default function FriendsRight() {
  let [friendNavi, setFriendNavi] = React.useState();
  let [friendList,setFriendList] = React.useState();
  async function friendsFind() {
    let result = await FriendsListFindAPI();
    let json = await result.json()
    setFriendList(json)
  }
  //받은 친구 요청 4
  //보낸 친구 요청 3
  React.useEffect(() => {

    friendsFind()

  }, [])

  const handleNavi = (val) => {

    switch (val) {
      case '대기중':
        setFriendNavi('pending')
        break;
      case '차단목록':
        setFriendNavi('block')
        break;
      case '온라인':
        setFriendNavi('online')
        break;
      case '모두':
        setFriendNavi('all')
        break;
      case '친구 추가하기':
        setFriendNavi('add')
        break;
    }
  }

  console.log(friendList)



  return (<Box sx={{ width: '100%', height: '100vh' }}>
    <FriendsTop onNavi={handleNavi} friendNavi={friendNavi}/>
    <Divider />
    {/** 여기서 컴포넌트 바꿔치워주기 */}
    {friendNavi === 'online' && <NoFriends />}

    {friendNavi === 'pending' && 
      <Pending datas={friendList}/>
   }


  </Box>);
};