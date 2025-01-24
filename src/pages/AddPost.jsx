import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const AddPost = () =>{
  const initialFormData = {
    id: "",
    title: "",
    content:"",
    image: "",
    tags: ""
  }
  const navigate = useNavigate()
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL
  const [formData, setFormData] = useState(initialFormData)

  const handlePostChange = (e) =>{
    const {name, value} = e.target;
    setFormData((PrevFormData)=>({
      ...PrevFormData,
      [name]: value
    })) 
  }

  const handlePostAdd = (e) =>{
    e.preventDefault()
    const formTags = formData.tags.split(",").map((tag) => tag.trim())
    const newPost = {
      ...formData,
      tags: formTags
    }
    axios.post(`${baseApiUrl}/posts`, newPost
      .then(res => {
        setPosts(res.data)
        setFormData(initialFormData)
        navigate("/PostList")
      })
    )   
  }

  return (
    <>
    <div className="container">
          <div className="inputControll col-12 mt-5 text-bg-warning shadow p-5">
            <form action="#" onSubmit={handlePostAdd}>
              <div className="input-group mb-3">                  
                <input 
                name="title" 
                type="text" 
                className="form-control" 
                placeholder="Inserire titolo" 
                aria-label="Example text with button addon" 
                aria-describedby="button-addon1" 
                value={formData.title} 
                onChange={handlePostChange} />
              </div>

              <div className="input-group mb-3">                  
                <input 
                name="image" 
                type="text" 
                className="form-control" 
                placeholder="Inserire immagine" 
                aria-label="Example text with button addon" 
                aria-describedby="button-addon1" 
                value={formData.image} 
                onChange={handlePostChange} />
              </div>             

              <div className="input-group mb-3">                  
                <input 
                name="tags" 
                type="text" 
                className="form-control" 
                placeholder="Inserire tags" 
                aria-label="Example text with button addon" 
                aria-describedby="button-addon1" 
                value={formData.tags} 
                onChange={handlePostChange} />
              </div>
              <button className="btn btn-danger" type="submit" id="button-addon1">Aggiungi</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default AddPost