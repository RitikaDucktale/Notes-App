import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import Login from "../pages/loginPage/Login";


const PublicRoutes = () => {
    const {loggedInUsers} = useAuth();
    console.log("publicRoutes==",loggedInUsers)
    return loggedInUsers?.token? <Navigate to='/dashboard'/>: <Outlet/>                 ;
}

export default PublicRoutes;