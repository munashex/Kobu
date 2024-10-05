import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Work from './pages/Work' 
import About from './pages/About' 
import Contact from "./pages/Contact"
import Footer from "./components/Footer"  
import Services from './pages/Services' 
import NotFound from "./pages/NotFound"

const App = () => {

  return (
    <div className="bg-[#000000] w-full min-h-screen">
       <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path="/works" element={<Work/>}/> 
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/services" element={<Services/>}/> 
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
       </Router>
    </div>
  )
}

export default App
