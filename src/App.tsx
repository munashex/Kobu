import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Work from './pages/Work' 
import About from './pages/About'

const App = () => {

  return (
    <div className="bg-[#000000] w-full min-h-screen">
       <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path="/works" element={<Work/>}/> 
          <Route path="/about" element={<About/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
