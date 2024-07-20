import React, { useState } from 'react';  

const ContactForm = () => {  
    const [formData, setFormData] = useState({  
        name: '',  
        phone: '',  
        email: '',  
        message: ''  
    });  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({  
            ...formData,  
            [name]: value  
        });  
    };  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        
        try {  
            const response = await fetch('YOUR_API_ENDPOINT_HERE', {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json'  
                },  
                body: JSON.stringify(formData)  
            });  

            if (response.ok) {  
                setFormData({ name: '', phone: '', email: '', message: '' });  
                alert('Message sent successfully');  
            } else {  
                alert('Failed to send message');  
            }  
        } catch (error) {  
            console.error('Error:', error);  
            alert('An error occurred while sending your message.');  
        }  
    };  

    return (  
        <div className="bg-services-bg flex items-center justify-center ">  
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">  
                <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>  
                <form onSubmit={handleSubmit} className="space-y-4">  
                    <div>  
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>  
                        <input  
                            type="text"  
                            id="name"  
                            name="name"  
                            value={formData.name}  
                            onChange={handleChange}  
                            required  
                            placeholder="Your full name"  
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"  
                        />  
                    </div>  
                    <div>  
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>  
                        <input  
                            type="tel"  
                            id="phone"  
                            name="phone"  
                            value={formData.phone}  
                            onChange={handleChange}  
                            required 
                            placeholder="Current phone number"   
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"  
                        />  
                    </div>  
                    <div>  
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>  
                        <input  
                            type="email"  
                            id="email"  
                            name="email"  
                            value={formData.email}  
                            onChange={handleChange}  
                            required
                            placeholder="Enter a valid email"    
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"  
                        />  
                    </div>  
                    <div>  
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>  
                        <textarea  
                            id="message"  
                            name="message"  
                            value={formData.message}  
                            onChange={handleChange}  
                            required  
                            placeholder="Write to us..."  
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"  
                            rows="4"  
                        />  
                    </div>  
                    <button  
                        type="submit"  
                        className="w-full bg-[#48C5D5] text-white rounded-md px-4 py-2 hover:bg-[#0ad2ec] transition duration-200"  
                    >  
                        Send Message  
                    </button>  
                </form>  
            </div>  
        </div>  
    );  
};  

export default ContactForm;