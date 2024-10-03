import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Home from './pages/Home'
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <div className="bg-[#000000] w-full min-h-screen">
       <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
