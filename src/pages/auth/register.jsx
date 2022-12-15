import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";
import { useState } from "react";
import { RegisterAPI } from "../../util/account";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
    const [userId, setUserId] = useState("");
    const [password,setPassword] = useState("");
    const [userName,setUserName] = useState("");

let navi = useNavigate();
    const handleIdChange = (evt) => {
        setUserId(evt.target.value)
    }
    
    
    const handleNameChange = (evt) => {
        setUserName(evt.target.value)
    }

    
    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    console.log(userId, userName, password)
    //TODO: auth 무조건 true로 가는 중
    const handleRegiClick = async ()=>{
        if(userId.length>0 && userName.length>0 && password.length>0){
            let data={
                userName:userName,
                password:password,
                userId:userId,
                authed:true
            }
            let response = await RegisterAPI(data)
            if(response.result){
                navi("/login")
            }

        }
    }


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: 'black solid 2px',
                    padding: 5,
                    borderRadius: 10,
                    bgcolor: '#333'
                }}
            >

                <Typography component="h1" variant="h5" color='white'>
                    계정만들기
                </Typography>
                <Box noValidate sx={{ mt: 1 }}>
                    <Typography  sx={{ color: 'white', fontSize: 13, mt: 2 }}>아이디*</Typography>
                    <TextField
                    onChange={handleIdChange}
                        required
                        fullWidth
                        InputProps={{ sx: { bgcolor: 'black', color: 'white' } }}
                        name="text"
                        autoFocus
                    />
                    <Box>
                        <Typography sx={{ color: 'white', fontSize: 13, mt: 2 }}>사용자명*</Typography>
                        <TextField
                            onChange={handleNameChange}
                            required
                            fullWidth
                            type="text"
                            id="name"
                            InputProps={{ sx: { bgcolor: 'black', color: 'white', } }}
                        />
                    </Box>

                    <Box>
                        <Typography sx={{ color: 'white', fontSize: 13, mt: 2 }}>비밀번호*</Typography>
                        <TextField
                        onChange={handlePasswordChange}
                            required
                            fullWidth
                            type="password"
                            id="name"
                            InputProps={{ sx: { bgcolor: 'black', color: 'white', } }}
                        />
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleRegiClick}
                        sx={[{ mt: 3, mb: 2, background: '#6b5892', color: 'white' }, { '&:hover': { background: '#6b5895' } }]}
                       
                    >
                        회원가입
                    </Button>

                    <Link to={'/login'} style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', cursor: 'pointer' }}>
                        <Typography sx={{ color: 'white', bgcolor: '#333', fontSize: 'small' }} >로그인으로 돌아가기</Typography>
                    </Link>


                </Box>
            </Box>
        </Container>

    );
};