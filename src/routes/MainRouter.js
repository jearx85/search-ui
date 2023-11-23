import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchBar from '../components/navbar/SearchBar'
import Home from '../components/home/Home'
import Pdf from '../components/readDocs/ReadDocs'


export default function MainRouter() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/main' element={ <SearchBar />}/>  
          <Route path='/pdf/:ruta' element={ <Pdf />}/>  
       </Routes>
    </BrowserRouter>
  )
}
