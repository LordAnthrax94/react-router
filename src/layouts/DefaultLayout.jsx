import MainNav from "../Components/MainNav"
import { Outlet } from "react-router-dom"

const Layout =() =>{
  return(
      <>
        <header>
          <MainNav />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>

        </footer>
      </>
  )
}

export default Layout