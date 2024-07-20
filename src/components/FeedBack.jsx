    import React, { useState } from 'react';
    import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
    import hapuserBg from '../assets/images/hapuserBg.svg';
    import Avatar from '../assets/images/Avatar.svg';
    import SectionTitles from './SectionTitles';

    const customersData = [
    // Replace with actual data from your backend
    { id: 1, name: 'John Doe', title: 'CEO', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' },
    { id: 2, name: 'Jane Smith', title: 'CTO', quote: 'Excellent product quality and supportLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru.' },
    { id: 3, name: 'Alex Johnson', title: 'Marketing Manager', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru' },
    { id: 4, name: 'Rock Mason', title: 'Marketing Manager', quote: 'ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru' },
    { id: 5, name: 'Matt Petre', title: 'Marketing Manager', quote: 'Impressive results! Will definitely return.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru' },
    ];

    const FeedBack = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % customersData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + customersData.length) % customersData.length);
    };

    const placeholderImage = '../assets/icons/trxn1.svg';  

    return (
        <>
        <SectionTitles text="Happy Users" />
        <section className="bg-cover bg-center bg-relative py-20 mt-20 mb-40" style={{backgroundImage: `url(${hapuserBg})`, backgroundRepeat: 'no-repeat'}}>
            <div className="container"> 
            <div className="container mx-auto relative">  
                <div className="scrollable-cards flex justify-center overflow-hidden">  
                    {customersData.map((customer, index) => (  
                        <div  
                            key={customer.id}  
                            className={`fbcard bg-white rounded-lg p-4 transform transition-transform duration-300 ${(index >= currentIndex && index < currentIndex + 3 ? 'translate-x-0' : 'translate-x-full')} ${(index === currentIndex || index === currentIndex + 1 || index === currentIndex + 2 ? 'block' : 'hidden')}`}  
                        >  
                            <div className="bg-[#F1D1AB] rounded-t-lg p-4 w-100 overflow-hidden">  
                                <img  
                                    src={customer.image ? `path/to/${customer.id}.jpg` : placeholderImage}  
                                    alt={customer.name}  
                                    className="max-w-full rounded-md mb-2"  
                                />  
                                <h3 className="text-white text-xl font-semibold">{customer.name}</h3>  
                                <p className="text-white text-sm">{customer.title}</p>  
                            </div>  
                            <div className="bg-white rounded-b-lg mt-4 p-2">  
                                <p className="text-gray-800 text-sm">{customer.quote}</p>  
                            </div>  
                        </div>  
                    ))}  
                </div>  
                <div className="arrow-buttons">  
                    <button onClick={handlePrev} className="arrow-button left">  
                        <FaArrowLeftLong />  
                    </button>  
                    <button onClick={handleNext} className="arrow-button right">  
                        <FaArrowRightLong />  
                    </button>  
                </div>  
            </div>  
            </div> 
            
        </section>  
        </>
    );
    };

    export default FeedBack;
