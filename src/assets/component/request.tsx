import { useQuery } from "react-query";

export function useFetchHotels( ) {


  const { data: hostels, isLoading, isError } = useQuery("Hotels", async () => {
    try {
      const response = await fetch('http://localhost:8080/hotels', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err); // Log the specific error for debugging
      throw new Error("An error occurred while fetching data");
    }
  });

  return { hostels, isLoading, isError };
}


export function useFetchHotelsById(hostelId: string, token: string) {
  const headers = { token: `${token}` };

  const { data: hostels, isLoading, isError } = useQuery("Hotel", async () => {
    try {
      const response = await fetch(`http://localhost:8080/hotels/${hostelId}`, {
        method: 'GET',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err); // Log the specific error for debugging
      throw new Error("An error occurred while fetching data");
    }
  });

  return { hostels, isLoading, isError };
}





