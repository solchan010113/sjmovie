import '../assets/css/layout/header.scss'
import { Link, NavLink } from 'react-router-dom'
import { IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import movieLogo from '../assets/images/movie-logo.png'
import pediaNav from '../assets/images/pedia-nav.png'

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <nav>
          <h1>
            <Link to="/">
              <img src={movieLogo} />
            </Link>
          </h1>
          <ul>
            <li>
              <NavLink to="movie" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                영화
              </NavLink>
            </li>
            <li>
              <NavLink to="cinema" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                극장
              </NavLink>
            </li>
            <li>
              <NavLink to="ticketing" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                예매
              </NavLink>
            </li>
            <li>
              <NavLink to="ticketing" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                <img src={pediaNav} />
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}>
            <InputBase />
            <IconButton type="button" sx={{ p: '3px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Link>로그인</Link>
          <Link>회원가입</Link>
        </div>
      </div>
    </header>
  )
}
