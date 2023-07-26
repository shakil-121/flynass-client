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
import MultiPercel from "../Dashboard/MyParcel/MultiPercel";
import AllAdmin from "../Dashboard/SuperAdmin/AllAdmin/AllAdmin";
import ManageUsers from "../Dashboard/SuperAdmin/ManageUsers/ManageUsers";
import Menu from "../Dashboard/Menu/Menu";
import TermsAndConditions from "../Pages/Terms&Conditions/TermsAndConditions";
import Invoice from "../Component/Invoice/Invoice";
import Address from "../Dashboard/Address/Address";
import MerchantHistory from "../Dashboard/MerchantHistory/MerchantHistory";
import MerchantPayment from "../Dashboard/MerchantPayment/MerchantPayment";
import AdminDashboard from "../Layout/Root/AdminDashboard";

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
        path: "all-admin",
        element: <AllAdmin></AllAdmin>
      },
      {
        path: "all-parcel",
        element: <AllParcel></AllParcel>
      },
      {
        path: "manage-user",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "merchant-analysis",
        element: <MerchantAnalysis />
      },
      {
        path: "admin-analysis",
        element: <AdminAnalysis></AdminAnalysis>
      },
      {
        path: "invoice/:id",
        element: <Invoice></Invoice>
      },
      {
        path: "multi_parcel",
        element: <MultiPercel></MultiPercel>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: 'terms-coditions',
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: "address",
        element: <Address></Address>
      },
      {
        path: "history",
        element: <MerchantHistory></MerchantHistory>
      },
      {
        path: "merchant-payment",
        element: <MerchantPayment></MerchantPayment>
      }
    ]
  },
  {
    path: "admin-dashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        
      }
    ]
  }

]);

export default router;
