import React, { useState } from 'react';
import hiw_image1 from '../assets/images/hiw_image1.svg';
import hiw_image2 from '../assets/images/hiw_image2.svg';
import hiw_image3 from '../assets/images/hiw_image3.svg';
import hiw_image4 from '../assets/images/hiw_image4.svg';
import hiw_image5 from '../assets/images/hiw_image5.svg';
import StatImage from '../assets/images/StatImage.svg';
import bg_stats_bg from '../assets/images/bg_stats_bg.svg';
import SectionTitles from './SectionTitles';
import { AiOutlineLock, AiOutlineFileProtect, AiOutlineUsergroupAdd  } from "react-icons/ai";



const steps = [
    { id: 1, title: 'Buyer and Seller agree to terms', text: 'Either a Seller or a Buyer initiates a tranaction. After signing up on safetraplus.com, all parties agree to the terms of the transaction', image: hiw_image1 },
    { id: 2, title: 'Buyer pays to safetraplus.com', text: 'The buyer via approved payment methods pays the agreed amount to a secure Safetra account. Safetra verifies payment and notifies the seller that funds has been secured in Safetra.', image: hiw_image2 },
    { id: 3, title: 'Seller ships merchandize to buyer', text: 'When payment is verified, the seller sends the merchandise and submit the tracking information. Safetraplus.com verifies that the buyer received the merchandise', image: hiw_image3 },
    { id: 4, title: 'Buyer accepts  merchandise', text: 'The buyer inspects the merchandise for a set number of days and can either accept or reject it, The buyer accepts the goods or service', image: hiw_image4 },
    { id: 5, title: 'Safetraplus.ng pays the seller', text: 'Safetra releases funds to the seller from the Safetra vault', image: hiw_image5 },
    ];

const HowItWork = () => {

    return (

        <>
            <div className="how-it-work text-center mt-16 mx-auto max-w-4xl">
                <SectionTitles text="How It Work" />
                {steps.map((step, index) => (
                    <div key={step.id} className={`flex flex-col md:flex-row items-center mb1 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/4 p-6 flex justify-start">
                        <img src={step.image} alt={step.title} className="w-full h-auto max-w-xs mx-auto hiw" />
                    </div>
                    <div className="md:w-1/2 p-16 text-left relative">
                        <div className="text-9xl font-bold text-gray-100 absolute top-12 left-32 transform -translate-y-1/2 -translate-x-1/2 opacity-1">
                        0{step.id}
                        </div>
                        <h2 className="text-2xl font-bold mb-2 relative" style={{ whiteSpace: 'nowrap' }}>{step.title}</h2>
                        <p className="relative">{step.text}</p>
                    </div>
                    </div>
                ))}
            </div>
            <div style={{ backgroundImage: `url(${bg_stats_bg})` }}className="bg-bg_stats_bg bg-cover bg-center">
                <div className="container mx-auto text-center mt-20 mb-20">
                <SectionTitles text="Our Statistics" />
                    <div className="flex flex-wrap">
                        {/* Left column (image) */}
                        <div className="w-full md:w-1/2">
                            <img src={StatImage} alt="Statistics" className="w-full h-auto" />
                        </div>
                        {/* Right column (rows) */}
                        <div className="w-full md:w-1/2 p-28">
                            <div className="flex items-center mb-8">
                                <div className="stat-icon">
                                    <AiOutlineLock />
                                </div>
                                <div className='text-left'>
                                    <h3 className="text-4xl text-left text-[#48C5D5] font-bold">10M+</h3>
                                    <p className='text-xl'>Funds Protected</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-8">
                            <div className="stat-icon">
                                    <AiOutlineFileProtect />
                                </div>
                                <div className='text-left'>
                                    <h3 className="text-4xl text-left font-bold text-[#48C5D5]">340M+</h3>
                                    <p className='text-xl '>Transactions completed</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                            <div className="stat-icon">
                                    <AiOutlineUsergroupAdd />
                                </div>
                                <div className='text-left'> 
                                    <h3 className="text-4xl text-left font-bold text-[#48C5D5]">47K+</h3>
                                    <p className='text-xl'>Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWork;