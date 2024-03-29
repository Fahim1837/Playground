import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Navbar</a>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item"><NavLink className="nav-link" to='/'>Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/users">User</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar