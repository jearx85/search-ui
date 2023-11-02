import React from 'react'
import { BrowserRouter} from 'react-router-dom'

import SearchBar from '../components/navbar/SearchBar'


export default function MainRouter() {
  return (
    <BrowserRouter>
        <SearchBar />
        
    </BrowserRouter>
  )
}
