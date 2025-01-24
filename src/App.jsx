import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import PostList from "./pages/PostList"
import PostDetail from "./pages/PostDetail"
import AddPost from "./pages/AddPost"
import Error404 from "./pages/Error404"




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contacts" Component={Contacts} />
        <Route path="/PostList" Component={PostList} />
        <Route path="/PostDetail/:id" Component={PostDetail}/>
        <Route path="/AddPost" Component={AddPost} />
        <Route path="*" Component={Error404} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
