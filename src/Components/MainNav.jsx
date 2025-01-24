import { NavLink } from "react-router-dom";

const MainNav = () =>{
  return (
    <header className="text-bg-secondary">
      <nav className="container mt-3">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link ">Home</NavLink>
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
          <li className="nav-item">
            <NavLink to="/AddPost" className="nav-link">Aggiungi un post</NavLink>
          </li>
        </ul>
      </nav>
    </header>
   
  )
}

export default MainNav