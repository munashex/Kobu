import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormEvent, useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault()
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="mt-11 lg:mt-16 px-4 md:px-7 lg:px-12">
         <div className="font-unbounded space-y-2">
           <h1 className="text-white font-bold text-3xl font-unbounded lg:text-5xl text-center">CONTACT</h1>
           <h1 className="text-white lg:max-w-3xl mx-auto font-bold text-xl lg:text-3xl text-center">Ready to ignite your brand's potential? Contact us today and let's start crafting your success story together.</h1>
        </div>


        <form className="mt-20 lg:mt-28  space-y-3 lg:max-w-5xl text-white mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-3 w-full"> 
            <input placeholder="Name" type="text"  value={name}
             onChange={(e) => setName(e.target.value)}
            className="p-4 md:p-5 rounded-lg w-full bg-[#111111] outline-none" 
            required
            /> 
            <input placeholder="Email" type="email"  value={email}
             onChange={(e) => setEmail(e.target.value)}
            className="p-4 md:p-5 rounded-lg bg-[#111111] w-full outline-none"
            required
            /> 
          </div> 

          <textarea placeholder="Message" value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-48 w-full p-3 bg-[#111111] outline-none rounded-lg" 
          required
          />
          <button className="p-3 rounded-lg bg-white w-full text-black font-bold" type="submit">SEND MESSAGE</button>
        </form> 
           
        <ToastContainer />
        </div>
    )
}

export default Contact