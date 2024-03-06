import React from 'react'
import SignInSide from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { PrivateRoute, PrivateRouteReverse } from './PrivateRoute.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Coding from './pages/coding/Coding.jsx'
import Test from './pages/Test.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* route avec login */}
        <Route element={<PrivateRoute />}>
          <Route path="/" index element={<Home />} />
        </Route>

        <Route path='/Coding' element={<Test />} />

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
