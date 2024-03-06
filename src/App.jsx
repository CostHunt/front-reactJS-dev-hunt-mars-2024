import React from 'react'
import SignInSide from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/home'
import { PrivateRoute, PrivateRouteReverse } from './PrivateRoute.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* route avec login */}
        <Route element={<PrivateRoute />}>
          <Route path="/" index element={<Home />} />
        </Route>

        {/* route de redirection si est login */}
        <Route element={<PrivateRouteReverse />}>
          <Route path="/login" element={<SignInSide />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
