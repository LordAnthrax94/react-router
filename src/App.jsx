import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={DefaultLayout}>
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contacts" component={Contacts} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
