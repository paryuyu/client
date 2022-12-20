import { Box, Button, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { FriendReqAPI } from "../../util/relationship";

function AddFriend() {
    const [reqEmail, setReqEmail] = useState("");
    const [reqState, setReqState] = useState(null);
    const [ment, setMent] = useState("");
    console.log(reqEmail)
    console.log(reqEmail)

    async function ReqFriend() {
        let req = await FriendReqAPI(reqEmail)
        let json = await req.json()
        if (req.status === 201) {
            setReqState(true)
            setMent(json.msg)
        } else {
            setReqState(false)
            setMent(json.msg)
        }

    }

    const handleReq = () => {
        if (reqEmail.length > 0) {
            ReqFriend();
            setMent("")
            setReqEmail("")
        } else if (reqEmail.length === 0) {
            setMent('이메일을 입력해주세요.')
            setReqEmail("")
        }
    }



    return (<Box p={2}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', pb: 1 }}>친구 추가하기</Typography>
        <Typography sx={{ color: '#ddd', fontWeight: '100', fontSize: 14, pb: 1 }} >친구의 이메일을 이용하여 친구를 추가할 수 있어요.</Typography>
        <Paper
            sx={{ p: '2px 10px', display: 'flex', alignItems: 'center', width: 400, bgcolor: '#333' }}>

            <InputBase
                onChange={(evt) => { setReqEmail(evt.target.value) }}
                sx={{ ml: 1, flex: 1, color: 'white', pt: 0.5, pb: 0.5 }}
                placeholder="사용자 이메일 추가"
                value={reqEmail}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Button variant="contained" sx={[{ bgcolor: '#4c3bd1' }, { '&:hover': { bgcolor: '#3b2cab' } }]} aria-label="search" onClick={handleReq} >
                친구 요청 보내기
            </Button>
            
        </Paper>
        {reqState !== null && <Typography sx={{fontSize:15, fontWeight:'bold'}} color={reqState ? '#40c76f' : '#eb465c'}>{ment}</Typography>}
    </Box>);
}

export default AddFriend;