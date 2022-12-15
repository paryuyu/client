import Box from '@mui/material/Box';
import { FaUserFriends } from 'react-icons/fa';
import { Typography } from '@mui/material';


export default function FriendsTop() {


    return ( <>
     <Box sx={{ bgcolor: '#606363', padding: 2, width:'1510px',display: 'flex', justifyContent: 'start' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FaUserFriends style={{ color: '#ddd', fontSize: 20 }} />
        <Typography sx={{ marginRight: 3, marginLeft: 1, color: 'white', fontWeight: 'bold' }}>친구</Typography>
      </Box>

      <Typography sx={[{ marginRight: 3, cursor: 'pointer', color: 'white', paddingLeft: 1, paddingRight: 1, borderRadius: 1 }, { '&:hover': { background: '#898c8a', fontWeight: 'bold' } }]}>온라인</Typography>

      <Typography sx={[{ marginRight: 3, cursor: 'pointer', color: 'white', paddingLeft: 1, paddingRight: 1, borderRadius: 1 }, { '&:hover': { background: '#898c8a', fontWeight: 'bold' } }]}>모두</Typography>

      <Typography sx={[{ marginRight: 3, cursor: 'pointer', color: 'white', paddingLeft: 1, paddingRight: 1, borderRadius: 1 }, { '&:hover': { background: '#898c8a', fontWeight: 'bold' } }]}>대기중</Typography>

      <Typography sx={[{ marginRight: 3, cursor: 'pointer', color: 'white', paddingLeft: 1, paddingRight: 1, borderRadius: 1 }, { '&:hover': { background: '#898c8a', fontWeight: 'bold' } }]}>차단목록</Typography>
      
      <Typography sx={[{ marginRight: 3, cursor: 'pointer', color: 'white', paddingLeft: 1, paddingRight: 1, borderRadius: 1, background: 'green' }, { '&:hover': { background: '#ddd', color: 'green', fontWeight: 'bold' } }]}>친구 추가하기</Typography>
    </Box>

    
    
    </> );
}
