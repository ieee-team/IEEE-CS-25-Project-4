
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import './index.css'
import AllHome from './Home/AllHome';
import AllAbout from './About/AllAbout';
import AllLogin from './Login/AllLogin';
import AllRegister from './Register/AllRegister';
import AllCart from './Cart/AllCart';
import AllProfile from './Profile/AllProfile';
import AllContact from './Contact/AllContact';
import AllCheckout from './Checkout/AllCheckout';
import AllProduct from './Product/AllProduct';
import AllSingleProduct from './SingleProduct/AllSingleProduct';
import AllSingleProductpay from './SingleProductpay/AllSingleProductpay';



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
    path: "Product",
    element: <AllProduct/>
  },
  {
    path: "SingleProduct",
    element: <AllSingleProduct/>
  },
  {
    path: "SingleProductpay",
    element: <AllSingleProductpay/>
  },
  

]);


createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);