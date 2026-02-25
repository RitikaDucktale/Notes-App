import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import Signup from "../pages/signupPage/Signup";
import Login from "../pages/loginPage/Login";
 
 export const ProtectedRoutes = () => {
    const navigate = useNavigate();
const {loggedInUsers} = useAuth();
  return loggedInUsers?.token ? <Outlet/> : <Navigate to='/'/>; 
}                                                                                                                                                                                                                                           


