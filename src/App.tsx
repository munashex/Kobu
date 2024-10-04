import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Work from './pages/Work'

const App = () => {

  return (
    <div className="bg-[#000000] w-full min-h-screen">
       <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/> 
          <Route path="/works" element={<Work/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
