import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";
function LoginPage() {


    const handleSubmit = () => {

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
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Typography sx={{ color: 'white', fontSize: 13, mt: 2 }}>이메일*</Typography>
                    <TextField
                        required
                        fullWidth
                        InputProps={{ sx: { bgcolor: 'black', color: 'white' } }}
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <Box>
                        <Typography sx={{ color: 'white', fontSize: 13, mt: 2 }}>비밀번호*</Typography>
                        <TextField

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