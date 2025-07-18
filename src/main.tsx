
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import AllHome from './Home/AllHome';
import AllAbout from './About/AllAbout';
import AllLogin from './Login/AllLogin';
import AllRegister from './Register/AllRegister';
import AllCart from './Cart/AllCart';
import AllProfile from './Profile/AllProfile';
import AllContact from './Contact/AllContact';
import AllCheckout from './Checkout/AllCheckout';
import AllTopCell from './TopCell/AllTopCell';
import AllSomsengGalatero from './SomsengGalatero/AllSomsengGalatero';
import AllPinnappleMacbook from './PinnappleMacbook/AllPinnappleMacbook';



const router = createBrowserRouter([
  {
    path: "/",
    element: <AllHome/>
  },
  {
    path: "login",
    element: <AllLogin/>
  },
  {
    path: "register",
    element: <AllRegister/>
  },
  {
    path: "cart",
    element: <AllCart/>
  },
  {
    path: "profile",
    element: <AllProfile/>
  },
  {
    path: "contact",
    element: <AllContact/>
  },
  {
    path: "checkout",
    element: <AllCheckout/>
  },
  {
    path: "about",
    element: <AllAbout/>
  },
   {
    path: "topcell",
    element: <AllTopCell/>
  },
  {
    path: "SomsengGalatero",
    element: <AllSomsengGalatero/>
  },
  {
    path: "PinnappleMacbook",
    element: <AllPinnappleMacbook/>
  },
  

]);


createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);