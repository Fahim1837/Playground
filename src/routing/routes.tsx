import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Contact from "./Contact";
import UsersDetailPage from "./UsersDetailPage";
import Layout from "./Layout";

const router  = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/users', element: <Users/>},
            {path: '/contact', element: <Contact/>},
            {path: '/users/:id', element: <UsersDetailPage/>},
        ]
    }

])

export default router