import React, { useState } from 'react';
import { motion } from "framer-motion";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { PiFlowerTulipThin } from "react-icons/pi";
import { GoCreditCard } from "react-icons/go";
import { GrIntegration } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import ContactForm from '../components/Input/ContactForm';




const Support = () => {
  const [showModal, setShowModal] = useState(false);  
  const [modalContent, setModalContent] = useState('');  
  const [openFAQs, setOpenFAQs] = useState({});  

  const handleOpenModal = (description) => {  
      setModalContent(description);  
      setShowModal(true);  
  };  

  const handleCloseModal = () => {  
      setShowModal(false);  
  };  

  const toggleFAQ = (index) => {  
      setOpenFAQs((prev) => ({  
          ...prev,  
          [index]: !prev[index]  
      }));  
  };  
  const cardData = [  
      { title: 'Getting Started', description: 'First steps with our services.', icon: <PiFlowerTulipThin  className="h-12 w-12 text-[#D55848]" /> },  
      { title: 'Billing', description: 'How our fees are calculated', icon: <GoCreditCard   className="h-9 w-9 text-[#D55848]" />},  
      { title: 'Integrations', description: 'integrate our services', icon: <GrIntegration  className="h-9 w-9 text-[#D55848]" /> },  
      { title: 'Mobile', description: 'All about our mobile app', icon: <HiOutlineDevicePhoneMobile  className="h-11 w-11  text-[#D55848]" />}  
  ];  

  return (
    <>
      <section className="bg-services-bg bg- flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb- text-center"
        >
          
          Expert Escrow Support
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 text-xl text-center mb-8 mt-8"
        >
          Get Answers and Assistance Anytime
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#48C5D5;] text-white px-6 py-3 rounded hover:bg-[#07d2ed]"
        >
          Chat Us on WhatsApp
        </motion.button>
        <div className="container mx-auto mt-10 p-5 w-[80%]">  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
                {/* Column 1: Button Cards */}  
                <div className="md:p-5">  
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">  
                    {cardData.map((card, index) => (  
                        <div   
                            key={index}   
                            className="border rounded-lg p-4 transform transition-transform duration-200 hover:scale-105 cursor-pointer"  
                            onClick={() => handleOpenModal(card.description)} 
                        >  
                            <div className="flex flex-col items-center mb-2">  
                                {card.icon}  
                                <h3 className="text-lg font-semibold mt-2">{card.title}</h3>  
                            </div>  
                            <p className="text-gray-600 text-center">{card.description}</p>     
                        </div>  
                    ))}   
                    </div>   
                </div>  

                {/* Column 2: FAQs */}  
                <div className="md:p-5">  
                    <h2 className="text-2xl font-semibold mb-5">FAQs</h2>  
                    <div className="border rounded-lg">  
                        {['What is escrow?', 'How does your service work?', 'What fees do you charge?', 'How secure is my data?', 'How to contact support?'].map((faq, index) => (  
                            <div key={index} className="border-b">  
                                <div   
                                    className="flex justify-between cursor-pointer p-4 hover:bg-gray-200"  
                                    onClick={() => toggleFAQ(index)}  
                                >  
                                    <span>{faq}</span>  
                                    {openFAQs[index] ? (  
                                        <MinusOutlined className="text-red-500" />  
                                    ) : (  
                                        <PlusOutlined className="text-[#07d2ed]" />  
                                    )}  
                                </div>  
                                {openFAQs[index] && (  
                                    <p className="p-4 text-gray-600">This is a placeholder answer for the question: "{faq}"</p>  
                                )}  
                            </div>  
                        ))}  
                    </div>  
                </div>  
            </div>  

            {/* Modal for Button Cards */}  
            {showModal && (  
                <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">  
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-5">  
                        <h3 className="text-lg font-semibold">More Information</h3>  
                        <p className="mt-3">{modalContent}</p>  
                        <div className="flex justify-end mt-4">  
                            <button className="bg-[#07d2ed] text-white rounded px-4 py-2" onClick={handleCloseModal}>Close</button>  
                        </div>  
                    </div>  
                </div>  
            )}  
        </div>  
        
      </section>

      <main className="py-12">  
                <ContactForm />  
            </main> 
      
    </>
  );
};

export default Support;
