import React, { useState } from 'react';  

const AccordionItem = ({ title, content, imageUrl, isOpen, onClick }) => {  
    return (  
        <div className="border-b">  
            <div  
                className="flex items-center p-4 cursor-pointer hover:bg-gray-200"  
                onClick={onClick}  
            >  
                {imageUrl && (  
                    <img src={imageUrl} alt={title} className="w-12 h-12 mr-4 rounded" />  
                )}  
                <div className="flex justify-between items-center w-full">  
                    <h2 className="font-medium text-sm">{title}</h2>  
                    <span>{isOpen ? '-' : '+'}</span>  
                </div>  
            </div>  
            {isOpen && (  
                <div className="p-4 leading-loose">  
                    <p>{content}</p>  
                    <div className="mt-2 text-right">  
                        <button className="mt-2 text-[#48C5D5] hover:underline">Learn More</button>  
                    </div>  
                </div>  
            )}  
        </div>  
    );  
};  

const Accordion = ({ items }) => {  
    const [openIndex, setOpenIndex] = useState(null);  

    const handleToggle = (index) => {  
        setOpenIndex(openIndex === index ? null : index);  
    };  

    return (  
        <div className="shadow-md rounded-md">  
            {items.map((item, index) => (  
                <AccordionItem  
                    key={index}  
                    title={item.title}  
                    content={item.content}  
                    imageUrl={item.imageUrl}  
                    isOpen={openIndex === index}  
                    onClick={() => handleToggle(index)}  
                />  
            ))}  
        </div>  
    );  
};  

export default Accordion;