import { serviceWeProvide } from "../data/services"

const Services = () => {

    return (
        <div className="mt-11 lg:mt-16"> 
         <div className="font-unbounded space-y-2">
           <h1 className="text-white font-bold text-3xl font-unbounded lg:text-5xl text-center">SERVICES</h1>
           <h1 className="text-white lg:max-w-3xl mx-auto font-bold text-xl lg:text-3xl text-center">We are passionate about creating visually stunning and functional solutions that communicate effectively.</h1>
           </div> 


           {/* services cards  */} 
           <div className="mt-11 lg:mt-16 px-4 md:px-7 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
           {serviceWeProvide.map((service) => (
            <div key={service.name} className="flex flex-col"> 
             <img src={service.image} className="object-cover"/> 
             <div className="p-3 lg:p-5 bg-white text-black   space-y-3 h-full"> 
                <h1 className="font-unbounded text-xl font-bold">{service.name}</h1>
                <h1 className="text-lg">{service.description}</h1>
             </div>
            </div>
           ))}
           </div> 


        </div>
    )
}

export default Services