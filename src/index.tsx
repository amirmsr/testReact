import React from "react";
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./Root";
import Accueil from "./assets/component/pages/Accueil";
import Login from "./assets/component/pages/Login";
import Profil from "./assets/component/pages/Profil";
import './style.css';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import AddHostel from "./assets/component/pages/AddHostel";
import HostelDetails from "./assets/component/pages/HostelsDetails";
import Book from "./assets/component/pages/Book";





const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          element: <Root />,
          children: [
            {
              path: "/",
              element: <Accueil />
            },       
            {
                path: "/login",
                element: <Login />
            },       
            {
              path: "/profil",
              element: <Profil />
            },            
            {
              path: "/addHostel",
              element: <AddHostel />
            },            
            {
              path: "/hostel/:hostelId",
              element: <HostelDetails />
            },            
            {
              path: "/hostel/book",
              element: <Book />
            },            
    

                                        
          ]
        },      
      ],
    },
  ]);
  
  const queryClient = new QueryClient();
  
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );