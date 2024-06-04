import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
