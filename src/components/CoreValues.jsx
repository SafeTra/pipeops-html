

import React from 'react';
import { AiOutlineCustomerService, AiOutlineFieldTime, AiOutlineSecurityScan, AiOutlineSolution, AiOutlineWallet  } from "react-icons/ai";

import SectionTitles from './SectionTitles';

const CoreValues = () => {
  return (
    <>
    <div className="bg-gray-100 pt-16 pb-48">
      <SectionTitles text="Our Core Values" />
      <div className="grid grid-cols-3 pt-23 pb-23 gap-4 mx-auto max-w-[60%]">
      <div className="grid grid-cols-3 mr-8">
        {/* First row */}
        <div className="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-35 text-[#48C5D5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <AiOutlineWallet />

            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1 text-[#D55848]">Secure</h2>
            <p className="text-gray-600 w-60 text-xs pr-4">Enjoy secure online shopping with our top-notch security.</p>
          </div>
        </div>
        </div>
        <div className="flex items-center border-l-2 border-gray-700 pl-4">
        <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-35 text-[#48C5D5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <AiOutlineCustomerService />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1 text-[#D55848]">24/7 Support</h2>
            <p className="text-gray-600 w-60 text-xs pr-16">Ensuring secure transactions with 24/7 customer support.</p>
          </div>
        </div>
        <div className="flex items-center border-l-2 border-gray-700 pl-4">
        <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-35 text-[#48C5D5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
                <AiOutlineFieldTime />

            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1 text-[#D55848]">Swift Dispute Resolution</h2>
            <p className="text-gray-600 w-60 text-xs">Ensuring quick and effective solutions for any issues that may arise during transactions.</p>
          </div>
        </div>
        {/* Second row */}
        <div className="flex items-center pt-4">
          {/* Empty column */}
        </div>
        <div className="flex items-center border-l-2 border-gray-700 pl-4">
        <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-35 text-[#48C5D5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <AiOutlineSecurityScan />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1 text-[#D55848]">Transparency</h2>
            <p className="text-gray-600 w-60 text-xs pr-16">Promoting trust through clear communication in every transaction.</p>
          </div>
        </div>
        <div className="flex items-center border-l-2 border-gray-700 pl-4">
        <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-35 text-[#48C5D5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <AiOutlineSolution />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1 text-[#D55848]">Integrity</h2>
            <p className="text-gray-600 w-60 text-xs">Upholding honesty and ethical standards to build trust and credibility in all transactions.</p>
          </div>
        </div>
        </div>
    </div>
    </>
    
  );
};

export default CoreValues;
