import { jwtDecode } from "jwt-decode";
import { baseUrl } from "../config";

interface DecodedToken {
  nbf: number;
  iss: string;
  exp: number;
  userId: number; 
  iat: number;
 
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchUserData(token: any) {
  

  if (!token) {
    throw new Error("Token missing");
  }
  const decoded: DecodedToken = jwtDecode(token);
  const id = decoded?.userId;
  console.log(id)
  const response = await fetch(`${baseUrl}/users/${id}`, {
    headers: {
      token: `${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }
  const data = await response.json();
  return data;
}