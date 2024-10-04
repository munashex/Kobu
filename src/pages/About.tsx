import { clients } from '../data/clients'
import aboutImage from '../images/aboutImage.avif'
import { achievements } from '../data/achievements'
import { aboutData, ourTeam } from '../data/about'


const About = () => {

    return (
        <div className="px-4 md:px-7 lg:px-12"> 
            
           <div className="mt-11">
            <img src={aboutImage} className="w-full rounded-t-3xl object-cover h-96 lg:h-[33rem]"/>

              {/* on small screen */}
             <div className="flex rounded-b-3xl bg-[#1B1B1B] p-4 flex-row md:hidden justify-center gap-3 flex-wrap">
                {clients.slice(0, 4).map((client, index) => (
                <div key={index}> 
                  <img src={client.image}/>
                </div>
                ))}
             </div>  

              {/* on md & lg screens */} 
              <div className=" bg-[#1B1B1B] rounded-b-3xl p-5 hidden md:flex flex-row md:justify-center  gap-6 lg:gap-9 flex-wrap gap-y-3">
              {clients.slice(0, 7).map((client, index) => (
                <div key={index}> 
                  <img src={client.image}/>
                </div>
                ))}
              </div>
           </div>  

           
           {/* achievements */}
           <div className="mt-20 lg:mt-28 text-white">
           <h1 className="text-2xl lg:text-4xl lg:max-w-5xl lg:mx-auto font-bold text-center font-unbounded">We believe branding is more than just a logo and a website. It's the soul of your business.</h1>
            
           <div className="mt-11 lg:mt-16 flex flex-col md:flex-row gap-y-7 gap-x-9 lg:gap-x-14 justify-center">
              {achievements.map((achievement) => (
                <div key={achievement.number} className="flex flex-col items-center gap-y-2"> 
                  <h1 className="text-2xl font-unbounded font-semibold lg:text-4xl">{achievement.number}</h1>
                   <h1 className="text-lg text-gray-200 lg:text-xl">{achievement.name}</h1>
                </div>
              ))}
            </div>
           </div>
        

           <div className="mt-20 lg:mt-28 flex flex-col gap-y-7"> 
            {aboutData.map((info, index) =>  ( 
            <div key={info.name} className="text-white flex flex-col gap-y-3 lg:flex lg:flex-row gap-x-7 lg:items-center"> 
            <div className={`lg:w-[60%] w-full ${index === 1 ? 'lg:order-1': ''}`}>
            <img className="w-full object-cover  h-96 lg:h-[30rem]" src={info.image}/>
           </div> 

           <div className="lg:w-[40%] w-full"> 
             <h1 className="text-2xl font-unbounded mb-4">{info.name}</h1>
             <h1 className="text-lg text-[#9D9EA1]">{info.description}</h1>
             <h1 className="text-lg text-[#9D9EA1] mt-3">{info?.description1}</h1>
           </div>
            </div> 
            ))}
           </div>  
            

            {/* Our Team */}
           <div className="mt-20 lg:mt-28">
           <h1 className="text-white font-bold text-3xl font-unbounded lg:text-5xl">OUR TEAM</h1>
           
            
           <div className="mt-11  grid grid-cols-1 md:grid-cols-2 gap-11 lg:grid-cols-4">
             {ourTeam.map((team) => (
              <div key={team.name} className="space-y-2"> 
                <img src={team.image} 
                className="mix-blend-luminosity w-full object-cover h-80"
                /> 
                <div className="text-white"> 
                  <h1 className="text-xl font-unbounded font-bold">{team.name}</h1>
                  <h1 className="text-lg font-bold">{team.occupation}</h1>
                </div>
              </div>
             ))}
           </div>
           </div>

        </div>
    )
}

export default About 