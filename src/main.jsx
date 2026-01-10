import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import CardListing from './pages/CardListing.jsx'
import ListingDetails from "./pages/ListingDetails.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cardlisting",
    element: <CardListing/>
  },
  {
    path: "/cardlisting/:id",
    element: <ListingDetails/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
