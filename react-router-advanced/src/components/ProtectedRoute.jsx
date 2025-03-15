import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
    const  useAuth= localStorage.getItem("auth") === "true";
    return useAuth ? children : <Navigate to="/login" />
}

export default ProtectedRoute;