import { Outlet } from 'react-router-dom';
import {files} from '../../importfiles'
export const AppLayout = () =>  (
    <div className="App">
    <files.Navbar/>,
    <Outlet />
    <files.Footer />
    </div>
  );

  export  const  appchildren = [

    {path: "/",
    element: <div>
    <files.Changebg />,
    <files.Praduct none={''} w={''} p={''} />
    <files.Catogray />
    </div>
    },
    {path:"/userapage" , element:<files.Userpage /> },
    {path:"return-policy",element:<files.Return_policy />},
    {path:"cart",element:<files.Shopingcart />},
    {path:"filter",element:<files.Filtering size={''} price={0} />},
    {path:"Product/:id",element:<files.Productpage />},
    {path:"checkout",element:<files.Checkout />},
    {path:"shearch",element:<files.Searchpage />},
  
    ]