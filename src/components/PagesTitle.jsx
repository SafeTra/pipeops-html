    import React from "react"
    import { motion } from "framer-motion";

    const PagesTitle = () => {

    return (
        <>
        <section className="bg-services-bg bg- flex flex-col items-center justify-center min-h-screen">
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
        </section>
        </>
    );
    };

    export default PagesTitle;