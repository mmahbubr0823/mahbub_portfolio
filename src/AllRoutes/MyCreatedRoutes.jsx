import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Skills from "../Pages/Skills/Skills";
import Experience from "../Pages/Experience/Experience";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import WeedyHub from "../Pages/ProjectsDetails/WeedyHub/WeedyHub";
import FeedTheHunger from "../Pages/ProjectsDetails/FeedTheHunger/FeedTheHunger";
import FoodyWorld from "../Pages/ProjectsDetails/FoodyWorld/FoodyWorld";
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
            // projects details 
            {
                path:'/weedyHub',
                element:<WeedyHub></WeedyHub>
            },
            {
                path:'/feedTheHunger',
                element:<FeedTheHunger></FeedTheHunger>
            },
            {
                path:'/foodyWorld',
                element:<FoodyWorld></FoodyWorld>
            },
        ]
    }
])
;

export default MyCreatedRoutes;