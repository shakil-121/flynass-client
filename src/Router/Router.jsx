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
// import AdminAnalysis from "../Dashboard/Admin/AdminAnalysis";
import MyParclel from "../Dashboard/MyParcel/MyParclel";
// import AllParcel from "../Dashboard/Admin/AllParcel/Allparcel";
import MerchantAnalysis from "../Dashboard/MerchantAnalysis/MerchantAnalysis";
import MultiPercel from "../Dashboard/MyParcel/MultiPercel";
// import AllAdmin from "../Dashboard/SuperAdmin/AllAdmin/AllAdmin";
// import ManageUsers from "../Dashboard/SuperAdmin/ManageUsers/ManageUsers";
import Menu from "../Dashboard/Menu/Menu";
import TermsAndConditions from "../Pages/Terms&Conditions/TermsAndConditions";
import Invoice from "../Component/Invoice/Invoice";
import Address from "../Dashboard/Address/Address";
import AdminLogin from "../Pages/LoginAndSignup/AdminLogin";
import Private from "../Private/Private";
import MerchantHistory from "../Dashboard/MerchantHistory/MerchantHistory";
import MerchantPayment from "../Dashboard/MerchantPayment/MerchantPayment";
import AdminDashboard from "../Layout/Root/AdminDashboard";
import AdminAnalysis from "../Dashboard/Admin/AdminAnalysis";
import AllParcel from "../Dashboard/Admin/AllParcel/Allparcel";
import AllAdmin from "../Dashboard/SuperAdmin/AllAdmin/AllAdmin";
import ManageUsers from "../Dashboard/SuperAdmin/ManageUsers/ManageUsers";
import { path } from "d3-path";
import { element } from "prop-types";
import AdminSignUp from "../Pages/LoginAndSignup/AdminRegistration";
import TramsCondition from "../Pages/TramsCondition/TramsCondition";
import Error from "../Pages/Error/Error";
import AdminDashbordHistory from "../Dashboard/Admin/AdminDashbordHistory/AdminDashbordHistory";
import Instruction from "../Dashboard/MyParcel/Instruction";
import DashboardService from "../Dashboard/DashboardService/DashboardService";
import AdminPrivate from "../Private/AdminPrivate";
// import AdminPrivate from "../Private/AdminPrivate";

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
        path: "registration",
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
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "tarms&condition",
        element: <TramsCondition></TramsCondition>
      },
      // {
      //   path: "admin_signup",
      //   element: <AdminSignUp></AdminSignUp>,
      // },
      // {
      //   path: "admin_login",
      //   element: <AdminLogin></AdminLogin>
      // }
    ],
  },
  {
    path: 'dashboard',
    element: <Private><Dashboard></Dashboard></Private>,
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
        path: "merchant-analysis",
        element: <MerchantAnalysis />
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
      },
      {
        path: "instruction",
        element: <Instruction></Instruction>
      },
      {
        path: "service",
        element: <DashboardService></DashboardService>
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
  },
  {
    path: "admin_dashboard",
    element: <AdminPrivate><AdminDashboard></AdminDashboard></AdminPrivate>,
    children: [
      {
        path: "",
        element: <AdminAnalysis></AdminAnalysis>
      },
      {
        path: "all-parcel",
        element: <AllParcel></AllParcel>
      },
      {
        path: "all-admin",
        element: <AllAdmin></AllAdmin>
      },
      {
        path: "manage-user",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "order-history",
        element: <MerchantHistory></MerchantHistory>
      },
      {
        path: "address",
        element: <Address></Address>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: 'terms-coditions',
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: "history",
        element: <AdminDashbordHistory></AdminDashbordHistory>
      },
      {
        path: "invoice/:id",
        element: <Invoice></Invoice>
      },
      {
        path: "admin_signup",
        element: <AdminSignUp></AdminSignUp>,
      }
    ]
  },

  {
    path: "admin_login",
    element: <AdminLogin></AdminLogin>
  },

  {
    path: "*",
    element: <Error></Error>
  }

]);

export default router;
