import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter ( [
    {
        path: "/",
        Component : HomePage
    },
    {
        path: "/login",
        Component : LoginPage
    }

] )

export default router;