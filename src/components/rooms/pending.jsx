import { Typography } from '@mui/material';
import * as React from 'react';

import FriendListItem from './friend-listitem';

function Pending({ datas }) {
  //친구리스트
  console.log('pending', datas)

  //TODO: datas가 친구 리스트임 뿌려주자

  React.useEffect(() => {

  }, [])

  return (<>

      {datas.map((one, index) => {
        return <FriendListItem item ={one} key={index} />
      })
}
 
  </>);
}

export default Pending;