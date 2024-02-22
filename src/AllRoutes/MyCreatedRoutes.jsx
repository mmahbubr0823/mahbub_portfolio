import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Skills from "../Pages/Skills/Skills";
import Experience from "../Pages/Experience/Experience";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
const MyCreatedRoutes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/service',
                element:<Service></Service>
            },
            {
                path:'/skills',
                element:<Skills></Skills>
            },
            {
                path:'/experience',
                element:<Experience></Experience>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
        ]
    }
])
;

export default MyCreatedRoutes;