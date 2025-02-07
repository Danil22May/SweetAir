import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AirQualityMain from "../pages/AirQualityMain";
import Comments from "../pages/Comments";
import Login from "../pages/Login";
import AdminComments from "../pages/AdminComments";
import Search from "../pages/Search";



const router = createBrowserRouter ([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {   path:"/",
                element: <Home />
            },
            { 
                path:"/airquality/:cityName",
                element: <AirQualityMain />
            },
            { 
                path:"/comments",
                element: <Comments />
            },
            { 
                path:"/login",
                element: <Login />
            },
            { 
                path:"/admin-comments",
                element: <AdminComments />
            },
            { 
                path:"/search",
                element: <Search />
            },
        ]
    }
])

export default router;