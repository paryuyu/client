import Box from '@mui/material/Box';
import { FaUserFriends } from 'react-icons/fa';
import { Typography } from '@mui/material';

const textStyle = {
  marginRight: 3, cursor: 'pointer', color: 'white', paddingLeft: 1, paddingRight: 1, borderRadius: 1
}
const chk = {
  marginRight: 3, cursor: 'pointer', fontWeight: 'bold', color: 'white', paddingLeft: 1, paddingRight: 1, borderRadius: 1, background: '#898c8a'
}

const hover = { background: '#898c8a', fontWeight: 'bold' }

const chkhover = { fontWeight: 'bold', background: '#606363' }

export default function FriendsTop({ onNavi, friendNavi }) {
  //받은요청 4
  //보낸요청 3


  const handleClick = (evt) => {
    onNavi(evt.target.innerText)
  }


  return (<>
    <Box sx={{ bgcolor: '#606363', display: 'flex', justifyContent: 'start', padding: 2, width: '100%' }}>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FaUserFriends style={{ color: '#ddd', fontSize: 20 }} />
        <Typography sx={{ marginRight: 3, marginLeft: 1, color: 'white', fontWeight: 'bold' }} >친구</Typography>
      </Box>

      {friendNavi === 'online' ? <Typography sx={[{ ...chk }, { '&:hover': { ...chkhover } }]} onClick={handleClick}>온라인</Typography> : <Typography sx={[{ ...textStyle }, { '&:hover': { ...hover } }]} onClick={handleClick}>온라인</Typography>}

      {friendNavi === 'all' ? <Typography sx={[{ ...chk }, { '&:hover': { ...chkhover } }]} onClick={handleClick}>모두</Typography> : <Typography sx={[{ ...textStyle }, { '&:hover': { ...hover } }]} onClick={handleClick}>모두</Typography>
      }

      {friendNavi === 'pending' ? <Typography sx={[{ ...chk }, { '&:hover': { ...chkhover } }]} onClick={handleClick}>대기중</Typography> : <Typography sx={[{ ...textStyle }, { '&:hover': { ...hover } }]} onClick={handleClick}>대기중</Typography>
      }

      {friendNavi === 'block' ? <Typography sx={[{ ...chk }, { '&:hover': { ...chkhover } }]} onClick={handleClick}>차단목록</Typography> : <Typography sx={[{ ...textStyle }, { '&:hover': { ...hover } }]} onClick={handleClick}>차단목록</Typography>
      }

      {friendNavi === 'add' ? <Typography sx={[{ marginRight: 3, cursor: 'pointer', color: 'green', paddingLeft: 1, paddingRight: 1, borderRadius: 1, fontWeight: 'bold' , background:'#ddd' }, { '&:hover': { background: '#ddd', color: 'green', fontWeight: 'bold' } }]} onClick={handleClick}>친구 추가하기</Typography> : <Typography sx={[{ marginRight: 3, cursor: 'pointer', color: 'white', paddingLeft: 1, paddingRight: 1, borderRadius: 1, background: 'green' }, { '&:hover': { background: '#ddd', color: 'green', fontWeight: 'bold' } }]} onClick={handleClick}>친구 추가하기</Typography>
      }

    </Box>



  </>);
}
