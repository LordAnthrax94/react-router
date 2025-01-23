import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/About" Component={About} />
        <Route path="/Contacts" Component={Contacts} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
