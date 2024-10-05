import motion from '../images/motion.avif'
import design from '../images/3ddesign.avif' 
import Branding from '../images/branding.avif'  
import UXUI from '../images/UI.UX.avif'
import packaging from '../images/Packagin.avif'


const services = [ 
{ 
name: "Branding", 
service1: "Logo Design", 
service2: "Brand Identity", 
service3: "Advertisement"
}, 
{ 
name: "UI.UX", 
service1: "Web Design", 
service2: "App Design", 
service3: "Design Systems"
}, 
{ 
name: "Motion", 
service1: "3D Motion", 
service2: "Animation", 
service3: "Modeling"
}, 
]

const serviceWeProvide = [
{
name: "MOTION", 
description: "it's not just about the tools, it's about the process. We collaborate closely with you to understand your vision, your goals, and your target audience to create motion that will enhance your product and speak to your audiences.",
image: motion,
}, 
{
name: "3D DESIGN", 
description: "Elevate your brand to a whole new dimension with our cutting-edge 3D design services. Immerse your audience in interactive product experiences, jaw-dropping visualizations, and captivating animations that push the boundaries of imagination.", 
image: design,
}, 
{
name: "BRANDING", 
description: "We believe branding is more than just a logo and a website. It's the soul of your business, the story that connects with your audience on a deeper level. We'll help you identify your brand's", 
image: Branding, 
}, 
{
name: "UI.UX", 
description: "The digital world is our playground. We're experts in crafting engaging websites, building impactful social media campaigns, and driving targeted online advertising that delivers results.",
image: UXUI,
}, 
{
name: "packaging",
description: "We're not just crafting boxes, we're designing sensory experiences that leave a lasting impression. From sustainable materials and innovative closures to eye-catching graphics and interactive elements.", 
image: packaging
}
]

export {services, serviceWeProvide}