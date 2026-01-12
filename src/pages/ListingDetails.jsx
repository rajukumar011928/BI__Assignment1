import { useParams } from "react-router-dom"
import useFetch from "../useFetch"


const ListingDetails = () => {
    const {data, loading, error} = useFetch("https://bi-assignment1-be.onrender.com/eventmodels")
    console.log("printData:", data)
    const {id} = useParams()
    console.log("params_Id", id)

    const dataFetch = data?.data?.find((findData) => findData._id === id)
    console.log("dataFetch:", dataFetch)
    return(
      
        <>
        
         <div className="container mt-4">
            {loading && <p>Loading...</p>}
            {error && <p>Error while fetching data</p>}
            {!dataFetch && <p>No event found</p>}
            
  

           <div className="row">
                <div className="col-md-7">
                    <h2>{dataFetch?.title}</h2>
                    <p>Hosted By:</p>
                    <p><strong>{dataFetch?.hostedBy}</strong></p>
                     <div>
              <img src={dataFetch?.image} className="" alt="..."/>
                 <div className="card-body">
             <h4 className="card-title py-2">Details:</h4>
             <p>{dataFetch?.description}</p>
             <h4>Additional Information:</h4>
             <p><strong>Dress Code:</strong> {dataFetch?.additionalInformation?.dressCode}</p>
             <p><strong>Age Restrictions:</strong> {dataFetch?.additionalInformation?.ageRestrictions} </p>
             <div>
             <h4>Event Tags:</h4>
             {dataFetch?.tags?.map((tag, index) => (
            <span
             key={index}className="badge bg-danger me-2 px-3 py-2 mt-2" >
               {tag}
             </span>
               ))}
             </div>
             
           </div>
           </div>
            </div>

             <div className="col mt-4 ">
               <div className="py-4 shadow p-3 mb-5 bg-body-tertiary rounded">
                  <div className="card-body">
                 <p className="card-text">{dataFetch?.date} at {dataFetch?.startTime}</p>
                 <p className="card-text">TO</p>
                 <p className="card-text">{dataFetch?.date} at {dataFetch?.endTime}</p>
                 <p className="card-text"><strong>Location:</strong> {dataFetch?.location}</p>
                 <p className="card-text"><strong>Price:</strong> {dataFetch?.price}</p>
                 </div>
                 </div>

                   <div className="mt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="card-body">
                          <h4 className="card-text py-2">Speakers:</h4>
                          <div className="row">
                            {dataFetch?.speakers?.map((speaker) => (
                                <div className="col" key={speaker._id}>
                                    <div className="card">
                                <img src={speaker?.image} className="rounded-circle" width="80"height="80" alt="error"/>
                                                                                  
                                <h5 className="card-text mt-2">{speaker?.name}</h5>
                                <p className="card-text">{speaker?.designation}</p>
                                
                                </div>
                                
                                
                                </div>
                            ))}
                            
                                    
                          
                    </div>

                  </div>  
               </div> 
            
             </div>   
             
             </div>
        </div> 
        </>
    )
}
export default ListingDetails;