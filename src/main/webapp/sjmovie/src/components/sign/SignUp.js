import './signup.scss'
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

export default function SignUp() {
  return (
    <>
      <form id="sign-up-form" name="sign-up-form">
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">email</InputLabel>
          <Input
            id="standard-adornment-password"
            type="email"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <EmailIcon sx={{ color: 'white' }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField required size="small" className="login-input" label="phone" variant="standard" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slotProps={{
              textField: {
                openPickerButton: { color: 'primary' },
                label: 'BirthDay',
                variant: 'standard',
                className: 'date-picker',
              },
            }}
          />
        </LocalizationProvider>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel
              value="female"
              control={
                <Radio
                  sx={{
                    color: 'white',
                  }}
                />
              }
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio
                  sx={{
                    color: 'white',
                  }}
                />
              }
              label="Male"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="outlined" className="login-btn">
          회원가입
        </Button>
      </form>
    </>
  )
}
