import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Auth from "../contexts/Auth";
import SignUp from "../messaging/components/SignUp";
import SignInSide from '../messaging/components/Login'

const AuthenticatedRoute = ({ path, element }) => {
  const { isAuthenticated } = useContext(Auth);

  return isAuthenticated ? (
    <Routes>
        <Route path="/" element={<SignInSide/>} />
        <Route exact path={path} element={element} />
    </Routes>
  ) : (
    <Redirect to="/"/>
  );
};

export default AuthenticatedRoute;