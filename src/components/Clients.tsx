import { clients } from "../data/clients"


const Clients = () => {

    return (
        <div className="mt-20 lg:mt-28">
            <h1 className="text-white font-bold text-3xl font-unbounded lg:text-5xl mb-7 lg:mb-11">Clients</h1>
              
            {/* clients on sm screens  */}
            <div className="grid grid-cols-1 md:hidden">
            {clients.slice(0, 5).map((client) => (
            <div className="border border-gray-700 p-5  flex justify-center"> 
             <img src={client.image}/>
            </div>
            ))}
            </div>  
            
            {/* clients on md screens */}
            <div className="hidden md:grid grid-cols-3 lg:hidden">
            {clients.slice(0, 6).map((client) => (
            <div className="border border-gray-700 p-5  flex justify-center"> 
             <img src={client.image}/>
            </div>
            ))}
            </div>  

             {/* clients on lg screens */}
            <div className="hidden lg:grid grid-cols-5">
            {clients.map((client) => (
            <div className="border border-gray-700 p-5  flex justify-center"> 
             <img src={client.image}/>
            </div>
            ))}
            </div>  

        </div>
    )
}

export default Clients