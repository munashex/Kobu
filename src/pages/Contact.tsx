

const Contact = () => {

    return (
        <div className="mt-11 lg:mt-16 px-4 md:px-7 lg:px-12">
         <div className="font-unbounded space-y-2">
           <h1 className="text-white font-bold text-3xl font-unbounded lg:text-5xl text-center">CONTACT</h1>
           <h1 className="text-white lg:max-w-3xl mx-auto font-bold text-xl lg:text-3xl text-center">Ready to ignite your brand's potential? Contact us today and let's start crafting your success story together.</h1>
        </div>


        <form className="mt-20 lg:mt-28  space-y-3 lg:max-w-5xl text-white mx-auto">
          <div className="flex flex-col md:flex-row gap-3 w-full"> 
            <input placeholder="Name" type="text" 
            className="p-4 md:p-5 rounded-lg w-full bg-[#111111] outline-none"
            /> 
            <input placeholder="Email" type="email" 
            className="p-4 md:p-5 rounded-lg bg-[#111111] w-full outline-none"
            /> 
          </div> 

          <textarea placeholder="Message"   
          className="h-48 w-full p-3 bg-[#111111] outline-none rounded-lg" 
          required
          />
          <button className="p-3 rounded-lg bg-white w-full text-black font-bold" type="submit">SEND MESSAGE</button>
        </form> 

        </div>
    )
}

export default Contact