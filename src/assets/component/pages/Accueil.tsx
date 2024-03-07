import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFetchHotels } from "../request";
import { Hostel } from "../type";
import { Link, useNavigate } from "react-router-dom";




function Accueil(){
    const navigate = useNavigate()
    const { hostels } = useFetchHotels();

    console.log(hostels);

    const handleBook = async  (hotelId: string)=>{
        navigate(`/hotels/${hotelId}`)
    }

    

return(
    <div>
        <h1 className="animate__animated animate__fadeIn">Accueil</h1>

        <h1  className="animate__animated animate__fadeIn">All hostel </h1>
        
        <br/><br/><br/>

        <div className="container allElement  animate__animated animate__backInUp " >
            <div className="row">
                {hostels?.map((hostel: Hostel) => (
                    <div key={hostel?.id} className="col-md-4 " data-testid="cypress-hotels">
                        <div className="element" >
                            <div className="elementText" style={{textAlign: "left", margin: "10px"}}>
                            <div>
                                <p>{hostel?.name}</p>
                            </div>
                            <div>
                                <p>{hostel?.description}</p>
                            </div>
                                <FontAwesomeIcon icon={faUser} style={{marginRight: "10px"}}/>
                                <b style={{color: '#260A63'}}>user</b> 
                            </div>
                            <Link to={`/hostel/${hostel?.id}`} /* onClick={()=>handleVideoClick(video._id)} */ className="elementHeader" style={{cursor: "pointer", position: "relative", display: "block"}}>
                            <button onClick={()=>handleBook(hostel?.id)}  className='btnMain2 btn-block'>Book Now</button>
                            <br /><br />
                            <Link to={`/hostel/${hostel?.id}`}>More details</Link>
                            <br />
                            </Link>
                           
                        </div>
                    </div>
                ))}
            </div>
                <br></br><br></br>
        </div>
    </div>
)
}

export default Accueil 