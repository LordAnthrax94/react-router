import { NavLink } from "react-router-dom";

const MainNav = () =>{
  return (
    <nav className="container mt-3">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/About" className="nav-link">Chi Siamo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contacts" className="nav-link">Contatti</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/PostList" className="nav-link">I tuoi post</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav