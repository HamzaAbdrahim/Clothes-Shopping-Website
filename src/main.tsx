import React from 'react'
import ReactDOM from 'react-dom/client'
import {
createBrowserRouter,
  Outlet,
RouterProvider,
} from "react-router-dom";
import "./main.scss"
import { Provider } from 'react-redux';
import Navbar from './components/home/navbar/Navbar';
import Changebg from './components/home/background/Changebg';
import Praduct from './components/home/ourproduct/Prouduct';
import storeprovider from './store/store';
import Return_policy from './components/home/diliviry/Return_policy';
import Shopingcart from './components/home/shopingcart/Shopingcart';
import Filtering from './components/home/filter/Filtering';
import Productpage from './components/home/ourproduct/Productpage';
import Checkout from './components/home/checkout/Checkout';
import Footer from './components/home/footer/Footer';
import Catogray from './components/home/catogary/Catogray';
import DashbordLayout from './components/Dashbord/DashbordLayout';
import Home from './components/Dashbord/Home/Home';
import Users from './components/Dashbord/users/Users';
import Order from './components/Dashbord/order/Order';
import Addproduct from './components/Dashbord/addProduct/Addproduct';
import Searchpage from './components/home/searchpage/Searchpage';
import Singup from './components/Dashbord/auth/Singup';
import Formsingup from './components/Dashbord/auth/Formsingup';
import Login from './components/Dashbord/auth/Login';
import Userpage from './components/home/userpage/Userpage';
import Errpage from './components/shered/Errpage';

const AppLayout = () => (
  <div className="App">
  <Navbar/>,
  <Outlet />
  <Footer />
  </div>
);


const router = createBrowserRouter([
  {
  element:<AppLayout />,
  errorElement:<Errpage />,
  children:[
  {path: "/",
  element: <div>
  <Changebg />,
  <Praduct none={''} w={''} p={''} />
  <Catogray />
  </div>
  },{path:"/userapage" , element:
  localStorage.getItem('authTokenLogin') && 
  localStorage.getItem('authTokenLogin') !== 'undefined' ? <Userpage /> : <Singup />}
  ,
  {path:"return-policy",element:<Return_policy />},
  {path:"cart",element:<Shopingcart />},
  {path:"filter",element:<Filtering size={''} price={0} />},
  {path:"Product/:id",element:<Productpage />},
  {path:"checkout",element:<Checkout />},
  {path:"shearch",element:<Searchpage />},

  ]
  },
  {
  path:"/dashbord",element:<DashbordLayout /> ,
  errorElement:<Errpage />,
  children: [
  {path:"/dashbord",element:<Home />},
  {path:"users" , element:<Users />},
  {path:"orders" , element:<Order />},
  {path:"addproduct" , element:<Addproduct />}
  ]
  },
  {
  path:"auth",
  element:<Singup />,
  errorElement:<Errpage />,
  children:[
  {path:"login" , element:<Login />},
  {path:"" , element:<Formsingup />}
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<Provider store={storeprovider}>
<RouterProvider router={router} />
</Provider>
</React.StrictMode>,
)