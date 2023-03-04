import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const ProtectedRoutes = () => {
  const auth = localStorage.getItem("isAuth");
  const isAuth = JSON.parse(auth);
  const location = useLocation();
  return isAuth ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
