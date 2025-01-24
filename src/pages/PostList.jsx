import axios from axios;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {

  const[posts, setPosts] = useState(null)
  const baseApiUrl = VITE_BASE_API_URL

  const fetchData = () => {
    axios.get(`${postUrl}/posts`)
      .then(res => {
        console.log(res.data);
        
        setPosts(res.data)
      })
    }

      useEffect(() => {
        fetchData()
      }, [])
      return(
        <>
        <div className="container">
          <div className="col-12">
            <h3>ElenData</h3>
              <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
          </div>
        </div>
        </>
      )
}