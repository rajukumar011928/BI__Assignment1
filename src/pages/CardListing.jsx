import useFetch from "../useFetch"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const CardListing = ({searchTerm}) => {

  console.log(searchTerm)
  const [eventFilter, setEventFilter] = useState("Both")
    const {data, loading, error} = useFetch("https://bi-assignment1-be.onrender.com/eventmodels", { data: [] })
    console.log(data)

    const filterValue = eventFilter === "Both" ? data.data : data?.data?.filter((item) => item.eventType === eventFilter)
    
    const searchFilter = searchTerm === "" ? filterValue : filterValue?.filter((item) => {

      const title = item.title || "";
      const tags = item.tags || [];
      const search = searchTerm || "";

      const searchByTitle = title.toLowerCase().includes(search.toLowerCase())
      const searchByTags = tags.join(", ").toLowerCase().includes(search.toLowerCase());
      return searchByTitle || searchByTags
    })
    return(
    <>
    
    <div className="container py-4">
        
        
        <div className="d-flex justify-content-end">
          <h1 style={{ paddingRight: "130px" }}>Meetup Events</h1>

        <select className="form-control w-25 mb-3" onChange={(event) => setEventFilter(event.target.value)}>
          <option value="Both">Select Both</option>
          <option value="Online Event">Online Event</option>
          <option value="Offline Event">Offline Event</option>
        </select>
        </div>
       
        {loading && <p>Loading...</p>}
        {error && <p>An error occurs while fetching the data.</p>}
         <div className="row g-4">
        {searchFilter?.map((post) => (
           
            <div className="col-md-4 col-sm-6" key={post._id}>
            <div className="card">
            <img src={post.image} className="card-img-top img-fluid rounded"  alt="error"/>
            <div className="card-body">
            <small className="card-text">{post.date} . {post.startTime}</small>
            <Link to={`/cardlisting/${post._id}`} style={{ textDecoration: "none", color: "black" }}><h2 className="card-title">{post.title}</h2></Link>
            </div>
             <div className="card-footer">
           <small className="text-body-secondary">{post.eventType}</small>
             </div>
            </div>
            </div>
            

            
        ))}
        </div>
    </div>
    </>
  )
}
export default CardListing