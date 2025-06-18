import './App.css'
import Loadingscreen from './components/Loadingscreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import About from './components/sections/About'
import './index.css'
import { useState } from 'react'
import Project from './components/sections/Project'
import SocialLinks from './components/sections/SocialLinks'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Contact from './components/sections/Contact'

function App() {
  const [isloading, setisLoading] = useState(false)
  const[menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      {!isloading &&<Loadingscreen onComplete ={() =>setisLoading(true)}/>}{""}
      <div className={`min-h-screen transition-opacity duration-700 ${isloading ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About /> 
        <Project />
        {/* <Contact /> */}
        <SocialLinks />
      </div>
    </>
  )
}

export default App
