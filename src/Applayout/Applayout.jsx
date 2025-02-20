import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home/Home"
import Projects from "../Pages/Projects/Projects"
import Codex from "../Pages/codex/Codex"
import Socialprofile from "../Pages/SocialProfiles/Socialprofiles"
import Contact from "../Pages/Contact/Contact"
const Applayout = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/codex" element={<Codex/>} />
        <Route path="/socials" element={<Socialprofile/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Applayout
