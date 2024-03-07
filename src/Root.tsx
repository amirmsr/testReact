import { Outlet } from "react-router-dom";
import Navbar from "./assets/component/navbar-footer/Navbar.tsx";
/* import 'bootstrap/dist/css/bootstrap.min.css'; */



export default function Root() {
  return (
        <div>
            <br/><br/>
            <div style={{zIndex: '10'}}>
                <Navbar/>
            </div>
            <br/><br/>
            <main style={{
                position: 'relative',
                marginLeft: '10%',
                marginRight: '10%',
                textAlign: "center",
                zIndex: '0'
            }}>
                <Outlet/>
            </main>
        </div>
  );
}

