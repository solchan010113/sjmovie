import '../assets/css/sign.scss'
import MovieLogo from '../assets/images/movie-logo.png'
import { useState } from 'react'
import Tab from '@mui/material/Tab'
import { Tabs } from '@mui/material'
import SignIn from '../components/sign/SignIn'
import SignUp from '../components/sign/SignUp'
import { Link } from 'react-router-dom'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function SignMain() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className="sign-container">
      <Link to="/">
        <img src={MovieLogo} />
      </Link>
      <div className="wrap">
        <Tabs className="tabs" value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="로그인" tabIndex={0} {...a11yProps(0)} />
          <Tab label="회원가입" tabIndex={1} {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <SignIn />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignUp />
        </CustomTabPanel>
      </div>
    </div>
  )
}
