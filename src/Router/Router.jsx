import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/LoginAndSignup/SignUp";
import Login from "../Pages/LoginAndSignup/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:"/about",
          element: <About></About>
        },
        {
          path: "/services",
          element: <Services></Services>
        },
        {
          path:'/signup', 
          element:<SignUp></SignUp>
        },
        {
          path:"/login", 
          element:<Login></Login>
        }
      ]
    },
  ]); 

  export default router;