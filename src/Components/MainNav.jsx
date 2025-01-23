import { NavLink } from "react-router-dom";

const MainNav = () =>{
  return (
    <nav className="container">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="About" className="nav-link">Chi Siamo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Contacts" className="nav-link">Contatti</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav