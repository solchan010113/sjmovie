import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../layout/Header'

import '../assets/css/main.scss'
import topgun from '../assets/images/main/topgun.jpg'

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
            <div className="movie-box">
              <h1>
                <Link to="/">
                  <img src={topgun} />
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="main-box">
          <div className="main-name">
            <h1>박스오피스</h1>
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
