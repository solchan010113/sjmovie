import { Box, Button, TextField } from '@mui/material'
import KakaoLogo from '../../assets/images/kakao-logo.png'
import NaverLogo from '../../assets/images/naver-logo.png'
import './signin.scss'

export default function SignIn() {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField size="small" className="login-input" id="filled-required" label="Email" variant="standard" />
        <TextField
          className="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </Box>
      <Button variant="outlined" className="login-btn">
        로그인
      </Button>
      <button className="social-login-btn kakao-login-btn">
        <img src={KakaoLogo} />
        카카오 로그인
      </button>
      <button className="social-login-btn naver-login-btn">
        <img src={NaverLogo} />
        네이버 로그인
      </button>
    </>
  )
}
