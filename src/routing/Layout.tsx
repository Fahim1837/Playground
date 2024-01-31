import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

function Layout() {
  return (
    <>
        <NavBar/>
        <div id="main">
            <Outlet/>
        </div>
    </>
    ) 
}

export default Layout