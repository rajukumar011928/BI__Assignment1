import CardListing from './pages/CardListing'
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import ListingDetails from './pages/ListingDetails'

export default function App(){
  const [searchTerm , setSearchTerm] = useState("")
  return(
    <>
    <Header setSearchTerm={setSearchTerm}/>  
    <CardListing searchTerm={searchTerm}/>
    <ListingDetails searchTerm={searchTerm}/> 
    </>
  )
}
