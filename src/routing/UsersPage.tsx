import { Outlet } from "react-router-dom"
import Users from "./Users"

function UsersPage() {
  return (
    <div className="row">
        <div className="col"><Users/></div>
        <div className="col"><Outlet/></div>
    </div>
  )
}

export default UsersPage