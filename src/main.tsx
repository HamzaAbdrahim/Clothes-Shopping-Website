import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "./main.scss"
import { Provider } from 'react-redux';
import storeprovider from './store/store';
import {files} from '../importfiles'
import {appchildren, AppLayout} from './layout/AppLayout';
import { dashbordchildren } from './layout/Dashbordchildren';






const router = createBrowserRouter([
  {
  element:<AppLayout />,
  errorElement:<files.Errpage />,
  children:appchildren
  },

  {
  path:"/dashbord",element:<files.DashbordLayout /> ,
  errorElement:<files.Errpage />,
  children:dashbordchildren
  },

  {
  path:"auth",
  element:<files.auth />,
  errorElement:<files.Errpage />,
  children:[
  {path:"" , element:<files.Formsingup />},
  {path:"login" , element:<files.Login />},
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