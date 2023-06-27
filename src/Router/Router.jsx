import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";

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
        }
      ]
    },
  ]); 

  export default router;