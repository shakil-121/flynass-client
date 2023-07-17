import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/LoginAndSignup/SignUp";
import Login from "../Pages/LoginAndSignup/Login";
import Contact from "../Pages/Contact/Contact";
import Coverage from "../Pages/Coverage/Coverage";
import Dashboard from "../Layout/Root/Dashboard";
import Profile from "../Dashboard/Profile/Profile";
import AdminAnalysis from "../Dashboard/Admin/AdminAnalysis";
import MyParclel from "../Dashboard/MyParcel/MyParclel";
import AllParcel from "../Dashboard/Admin/AllParcel/Allparcel";
import MerchantAnalysis from "../Dashboard/MerchantAnalysis/MerchantAnalysis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "",
        element: <Profile></Profile>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "my-parcel",
        element: <MyParclel></MyParclel>
      },
      {
        path: "all-parcel",
        element: <AllParcel></AllParcel>
      },
      {
        path: "merchant-analysis",
        element: <MerchantAnalysis/>
      },
      {
        path: "admin-analysis",
        element: <AdminAnalysis></AdminAnalysis>
      }
    ]
  }
]);

export default router;
