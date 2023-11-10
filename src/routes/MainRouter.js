import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchBar from '../components/navbar/SearchBar'
import Home from '../components/home/Home'


export default function MainRouter() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/main' element={ <SearchBar />}/>  
       </Routes>
    </BrowserRouter>
  )
}
