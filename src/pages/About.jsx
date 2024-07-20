import React from "react"
import { motion } from "framer-motion";
import mission from '../assets/images/mission.svg';
import vision from '../assets/images/vision.svg';
import { RiSecurePaymentLine } from "react-icons/ri";

const About = () => {

  return (
    <>
      <div className="bg-services-bg bg- flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb- text-center"
        >
          
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 text-xl text-center mb-8 mt-8"
        >
          Integrity, Security, and Excellence in Escrow Services
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#48C5D5;] text-white px-6 py-3 rounded hover:bg-[#07d2ed]"
        >
          Chat Us
        </motion.button>

        <div className="w-[80%]">

      {/* Second Section - Our Story */}  
      <section className="py-16 px-4">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
        <div className="flex items-start"> 
            <div>  
              <h3 className="text-xl font-semibold mb-5">  
                We're building an online trust system designed to empower individuals and restore confidence in digital transactions.   
              </h3>  
              <div className="flex items-start"> 
                <div className="flex-shrink-0 mr-4">  
                  <RiSecurePaymentLine className="w-10 h-14 text-[#D55848]" fill="currentColor" viewBox="0 0 20 20">  
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />  
                  </RiSecurePaymentLine>  
                </div>  
                <p className="text-gray-700 leading-loose">Our platform ensures that users can conduct business securely, minimizing the risk of losing resources when trading online. With robust verification processes and transparent dealings, you can engage with confidence, knowing that your interests are safeguarded at every step. Say goodbye to uncertainty and embrace a safer, more reliable way to trade online!</p>  
              </div>  
            </div>  
          </div> 
          <div>  
            <ul className="list-disc pl-5">  
              <li>  
                <h4 className="font-bold text-xl">INTENSE RESEARCH AND PLANNING</h4>  
                <p className="text-gray-700 leading-loose mt-2">We have carried out thorough market research and creating a comprehensive business plan. Understanding demand, identify customers, and are ready for success.</p>  
              </li>  
              <li>  
                <h4 className="font-bold text-xl mt-5">LEGAL AND REGULATORY COMPLIANCE</h4>  
                <p className="text-gray-700 leading-loose mt-2">Our escrow business complies with all licensing requirements by researching regulations and obtaining necessary permits, including a state escrow license. We collaborate with legal experts to create compliant contracts and consider establishing a business entity to protect your interests.</p>  
              </li>   
            </ul>  
          </div>  
        </div>  
      </section>  

      <section className="py-16 px-4">  
        <div className="flex flex-col md:flex-row">  
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-20">  
            <img src={mission} alt="Placeholder" className="w-full h-full object-cover" />  
          </div>  
          <div className="md:w-1/2 mt-4 md:mt-0">  
            <h2 className="text-4xl text-left font-bold">Our Mission</h2>  
            <p className="text-gray-700 leading-loose mt-4">Our mission is to provide secure and dependable escrow services that fully comply with regulatory requirements, ensuring peace of mind for our clients through transparent processes and expertly crafted contracts.</p>  
          </div>  
        </div>  
      </section>  

      {/* Fourth Section - Placeholder Image with Reverse Layout */}  
      <section className="py-16 px-4">  
        <div className="flex flex-col md:flex-row-reverse">  
          <div className="md:w-1/2 mb-6 md:mb-0 md:ml-20">  
            <img src={vision} alt="Placeholder" className="w-full h-full object-cover" />  
          </div>  
          <div className="md:w-1/2 mt-4 md:mt-0">  
            <h2 className="text-4xl text-left font-bold">Our Vision</h2>  
            <p className="text-gray-700 leading-loose mt-5">Our vision is to be the leading provider of escrow services, recognized for our commitment to integrity, compliance, and client protection, fostering trust and confidence in every transaction we facilitate.</p>  
          </div>  
        </div>  
      </section>

      {/* Fifth Section - Cards */}  
      <section className="py-16 px-4">  
        <h2 className="text-6xl text-center mb-8 font-bold leading-relaxed">Behind the Scenes: <br />The Faces of Innovation</h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {Array.from({ length: 6 }, (_, index) => (  
            <div key={index} className="border p-4 rounded-lg">  
              <img src="https://via.placeholder.com/150" alt="Team Member" className="w-full h-32 object-cover mb-4 rounded" />  
              <h3 className="text-lg font-semibold">Name {index + 1}</h3>  
              <p className="text-sm text-gray-500">Designation {index + 1}</p>  
              <p className="text-gray-700">Description text for team member goes here.</p>  
            </div>  
          ))}  
        </div>  
      </section>  
    </div>  
      </div>
      
    </>
  );
};

export default About;
