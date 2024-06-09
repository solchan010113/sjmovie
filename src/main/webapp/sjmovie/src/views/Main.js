import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Header from '../layout/Header'

import '../assets/css/main.scss'
import topgun from '../assets/images/main/topgun.jpg'
import SearchIcon from '@mui/icons-material/Search'

export default function Main() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="main">
          <div className="main-name">
            <h1>박스오피스</h1>
          </div>
          <div className="content">
            <div className="movie-content-container">
              <div className="movie-box">
                <h1>
                  <Link to="/">
                    <img src={topgun} />
                  </Link>
                </h1>
                <div>
                  <Button variant="outlined" className="like-btn" startIcon={<FavoriteBorderIcon />}>
                    1.1k
                  </Button>
                  <Link to="/">
                    <Button variant="contained" className="reserved-btn">
                      예매
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="movie-box">
                <h1>
                  <Link to="/">
                    <img src={topgun} />
                  </Link>
                </h1>
              </div>
              <div className="movie-box">
                <h1>
                  <Link to="/">
                    <img src={topgun} />
                  </Link>
                </h1>
              </div>
              <div className="movie-box">
                <h1>
                  <Link to="/">
                    <img src={topgun} />
                  </Link>
                </h1>
              </div>
              <div className="movie-box">
                <h1>
                  <Link to="/">
                    <img src={topgun} />
                  </Link>
                </h1>
              </div>
            </div>

            <div className="search-content-container">
              <div className="search-content">
                <div className="search-input">
                  <form id="search-form" name="search-form">
                    <FormControl variant="standard">
                      <InputLabel
                        sx={{
                          mx: 0.5,
                          fontSize: 14,
                        }}
                        htmlFor="standard-adornment-search"
                      >
                        영화명을 입력해주세요.
                      </InputLabel>
                      <Input
                        id="standard-adornment-search"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              type="button"
                              sx={{
                                color: 'info.main',
                                p: '3px',
                              }}
                              aria-label="search"
                            >
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </form>
                </div>
              </div>
              <div className="search-content"></div>
              <div className="search-content"></div>
              <div className="search-content"></div>
            </div>
          </div>
        </div>

        <div className="main-box">
          <div className="main-name">
            <h1>박스오피스2</h1>
          </div>
          <div className="main-content">
            <div className="movie-box">
              <h1>
                <Link to="/">
                  <img src={topgun} />
                </Link>
              </h1>
            </div>
            <div className="movie-box">
              <h1>
                <Link to="/">
                  <img src={topgun} />
                </Link>
              </h1>
            </div>
            <div className="movie-box">
              <h1>
                <Link to="/">
                  <img src={topgun} />
                </Link>
              </h1>
            </div>
            <div className="movie-box">
              <h1>
                <Link to="/">
                  <img src={topgun} />
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
