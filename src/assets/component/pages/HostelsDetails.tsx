import { useParams} from "react-router-dom";
import { useFetchHotelsById } from "../request";




export default function HostelDetails() {

    
    const token = localStorage.getItem("token");
    const {hostelId} = useParams<{ hostelId: string }>();
    const { hostels } = useFetchHotelsById(hostelId!, token || "" ); 


  

    /* const {data: hostels} = useQuery("Hotels", async () => {
        const response = await fetch(`http://localhost:8080/hotels/${hostelId}`);
        if (!response.ok) {
            throw new Error("failed to fetch image details");
        }
        const data = await response.json();
        return data;
    });

    console.log(hostels) */
   

    return (
        <div >
            <h1>{hostels?.name}</h1>
        </div>
    )
}