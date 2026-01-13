import { Outlet } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Header from './components/Header'


export default function App(){
  const [searchTerm , setSearchTerm] = useState("")
  return(
    <>
    <Header setSearchTerm={setSearchTerm}/> 
    
      <Outlet context={{searchTerm}}/>
     
    </>
  )
}
