import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carts from './Tshitrs/cart/Carts';
import Home from './Tshitrs/homes/Home';
import Root from './Tshitrs/layouts/Root';

const App1 = () => {
    const router=createBrowserRouter([

        {path:'/',
        loader:async()=>{
            return fetch('products.json')
         },
        element:<Root></Root>,children:[

         {path:'home',
         
         element:<Home></Home>},
         {path:'/cart', element:<Carts></Carts>}
        
        ]
    
    
    }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default App1;
