import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Main from './Layout/Main';
import Login from './Login';
import Orders from './Orders';
import Register from './Register';
import PrivetRoute from './routs/PrivetRoute';

const Module58 = () => {
    const router=createBrowserRouter([
        {path:'/',element:<Main></Main>,children:[

          {path:'/',element:<Home></Home>},
          {path:'/login',element:<Login></Login>},
          {path:'/register',element:<Register></Register>},
          {path:'/orders',element:<PrivetRoute><Orders></Orders></PrivetRoute>}

        ]}
        
    ])
    return (
        <div>
           
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Module58;