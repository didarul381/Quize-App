//import { Root } from 'postcss';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Topic from './Components/Topic/Topic';
import Root from './Components/Root/Root';
import Statics from './Components/Statics/Statics';

const Apps = () => {
    const router=createBrowserRouter([
         {path:'/',element:<Root></Root>,children:[

          {path:'/',
          
          loader:async()=> {return fetch('https://openapi.programming-hero.com/api/quiz')},
          element:<Home></Home>},
          {path:'/topic/:topicId',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element:<Topic></Topic>},
          {path:'/',element:<Home></Home>},
          {path:'/static',
          loader:async()=> {return fetch('https://openapi.programming-hero.com/api/quiz')},
          element:<Statics></Statics>},
          {path:'/blog',element:<Blog></Blog>}



         ]},
         {path:'*',element:<Error></Error>}

    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Apps;