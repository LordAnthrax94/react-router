import { useParams, useNavigate } from "react-router-dom";
import axios from axios;
import { useEffect, useState } from "react";


const PostDetail = () =>{

  const { id } = useParams();
  const baseApiUrl = VITE_BASE_API_URL
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  const fetchPost = () => {
      axios.get(`${postUrl}/posts/${id}`)
        .then(res => {
          
          
          setPost(res.data)
        })
      }

      useEffect(() => {
        fetchData()
      }, [])

  return (
    <>
    <div className="container">
      <div className="col-12">
        <div className="card" style="width: 18rem;">
          <h1>{post?.name}</h1>
          <img src={post?.image} className="card-img-top img-fluid" alt={post?.name} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Indietro</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PostDetail