import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginAPI } from "../util/account";
import { AccountContext } from "../context/account-context";

function LoginPage() {
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    let navi = useNavigate()
    let accountCtx = useContext(AccountContext);
    const handleChangeId = (evt) => {
        setUserId(evt.target.value)
    }

    const handleChangePassword = (evt) =>{
        setPassword(evt.target.value)
    }

    const LoginClick = async ()=>{
        if(userId.length>0 && password.length>0){
            let data={
                userId: userId,
                userPassword: password
            }
            let response = await LoginAPI(data);
           // console.log(response)
            if(response.result){
                accountCtx.setToken(response.token)
                localStorage.setItem("jwt",response.token)
                navi("/channels/@me")
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
                <Avatar sx={{ m: 1, bgcolor: '#fff' }}>
                    <LockIcon style={{ color: '#333' }} />
                </Avatar>
                <Typography component="h1" variant="h5" color='white'>
                    돌아오신 것을 환영해요!
                </Typography>
                <Typography color='white'>
                    다시 만나다니 너무 반가워요!
                </Typography>

                <Box noValidate sx={{ mt: 1 }}>
                    <Typography sx={{ color: 'white', fontSize: 13, mt: 2 }}>아이디*</Typography>

                    <TextField
                        onChange={handleChangeId}
                        required
                        fullWidth
                        InputProps={{ sx: { bgcolor: 'black', color: 'white' } }}
                        autoFocus
                    />
                    <Box>

                        <Typography sx={{ color: 'white', fontSize: 13, mt: 2 }}>비밀번호*</Typography>
                        <TextField
                            onChange={handleChangePassword}
                            required
                            fullWidth
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{ sx: { bgcolor: 'black', color: 'white', } }}
                        />
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        sx={[{ mt: 3, mb: 2, background: '#6b5892', color: 'white' }, { '&:hover': { background: '#6b5895' } }]}
                        onClick={LoginClick}
                    >
                        로그인
                    </Button>

                    <Link to={'/register'} style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', cursor: 'pointer' }}>
                        <Typography sx={{ color: 'white', bgcolor: '#333', fontSize: 'small' }} >회원가입으로 바로가기</Typography>
                    </Link>


                </Box>
            </Box>
        </Container>

    );
}

export default LoginPage;