import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {

  const[posts, setPosts] = useState(null)
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL

  const fetchData = () => {
    axios.get(`${baseApiUrl}/posts`)
      .then(res => {
        console.log(res.data);
        
        setPosts(res.data)
      })
      .catch(err => {
        console.log("Post non trovato:", err);        
      })
    }

      useEffect(() => {
        fetchData()
      }, [])

      return(
        <>
        <div className="container">
          <div className="col-12">
            <h3>Elenco Post</h3>
              <ul className="list-group">{posts === null? (<h2>Caricamento...</h2>) : (posts.map((post) => (
                <li key={post.id} className="list-group-item d-flex justify-content-between">
                  <span>{post.title}</span>
                  <Link className="btn btn-primary" to={`/PostDetail/${post.id}`}>Vedi Dettagli</Link>
                </li>
              )))}                
              </ul>
          </div>
        </div>
        </>
      )
}

export default PostList