import { useQuery } from "react-query"; 
import { fetchUserData } from "../CheckAuth"; 
import {  Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faUsers } from "@fortawesome/free-solid-svg-icons";


export default function  Profil() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const { data: user } = useQuery("userProfile", () => fetchUserData(token));

  
  console.log(user)

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"
    navigate("/login");
};

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}} className="animate__animated animate__fadeIn">
      <h2 style={{marginBottom: "20px"}}>Bonjour {user?.name}</h2>
      <div className="animate__animated animate__rotateIn">
      </div>           
      <div className="addVideo">
          <Link to="/addHostel" style={{color: 'white', textDecoration: "none"}}>
              <div style={{backgroundColor: "#260A63", borderRadius: '15px', padding: '30px', margin: '10px'}} className="animate__animated animate__bounceInLeft">
                  <FontAwesomeIcon icon={faSquarePlus} style={{fontSize: '30px', color: 'white'}}/>
                  <p>Add a hostel</p>
              </div>
          </Link>
          
          <Link to={"/addHostel"} style={{color: '#260A63', textDecoration: "none"}}
                className="accueilLink">
              <div className="d-flex flex-column align-items-center">
                  <FontAwesomeIcon icon={faUsers} style={{fontSize: '30px'}}/>
                  Managed hostels
              </div>
          </Link>


      </div>

      <br/>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>


);

}

