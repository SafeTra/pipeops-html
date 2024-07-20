// src/components/LogoSection.jsx
import React from 'react';

const logos = [
	'logo1.png',
	'logo2.png',
	'logo2.png',
	'logo2.png',
	'logo2.png',
	'logo2.png',
	// Add more logo paths here
	];

const LogoSection = ({ logos }) => {
    return (
        <div className="flex overflow-x-auto whitespace-nowrap justify-center items-center h-[400px] gap-12">
        {logos.map((logo, index) => (
            <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="max-h-12"
            />
        ))}
        </div>
    
    );
};

export default LogoSection;

