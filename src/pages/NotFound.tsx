import { useNavigate,  } from "react-router-dom" 
import { useEffect } from "react"


const NotFound = () => {
const navigate = useNavigate()

useEffect(() => {
navigate('/')
}, [])

    return null
}

export default NotFound