import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import UsersDetail from "./UsersDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPAge";

const router  = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: '', element: <Home/>},
            {
                path: 'users/', 
                element: <UsersPage/>,
                children: [
                    {path: ':id', element: <UsersDetail/>},
                ]
            },
            {path: 'contact', element: <Contact/>},
        ]
    }

])

export default router