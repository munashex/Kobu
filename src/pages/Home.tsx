import Works from '../components/Works';
import { achievements } from '../data/achievements';
import homeVideo from '../images/kobu.mp4';
import Services from '../components/Services';
import testmonialImage from '../images/testmonial.avif' 
import { ImQuotesLeft } from "react-icons/im";
import Clients from '../components/Clients';


const Home = () => {
    return (
        <div>
            {/* Home video with text on top */}
            <div className="h-screen relative">
                <div className="h-full w-full">
                    <video 
                        src={homeVideo}
                        muted
                        autoPlay
                        playsInline
                        loop            
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-white absolute top-0 bottom-0 font-unbounded right-0 left-0 flex flex-col items-center justify-center space-y-1">
                    <h1 className="text-8xl lg:text-[20rem] font-semibold">KOBÚ</h1>
                    <h1 className="text-6xl lg:text-9xl font-semibold">studio</h1>
                </div>
            </div>
              
              {/* the rest of home jsx */}
            <div className="text-white mt-11 lg:mt-16 px-4 md:px-7 lg:px-12">
              <h1 className="text-2xl lg:text-4xl lg:max-w-5xl lg:mx-auto font-bold text-center font-unbounded">We believe branding is more than just a logo and a website. It's the soul of your business.</h1>
            
            {/* achivements section */}
            <div className="mt-11 lg:mt-16 flex flex-col md:flex-row gap-y-7 gap-x-9 lg:gap-x-14 justify-center">
              {achievements.map((achievement) => (
                <div key={achievement.number} className="flex flex-col items-center gap-y-2"> 
                  <h1 className="text-2xl font-unbounded font-semibold lg:text-4xl">{achievement.number}</h1>
                   <h1 className="text-lg text-gray-200 lg:text-xl">{achievement.name}</h1>
                </div>
              ))}
            </div>

             {/* works section */}
             <Works/>

             {/* services section  */}
             <Services/>

             {/* testimonal section */} 
             <div className="flex flex-col lg:flex-row mt-20 lg:mt-28">
               <div className="lg:w-1/2 bg-white w-full p-3 md:p-5 relative">
                <span><ImQuotesLeft size={40} color="black"/></span> 

                <div className="space-y-4 mt-9 lg:absolute bottom-4"> 
                  <h1 className="text-lg lg:text-2xl font-bold text-[#030303]">We’ve been with KOBÚ for 3 years now. They helped us increase our sales by 600% in the first year which is unheard of.</h1>
                   <div> 
                    <h1 className="text-lg lg:text-xl font-bold text-[#030303]">Kalo</h1>
                   <h1 className="text-[#9D9EA1] text-lg font-bold">Sarah & John Conor</h1> 
                   </div>
                </div>
               </div> 

               <div className="lg:w-1/2"> 
                <img src={testmonialImage} 
                  className="w-full h-96 lg:h-[39rem] object-cover" 
                   alt="kobu"
                  />
               </div>
             </div>

             {/* clients sections */}
             <Clients/>
            </div> 
          
        
        </div>
    );
}

export default Home;
