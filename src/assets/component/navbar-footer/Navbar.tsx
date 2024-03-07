import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchUserData } from "../CheckAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHouse } from "@fortawesome/free-solid-svg-icons";



function CollapsibleExample() {

const [isConnected, setIsconnected] = useState(false);
const token = localStorage.getItem("token");
//fetch profil
const { data: user } = useQuery("userProfile", () => fetchUserData(token));


useEffect(() => {
  if (user) {
    setIsconnected(true);
  }
}, [user]);




    return (
        <Navbar
            collapseOnSelect
            className="navbar"
            expand="lg"
            variant="dark"
            style={{
                position: "fixed",
                backgroundColor: '#e5e7ea',
                top: "0",
                width: "100%",
                paddingLeft: "150px",
                paddingRight: "150px",
                WebkitBoxShadow: "-3px 12px 16px -8px rgba(0,0,0,0.47)",
                boxShadow: "-3px 12px 16px -8px rgba(0, 0, 0, 0.06)",
                zIndex: "10"
            }}
        >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Navbar.Brand>
                            <Link to="/" style={{color: "#260A63", textDecoration: 'none'}}>
                                <FontAwesomeIcon icon={faHouse} style={{color: "#260A63",}} />
                                &nbsp;
                   
                            </Link>
                        </Navbar.Brand>
                         { isConnected ? (
                            <Nav.Link as={Link} to="/profil" className="navLink">
                                Profil
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/login" className="navLink">
                                Connexion
                            </Nav.Link>
                        ) } 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CollapsibleExample;
