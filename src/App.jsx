import React from 'react'
import SignInSide from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { PrivateRoute, PrivateRouteReverse } from './PrivateRoute.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Coding from './pages/Coding/Coding.jsx'
import Groupe from './components/groupe/groupe.jsx'
import ENI from './pages/Presentation/ENI.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* route avec login */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path='/groupe' element={<Groupe />} />
        </Route>

        <Route path='/Coding' element={<Coding />} />
        <Route path="/" index element={<ENI />} />

        {/* route de redirection si est login */}
        <Route element={<PrivateRouteReverse />}>
          <Route path="/login" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
