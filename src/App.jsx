import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import {Routes, Route } from 'react-router-dom'
import Kitchen from './stores/components/kitchen'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import Watchespage from './stores/pages/Watchespage'
import MenFashionPage from './stores/pages/MenFashionPage'
import  WomanPage  from './stores/pages/WomanPage'
import Furniturepage from './stores/pages/Furniturepage'
import ACPage from './stores/pages/ACPage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import BooksPage from './stores/pages/BooksPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import TvPage from './stores/pages/TvPage'
import MobileSingle from './singles/MobileSingle'
import ComputersSingle from './singles/ComputersSingle'
import UserCart from './stores/UserCart'
import WatchesSingle from './singles/WatchesSingle'
import MenFashionSingle from './singles/MenFashionSingle'
import WomanSingle from './singles/WomanSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import ACSingle from './singles/ACSingle'
import KitchenSingle from './singles/KitchenSingle'
import FridgeSingle from './singles/FridgeSingle'
import BooksSingle from './singles/BooksSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TVSingle from './singles/TvSingle'


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
        <Route path='/abc' element={<Kitchen/>}/>
       <Route path='/mobiles' element={<MobilePage/>}/>
       <Route path='/Computers' element ={<ComputerPage/>}/>
       <Route path='/Watches' element ={<Watchespage/>}/>
       <Route path='/Men Fashion' element ={<MenFashionPage/>}/>
       <Route path='/Woman' element ={<WomanPage/>}/>
       <Route path ='/Furniture'element={<Furniturepage/>}/>
       <Route path ='/Ac'element ={<ACPage/>}/>
       <Route path='/Kitchen' element={<KitchenPage/>}/>
       <Route path='/Fridge' element={<FridgePage/>}/>
       <Route path='/Books' element={<BooksPage/>}/>
       <Route path='/Speakers' element={<SpeakersPage/>}/>
       <Route path='/Tv' element={<TvPage/>}/>
       <Route path="/mobiles/:id" element = {<MobileSingle/>}/>
       <Route path="/computers/:id" element = {<ComputersSingle/>}/>
      <Route path='/watches/:id' element={<WatchesSingle/>}/>
     < Route path='/men/:id' element={<MenFashionSingle/>}/>
     <Route path="/woman/:id" element={<WomanSingle/>} />
     <Route path="/furniture/:id" element={<FurnitureSingle />} />
     <Route path="/ac/:id" element={<ACSingle />} />
     <Route path="/kitchen/:id" element={<KitchenSingle />} />
     <Route path="/fridge/:id" element={<FridgeSingle />} />
     <Route path="/books/:id" element={<BooksSingle />} />
     <Route path="/speaker/:id" element={<SpeakerSingle />} />
      <Route path="/tv/:id" element={<TVSingle />} />
      <Route path="/cart" element={<UserCart />} />

        </Routes>

    
    </div>
  )
}

export default App